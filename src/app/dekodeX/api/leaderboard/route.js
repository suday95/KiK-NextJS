import { db } from "@/backend/firebaseAdmin.js";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const leaderboardRef = db.collection("leaderboard").doc("users");
    const leaderboardSnap = await leaderboardRef.get();

    if (!leaderboardSnap.exists) {
      return NextResponse.json(
        { error: "Leaderboard not found" },
        { status: 404 }
      );
    }

    const users = leaderboardSnap.data().users || [];

    return NextResponse.json(
      {
        leaderboardSize: users.length,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching leaderboard size:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
