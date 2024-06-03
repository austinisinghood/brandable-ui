// app/api/submitForm/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();

    if (data.success) {
      return NextResponse.json({
        message: "Form submitted successfully",
        data,
      });
    } else {
      return new NextResponse(
        JSON.stringify({ message: "Failed to submit form", data }),
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Submission error:", error);
    return new NextResponse(
      JSON.stringify({ message: "Server error", error }),
      { status: 500 }
    );
  }
}
