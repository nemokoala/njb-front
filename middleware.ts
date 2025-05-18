import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get('rft');
  const pathname = request.nextUrl.pathname;
  console.log(refreshToken);

  // 보호된 라우트에 대한 접근 시 토큰 확인
  if (!refreshToken) {
    return NextResponse.redirect(new URL('/auth?expired=true', request.url));
  }

  if (pathname === '/') {
    return NextResponse.redirect(new URL('/refrigerator', request.url));
  }

  return NextResponse.next();
}

// 미들웨어를 적용할 경로 설정
export const config = {
  matcher: [
    // 보호하고 싶은 경로 패턴 추가
    '/((?!auth|api|icons|_next/static|_next/image|favicon.ico|firebase-messaging-sw.js|manifest.json).*)',
  ],
};
