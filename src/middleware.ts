import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const session: any = await getToken({
    req: req,
    secret: process.env.SECRET,
  });
  if (session == null) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return res;
}

export const config = {
  matcher: ["/payment-gateway/:path*"],
};
