import { checkUser } from "spwmini/middleware";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const isValid = checkUser(body.user, process.env.SPWORLDS_TOKEN || "");

    return NextResponse.json({ valid: isValid });
  } catch (error) {
    return NextResponse.json(
      { valid: false, error: "Invalid user" },
      { status: 400 }
    );
  }
}
