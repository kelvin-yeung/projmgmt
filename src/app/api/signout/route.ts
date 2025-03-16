import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  // Remove the value and expire the cookie
  const options = {
    name: "session",
    value: "",
    maxAge: -1,
  };

  const cookieStore = await cookies();
  cookieStore.set(options);
  return NextResponse.json({}, { status: 200 });
}
