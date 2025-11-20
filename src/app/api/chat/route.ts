import { NextRequest, NextResponse } from 'next/server';
import { FAQ } from './knowledge';

// CORS handling for POST and preflight OPTIONS requests
export async function OPTIONS(request: NextRequest) {
    return new NextResponse(null, {
        status: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Max-Age': '86400',
        },
    });
}

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();

        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'Invalid message' },
                { status: 400, headers: { 'Access-Control-Allow-Origin': '*' } }
            );
        }

        const lower = message.toLowerCase();
        const faqMatch = FAQ.find((item) => lower.includes(item.question.toLowerCase()));

        let responseText: string;
        if (faqMatch) {
            responseText = faqMatch.answer;
        } else {
            const responses = [
                "Thanks for your interest in FloPro Pools! We offer weekly, bi‑weekly, and monthly pool service starting at just $99/month. Would you like to schedule a free quote?",
                "We serve Port Charlotte, Punta Gorda, North Port, and Englewood with professional pool care. What questions do you have about our services?",
                "Our team specializes in salt water pools, canal properties, and pet‑safe service. How can we help with your pool maintenance needs?",
            ];
            responseText = responses[Math.floor(Math.random() * responses.length)];
        }

        return NextResponse.json(
            { response: responseText },
            { headers: { 'Access-Control-Allow-Origin': '*' } }
        );
    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            { error: 'Failed to process request', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500, headers: { 'Access-Control-Allow-Origin': '*' } }
        );
    }
}
