// src/app/api/gemini-chat/route.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  const { prompt } = await req.json();

  if (!prompt || typeof prompt !== "string") {
    return new Response(JSON.stringify({ error: "Invalid prompt." }), { status: 400 });
  }

  try {
    const model = genAI.getGenerativeModel({
      model: "models/gemini-1.5-pro",
    });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = await response.text();

    return new Response(JSON.stringify({ text }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Gemini Error:", error);
    return new Response(JSON.stringify({ error: "Gemini failed to respond." }), {
      status: 500,
    });
  }
}
