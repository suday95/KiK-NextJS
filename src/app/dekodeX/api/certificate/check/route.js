// app/api/certificate/check/route.js
import { NextResponse } from "next/server";
import { db } from "@/backend/firebaseAdmin.js";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const doc = await db.collection("certificates").doc("allCertificates").get();
  const entries = doc.exists ? doc.data().entries || [] : [];

  const match = entries.find((entry) => entry.email === email);

  return NextResponse.json({ exists: !!match });
}
