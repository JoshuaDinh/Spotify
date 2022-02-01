import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Create token if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;

  // Allow request if the following is true..
  //1) It is a request for next-auth session & provider fetching
  //2) The token exists

  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }
  // 3) Redirect user to login if they dont have token and are requesting a protected route

  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}
