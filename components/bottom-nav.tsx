'use client';

import { Calendar, Refrigerator, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="mx-auto h-[70px] w-full max-w-screen-md border-t bg-background bg-white">
      <div className="mx-auto flex max-w-screen-md justify-around py-3">
        <Link href="/" className={`flex flex-col items-center ${pathname === '/' ? 'text-primary' : 'text-black'}`}>
          <Refrigerator size={20} />
          <span>냉장고</span>
        </Link>
        <Link
          href="/calendar"
          className={`flex flex-col items-center ${pathname === '/calendar' ? 'text-primary' : 'text-black'}`}
        >
          <Calendar size={20} />
          <span>달력</span>
        </Link>
        <Link
          href="/profile"
          className={`flex flex-col items-center ${pathname === '/profile' ? 'text-primary' : 'text-black'}`}
        >
          <User size={20} />
          <span>프로필</span>
        </Link>
      </div>
    </nav>
  );
}
