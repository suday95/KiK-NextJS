import { NextResponse } from "next/server";
import { db } from "@/backend/firebaseAdmin.js";

export async function GET() {
  try {
    // Use IST timezone for consistency
    const now = new Date();
    const today = now.toLocaleDateString("en-CA", { timeZone: "Asia/Kolkata" }); // en-CA gives YYYY-MM-DD format

    const snapshot = await db
      .collection("questions")
      .where("date", "<=", today)
      .orderBy("date", "asc")
      .get();

    if (snapshot.empty) {
      return NextResponse.json(
        { message: "No questions found" },
        { status: 200 }
      );
    }

    const questions = snapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        questionId: data.questionId || doc.id,
        title: data.title || data.question,
        date: data.date,
        score: data.score,
      };
    });

    return NextResponse.json({ questions }, { status: 200 });
  } catch (error) {
    console.error("Error fetching questions:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
