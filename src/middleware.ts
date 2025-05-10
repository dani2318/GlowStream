import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  // Se l'utente non è autenticato e non sta cercando di accedere a pagine/API pubbliche
  if (!token) {
    // Reindirizza alla pagina di login senza query string
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // L'utente è autenticato, permetti l'accesso
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Protegge tutto tranne:
     * - /login
     * - /api/auth/*
     * - /_next/*
     * - /favicon.ico
     * - file statici
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico|login).*)",
  ],
};
