import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // In a real application, you would validate this data
    // and store it in a database (e.g. Prisma + PostgreSQL)
    // or send it to a CRM (e.g. Salesforce, HubSpot).
    
    console.log('Received new lead enquiry:', body);

    // Simulated network delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Return success response Let frontend know data is received
    return NextResponse.json(
      { message: 'Lead captured successfully', data: body },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error handling lead capture:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
