import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
    
    return res.status(200).json({ text: response.text });
  } catch (error) {
    console.error("Nexus Refine API Error:", error);
    return res.status(500).json({ error: error.message || "Failed to generate response." });
  }
}
