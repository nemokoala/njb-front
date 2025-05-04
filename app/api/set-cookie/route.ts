// app/api/set-cookie/route.ts
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { key, value, options } = await req.json();

    if (typeof key !== 'string' || typeof value !== 'string') {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
    }

    const cookieStore = await cookies();
    cookieStore.set(key, value, {
      maxAge: options?.maxAge,
      expires: options?.expires ? new Date(options.expires) : undefined,
      path: options?.path ?? '/',
      domain: options?.domain,
      secure: options?.secure ?? process.env.NODE_ENV === 'production',
      httpOnly: options?.httpOnly ?? true,
      sameSite: options?.sameSite ?? 'Lax',
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    return NextResponse.json({ error: 'Failed to set cookie' }, { status: 500 });
  }
}
