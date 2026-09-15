import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import * as dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post('/api/chat', async (req, res) => {
    try {
      const { message, history } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API key is missing. Please configure it in the secrets panel." });
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: [
          ...history,
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: "You are the SANURI Nexus AI assistant. You help users navigate the platform, solve problems related to sustainability, and guide them in creating impactful plans. Keep your answers concise, friendly, and helpful. You are a small widget on the screen, so keep responses short.",
        }
      });
      
      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: error.message || "Failed to generate response. Please try again later." });
    }
  });

  // Nexus AI Analysis Endpoint
  app.post('/api/nexus/analyze', async (req, res) => {
    try {
      const { problem } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API key is missing. Please configure it in the secrets panel." });
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = `
        You are an expert sustainability and problem-solving AI for the SANURI platform.
        The user has submitted the following problem: "${problem}"
        
        Analyze this problem and provide a structured plan to solve it.
        You MUST respond ONLY with a valid JSON object. Do not include markdown formatting like \`\`\`json.
        
        Use this exact JSON structure:
        {
          "analysis": {
            "title": "String (e.g. Environmental Impact or Efficiency Loss)",
            "description": "String (1-2 sentences summarizing the core issue)",
            "severity": "String (Low, Medium, or High)",
            "primaryMetricLabel": "String (e.g. Est. Waste, Time Lost)",
            "primaryMetricValue": "String (e.g. 72%, 40 hrs)",
            "secondaryMetricLabel": "String (e.g. Potential Saving, Cost Impact)",
            "secondaryMetricValue": "String (e.g. ₹18,400, High)"
          },
          "rootCauses": [
            "String (cause 1)",
            "String (cause 2)",
            "String (cause 3)"
          ],
          "solutions": [
            { "title": "String", "description": "String" },
            { "title": "String", "description": "String" },
            { "title": "String", "description": "String" }
          ],
          "roadmap": [
            { "title": "Plan", "timeframe": "(Week 1-2)", "description": "String" },
            { "title": "Implement", "timeframe": "(Week 3-6)", "description": "String" },
            { "title": "Monitor", "timeframe": "(Week 7-8)", "description": "String" },
            { "title": "Impact", "timeframe": "(Week 9+)", "description": "String" }
          ],
          "impact": {
            "metric1": { "value": "String (e.g. 72%)", "label": "String" },
            "metric2": { "value": "String (e.g. ₹18,400)", "label": "String" },
            "metric3": { "value": "String (e.g. 2.5 tons)", "label": "String" }
          }
        }
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: [{ role: 'user', parts: [{ text: prompt }] }]
      });
      
      let responseText = response.text || "{}";
      // Clean up markdown if the model hallucinates it
      responseText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      
      res.json(JSON.parse(responseText));
    } catch (error: any) {
      console.error("Nexus API Error:", error);
      res.status(500).json({ error: error.message || "Failed to analyze problem. Please try again later." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Production static file serving
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
