import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import PersonalInfo from "@/models/PersonalInfo";

// GET personal info
export async function GET() {
  await connectToDatabase();
  const info = await PersonalInfo.findOne();
  return NextResponse.json(info);
}

// UPDATE personal info
export async function PUT(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();
    let info = await PersonalInfo.findOne();
    if (!info) {
      info = new PersonalInfo(body);
    } else {
      Object.assign(info, body);
    }
    await info.save();
    return NextResponse.json(info);
  } catch (error) {
    console.error("Error in PUT /api/personal-info:", error);
    return NextResponse.json(
      { error: error?.message || "Unknown error" },
      { status: 500 }
    );
  }
}
