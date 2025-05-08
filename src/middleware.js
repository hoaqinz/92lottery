import { NextResponse } from 'next/server';

export function middleware(request) {
  // Redirect www to non-www
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // Redirect www to non-www
  if (hostname.startsWith('www.')) {
    const newHostname = hostname.replace(/^www\./, '');
    url.host = newHostname;
    return NextResponse.redirect(url);
  }

  // Xử lý các routes
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
