import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
    
    return res.status(200).json({ text: response.text });
  } catch (error) {
    console.error("Gemini API Error:", error);
    return res.status(500).json({ error: error.message || "Failed to generate response. Please try again later." });
  }
}
