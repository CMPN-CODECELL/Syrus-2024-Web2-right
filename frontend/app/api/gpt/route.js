// import { auth } from "@clerk/nextjs";
// import { NextResponse } from "next/server";
// import OpenAI from "openai";

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
// });

// const instructionMessage = {
//   role: "system",
//   content:
//     "Your role is to identify the body type of user based on the data receieved from user such as height, weight and all other factor.The body type identification will be on the basis of Ayurveda's three types vatta,pitta,kapha.Your responsibility is to provid type and nothing more",
// };

// export async function POST(req) {
//   try {
//     const { userId } = auth();
//     const body = await req.json();
//     const { messages } = body;
//     console.log(messages);

//     if (!openai.apiKey) {
//       return new NextResponse("OpenAI API key not configured", { status: 500 });
//     }
//     if (!messages) {
//       return new NextResponse("No messages provided", { status: 400 });
//     }

//     // Construct user message from new inputs
//     // bodyweight,
//     //   height,
//     //   gender,
//     //   age,
//     //   activityLevel,
//     //   bodyFrame,
//     //   appetite,
//     //   skinType,
//     //   hairType,
//     //   lipsAndTeeth,
//     //   eyes,
//     //   mind,
//     const userMessage = {
//       role: "user",
//       content: `User: Bodyweight: ${messages.bodyWeight}, Height: ${messages.height}, Gender: ${messages.gender}, Age: ${messages.age}, Hair Type: ${messages.hairType}, Body Frame: ${messages.bodyFrame}, Appetite: ${messages.appetite}, Skin Type: ${messages.skinType}, Lips and Teeth: ${messages.lipsAndTeeth}, Eyes: ${messages.eyes}, Mind: ${messages.mind}`,
//     };


//     // Perform completion request with the new user message
//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [instructionMessage, userMessage],
//     });

//     // Return the response from OpenAI
//     return NextResponse.json(response.choices[0].message);
//   } catch (error) {
//     console.log("[CODE_ERROR]", error);
//     return new NextResponse("Internal Error", { status: 500 });
//   }
// }

import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
});

const instructionMessage = {
  role: "system",
  content:
    "Your role is to decide the bodytype of user based on Ayurveda such as Pitta, Vatta, Kapha. Just return the body type and nothing else. Return answer in the format such as , The answer should be either Vatta, Kapha or Vita",
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
      content: `${messages.bodyWeight}, ${messages.height}, ${messages.sex}, ${messages.age}, ${messages.bodyFat}`,
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
