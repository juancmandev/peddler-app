import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareSupabaseClient({ req, res });

  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (
    (req.nextUrl.pathname === '/app/login' ||
      req.nextUrl.pathname === '/app/sign-in') &&
    session
  )
    return NextResponse.redirect(new URL('/app', req.url));
  else if (
    req.nextUrl.pathname !== '/app/login' &&
    req.nextUrl.pathname !== '/app/sign-in' &&
    !session
  )
    return NextResponse.redirect(new URL('/app/login', req.url));
  else if (req.nextUrl.pathname === '/app' && session)
    return NextResponse.redirect(new URL('/app/map', req.url));

  return res;
}

export const config = {
  matcher: ['/app/:path*'],
};
