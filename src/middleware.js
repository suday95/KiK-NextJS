import { NextResponse } from "next/server";

export function middleware(request) {
  const staticAuthToken = process.env.STATIC_AUTH_TOKEN;

  if (!staticAuthToken) {
    console.error(
      "SERVER ERROR: STATIC_AUTH_TOKEN is not set in environment variables. Please check your .env.local file."
    );
    return NextResponse.json(
      { message: "Server configuration error. Please try again later." },
      { status: 500 }
    );
  }

  const protectedPaths = [
    "/dekodeX/api/question",
    "/dekodeX/api/questionTitles",
    "/dekodeX/api/submit",
  ];

  const isProtectedPath = protectedPaths.some((path) =>
    request.nextUrl.pathname.startsWith(path)
  );

  if (!isProtectedPath) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.warn(
      `Unauthorized access attempt to ${request.nextUrl.pathname}: Missing or malformed Authorization header.`
    );
    return NextResponse.json(
      { message: "Unauthorized. Missing or invalid Authorization header." },
      { status: 401 }
    );
  }

  const token = authHeader.split(" ")[1];

  // Check if it's the direct static token (for server-to-server communication)
  if (token === staticAuthToken) {
    return NextResponse.next();
  }

  // Check if it's a session token (for client-side requests)
  try {
    const sessionData = JSON.parse(Buffer.from(token, "base64").toString());
    if (
      sessionData.token === staticAuthToken &&
      sessionData.expires > Date.now()
    ) {
      return NextResponse.next();
    }
  } catch (error) {
    // Invalid session token format
  }

  console.warn(
    `Forbidden access attempt to ${request.nextUrl.pathname}: Invalid or expired token.`
  );
  return NextResponse.json(
    { message: "Forbidden. Invalid or expired token provided." },
    { status: 403 }
  );
}

export const config = {
  matcher: [
    "/dekodeX/api/question/:path*",
    "/dekodeX/api/questionTitles/:path*",
    "/dekodeX/api/submit/:path*",
  ],
};
