import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  
  // Protect /radhe-radhe-admin routes except /login
  if (path.startsWith('/radhe-radhe-admin') && !path.startsWith('/radhe-radhe-admin/login')) {
    const authCookie = request.cookies.get('admin-auth')
    if (!authCookie) {
      return NextResponse.redirect(new URL('/', request.url)) // redirect back to home page
    }
  }
  
  // Optional: Redirect /radhe-radhe-admin exactly to /radhe-radhe-admin/dashbord
  if (path === '/radhe-radhe-admin' || path === '/radhe-radhe-admin/') {
     return NextResponse.redirect(new URL('/radhe-radhe-admin/dashbord', request.url))
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: ['/radhe-radhe-admin/:path*'],
}
