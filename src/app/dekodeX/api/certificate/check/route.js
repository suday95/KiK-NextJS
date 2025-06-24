import { NextResponse } from "next/server";
import { db } from "@/backend/firebaseAdmin.js";

export async function GET(request) {
  const doc = await db.collection("certificates").doc("allCertificates").get();
  const data = doc.exists ? doc.data() : { entries: [] };
  return NextResponse.json({ entries: data.entries || [] });
}
