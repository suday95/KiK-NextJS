import { db } from "@/backend/firebaseAdmin.js";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { pageNum } = await params;

    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!pageNum || isNaN(pageNum) || pageNum < 1) {
      return NextResponse.json(
        { error: "Invalid page number" },
        { status: 400 }
      );
    }

    const leaderboardRef = db.collection("leaderboard").doc("users");
    const leaderboardSnap = await leaderboardRef.get();

    if (!leaderboardSnap.exists) {
      return NextResponse.json(
        { error: "Leaderboard not found" },
        { status: 404 }
      );
    }

    const users = leaderboardSnap.data().users || [];
    // console.log(users)

    // Sort by totalPts descending
    const sortedLeaderboard = [...users].sort(
      (a, b) => b.totalPts - a.totalPts
    );

    const pageSize = 10;
    const startIndex = (pageNum - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const userRanking = sortedLeaderboard.findIndex(
      (user) => user.email === email
    );
    const currUser = sortedLeaderboard[userRanking];

    const rankedLeaderboard = sortedLeaderboard.map((user, index) => ({
      name: user.name || "Anonymous",
      score: user.totalPts || 0,
      rank: index + 1,
      email: "secret", // anonymize
    }));

    const paginatedLeaderboard = rankedLeaderboard.slice(startIndex, endIndex);

    return NextResponse.json(
      {
        paginatedLeaderboard,
        currentUser: {
          username: currUser ? currUser.name : "Anonymous",
          score: currUser ? Math.max(0, currUser.totalPts) : 0,
          rank: userRanking !== -1 ? userRanking + 1 : null,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
