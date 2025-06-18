import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const staticAuthToken = process.env.STATIC_AUTH_TOKEN;

    if (!staticAuthToken) {
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Generate a temporary session token (valid for 1 hour)
    const sessionToken = Buffer.from(
      JSON.stringify({
        token: staticAuthToken,
        expires: Date.now() + 3600000, // 1 hour
        issued: Date.now(),
      })
    ).toString("base64");

    return NextResponse.json({ sessionToken });
  } catch (error) {
    console.error("Auth token generation error:", error);
    return NextResponse.json(
      { error: "Failed to generate session token" },
      { status: 500 }
    );
  }
}
