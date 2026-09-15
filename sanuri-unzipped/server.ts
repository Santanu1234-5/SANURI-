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
          systemInstruction: "You are the SANURI Nexus AI assistant. You help users navigate the platform, solve problems related to sustainability, and guide them in creating impactful plans. Keep your answers concise, friendly, and helpful. If the user describes a complex real-world problem (e.g. traffic, waste, education), you MUST include the exact phrase '[OFFER_NEXUS]' anywhere in your response to offer them the full Nexus Analysis.",
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
        You are SANURI NEXUS AI, an AI-powered problem-solving engine.
        The user has submitted the following problem: "${problem}"
        
        Analyze ONLY the user's submitted input.
        Do not assume that the problem is about a particular industry, college, environment, technology, or topic unless the user says so.
        Identify the problem, summarize it, determine plausible root causes, affected areas, potential impact, possible solutions, recommended solution, implementation steps, required resources, expected outcomes, risks, and next steps.
        Your recommendations must be practical, relevant to the user's specific input, and clearly explained.
        Do not invent facts about the user's location, organization, budget, statistics, or circumstances.
        If important information is missing, explicitly state the assumption or ask a useful follow-up question.
        
        You MUST respond ONLY with a valid JSON object. Do not include markdown formatting like \`\`\`json.
        
        Use this exact JSON structure:
        {
          "problem": "String (Clearly explain what problem the user appears to be describing)",
          "summary": "String (Short explanation of the problem in simple language)",
          "root_causes": ["String", "String"],
          "affected_areas": ["String", "String"],
          "potential_impact": ["String", "String"],
          "possible_solutions": [
            { "title": "String", "description": "String" },
            { "title": "String", "description": "String" }
          ],
          "recommended_solution": "String (Choose the strongest practical approach and explain why)",
          "action_plan": [
            { "step": "01", "action": "String" },
            { "step": "02", "action": "String" },
            { "step": "03", "action": "String" }
          ],
          "resources_required": ["String", "String"],
          "expected_outcome": ["String", "String"],
          "risks": ["String", "String"],
          "next_step": "String (One clear action they can take next)"
        }
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: [{ role: 'user', parts: [{ text: prompt }] }]
      });
      
      let responseText = response.text || "{}";
      responseText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();
      
      res.json(JSON.parse(responseText));
    } catch (error: any) {
      console.error("Nexus API Error:", error);
      res.status(500).json({ error: error.message || "Failed to analyze problem. Please try again later." });
    }
  });

  // Nexus AI Refine Endpoint (Follow-up chat)
  app.post('/api/nexus/refine', async (req, res) => {
    try {
      const { problem, analysisData, question } = req.body;
      
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API key is missing." });
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const prompt = `
        You are SANURI NEXUS AI. You previously analyzed this problem: "${problem}"
        
        Your previous analysis was:
        ${JSON.stringify(analysisData)}
        
        The user has a follow-up question or request: "${question}"
        
        Answer the user's question directly based on the context of your previous analysis. Be concise, practical, and helpful. Do not return JSON, just return a conversational markdown text response.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: [{ role: 'user', parts: [{ text: prompt }] }]
      });
      
      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Nexus Refine API Error:", error);
      res.status(500).json({ error: error.message || "Failed to generate response." });
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
