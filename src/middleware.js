import { NextResponse } from "next/server";

export function middleware(request) {
  const staticAuthToken = process.env.STATIC_AUTH_TOKEN;
  const origin = request.headers.get("origin");

  // Define allowed origins
  const allowedOrigins = [
    "https://kodeinkgpnew.netlify.app",
    "https://kodeinkgp.in",
    "http://localhost:3000", // for development
    "http://localhost:3001", // for development
  ];

  const isAllowedOrigin = !origin || allowedOrigins.includes(origin);

  if (!staticAuthToken) {
    console.error(
      "SERVER ERROR: STATIC_AUTH_TOKEN is not set in environment variables. Please check your .env.local file."
    );
    return NextResponse.json(
      { message: "Server configuration error. Please try again later." },
      { status: 500 }
    );
  }

  // Handle preflight OPTIONS requests - only allow from permitted origins
  if (request.method === "OPTIONS") {
    if (isAllowedOrigin) {
      return new NextResponse(null, {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": origin || "*",
          "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type, Authorization",
          "Access-Control-Max-Age": "86400",
        },
      });
    } else {
      return new NextResponse(null, { status: 403 });
    }
  }

  // Helper function to add CORS headers only for allowed origins
  function addCorsHeaders(response) {
    if (isAllowedOrigin) {
      response.headers.set("Access-Control-Allow-Origin", origin || "*");
      response.headers.set(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
      );
      response.headers.set(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );
    }
    return response;
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
    return addCorsHeaders(NextResponse.next());
  }

  // Check if origin is allowed for protected paths
  if (origin && !isAllowedOrigin) {
    return NextResponse.json(
      { message: "Forbidden. Domain not allowed." },
      { status: 403 }
    );
  }

  const authHeader = request.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    console.warn(
      `Unauthorized access attempt to ${request.nextUrl.pathname}: Missing or malformed Authorization header.`
    );
    return addCorsHeaders(
      NextResponse.json(
        { message: "Unauthorized. Missing or invalid Authorization header." },
        { status: 401 }
      )
    );
  }

  const token = authHeader.split(" ")[1];
  // Check if it's the direct static token (for server-to-server communication)
  if (token === staticAuthToken) {
    return addCorsHeaders(NextResponse.next());
  }

  // Check if it's a session token (for client-side requests)
  try {
    const sessionData = JSON.parse(Buffer.from(token, "base64").toString());
    if (
      sessionData.token === staticAuthToken &&
      sessionData.expires > Date.now()
    ) {
      return addCorsHeaders(NextResponse.next());
    }
  } catch (error) {
    // Invalid session token format
  }

  console.warn(
    `Forbidden access attempt to ${request.nextUrl.pathname}: Invalid or expired token.`
  );
  return addCorsHeaders(
    NextResponse.json(
      { message: "Forbidden. Invalid or expired token provided." },
      { status: 403 }
    )
  );
}

export const config = {
  matcher: [
    "/dekodeX/api/question/:path*",
    "/dekodeX/api/questionTitles/:path*",
    "/dekodeX/api/submit/:path*",
  ],
};
