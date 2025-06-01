import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { age, gender, goal, dietType, activityLevel } = body;

        const prompt = `
You're a nutritionist. Recommend meal links for:
- Age: ${age}
- Gender: ${gender}
- Goal: ${goal}
- Diet Type: ${dietType}
- Activity Level: ${activityLevel}

Respond in this format:
Balanced Recommendations:
- https://example.com/meal1

High Protein Recommendations:
- https://example.com/meal2

Low Carbs Recommendations:
- https://example.com/meal3

Low Fat Recommendations:
- https://example.com/meal4

Ideal Calorie Intake: 2200 kcal
`;

        const response = await fetch("https://api-inference.huggingface.co/models/microsoft/phi-4", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.HUGGINGFACE_API_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inputs: prompt }),
        });

        const result = await response.json();

        return NextResponse.json({
            recommendation: result[0]?.generated_text || "No response received",
        });
    } catch (err: any) {
        console.error("Error in API route:", err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
