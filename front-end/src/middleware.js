import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
 console.log("Token is Here",token)
    const { pathname } = req.nextUrl;

    // Redirect if no token and trying to access protected routes
    if (!token) {
        if (pathname === "/" || pathname.startsWith("/add-to-cart")) {
            return NextResponse.redirect(new URL("/auth/login", req.url));
        }
    }

    // Redirect if token exists and trying to access auth pages
    if (token && pathname.startsWith("/auth")) {
        return NextResponse.redirect(new URL("/", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!.+\\.[\\w]+$|_next).*)", // Match all paths except files and _next
        "/",                           // Match root path
        "/(api|trpc)(.*)"              // Match API routes
    ],
};
