import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { message } = await request.json();

        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'Invalid message' },
                { status: 400 }
            );
        }

        // For now, return a simple response to test the endpoint
        const responses = [
            "Thanks for your interest in FloPro Pools! We offer weekly, bi-weekly, and monthly pool service starting at just $99/month. Would you like to schedule a free quote?",
            "We serve Port Charlotte, Punta Gorda, North Port, and Englewood with professional pool care. What questions do you have about our services?",
            "Our team specializes in salt water pools, canal properties, and pet-safe service. How can we help with your pool maintenance needs?",
        ];

        const randomResponse = responses[Math.floor(Math.random() * responses.length)];

        return NextResponse.json({ response: randomResponse });

    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            { error: 'Failed to process request' },
            { status: 500 }
        );
    }
}
