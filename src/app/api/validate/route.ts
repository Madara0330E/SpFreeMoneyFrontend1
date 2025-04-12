import { validate } from "spwmini/middleware";
import { NextResponse } from "next/server";

const handler = validate(process.env.SPWORLDS_TOKEN || "");

export async function POST(req: Request) {
  try {
    const result = await handler(req);
    return NextResponse.json({ valid: result === 1 });
  } catch (error) {
    return NextResponse.json(
      { valid: false, error: "Invalid user" },
      { status: 400 }
    );
  }
}
