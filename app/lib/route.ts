import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const lead = await request.json();

    console.log("New lead:", lead);

    return NextResponse.json({
      success: true,
      message: "Lead received",
    });

  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Invalid request",
      },
      {
        status: 400,
      }
    );
  }
}



