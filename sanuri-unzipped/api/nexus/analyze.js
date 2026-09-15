import { GoogleGenAI } from '@google/genai';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

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
    
    return res.status(200).json(JSON.parse(responseText));
  } catch (error) {
    console.error("Nexus API Error:", error);
    return res.status(500).json({ error: error.message || "Failed to analyze problem. Please try again later." });
  }
}
