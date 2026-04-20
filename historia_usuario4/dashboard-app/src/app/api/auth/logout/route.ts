// Logout — borra la cookie y redirige a login
import { NextResponse } from "next/server";

export async function GET() {
  const res = NextResponse.redirect(new URL("/login", "http://localhost:3000"));
  res.cookies.delete("token");
  return res;
}
