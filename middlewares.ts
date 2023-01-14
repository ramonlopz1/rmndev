import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

// function to define the routes that will be protected
const isProtectedRoute = (pathname: string) => {
  return pathname.startsWith('/panel');
}

const secret = process.env.SECRET

// nextauth function, need to be created at the root of the application
export async function middleware(req: NextRequest) {
  const role = req.headers.get("authorization");

  const { pathname } = req.nextUrl;

  const token = await getToken({ req, secret })

  // if !token: unauthorized
  if (isProtectedRoute(pathname) && !token) {
    return NextResponse.redirect(new URL('/api/auth/unauthorized', req.url));
  }

  // if token: authorized 
  return NextResponse.next();
  
}

// configure the routes that the middleware function will be applied
export const config = {
  matcher: ['/panel/:path*']
};