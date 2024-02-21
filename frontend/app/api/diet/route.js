import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

const instructionMessage = {
  role: "system",
  content:
    "You are diet expert and have to suggest Diet plan for Indian user according to Ayurveda based on their dosha type",
};

export async function POST(req) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API key not configured", { status: 500 });
    }
    if (!messages) {
      return new NextResponse("No messages provided", { status: 400 });
    }

    // Construct user message from new inputs
    const userMessage = {
      role: "user",
      content: "vatta",
    };

    // Perform completion request with the new user message
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, userMessage],
    });

    // Return the response from OpenAI
    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log("[CODE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
