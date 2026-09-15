import { GoogleGenAI } from '@google/genai';
import * as dotenv from 'dotenv';

dotenv.config();

async function test() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: "hello"
    });
    console.log("3.8-flash:", response.text);
  } catch (e: any) {
    console.log("3.8-flash error:", e.message);
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite',
      contents: "hello"
    });
    console.log("3.1-flash-lite:", response.text);
  } catch (e: any) {
    console.log("3.1-flash-lite error:", e.message);
  }
}
test();
