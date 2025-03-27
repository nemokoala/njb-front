'use client';

import { useUrlQuery } from '@/hooks/use-url-query';
import { Calendar, Package, Refrigerator, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function BottomNav() {
  const pathname = usePathname();
  const { getParam } = useUrlQuery();
  const refrigeratorId = getParam('refrigeratorId') as string;

  return (
    <nav className="mx-auto h-[70px] w-full max-w-screen-md border-t bg-background bg-white">
      <div className="mx-auto flex max-w-screen-md justify-around py-3">
        <Link
          href="/refrigerator"
          className={`flex flex-col items-center ${pathname === '/refrigerator' ? 'text-primary' : 'text-black'}`}
        >
          <Refrigerator size={20} />
          <span>냉장고</span>
        </Link>

        {refrigeratorId && (
          <>
            <Link
              href={`/item?refrigeratorId=${refrigeratorId}`}
              className={`flex flex-col items-center ${pathname.startsWith('/item') ? 'text-primary' : 'text-black'}`}
            >
              <Package size={20} />
              <span>재료</span>
            </Link>
            <Link
              href={`/calendar?refrigeratorId=${refrigeratorId}`}
              className={`flex flex-col items-center ${pathname.startsWith('/calendar') ? 'text-primary' : 'text-black'}`}
            >
              <Calendar size={20} />
              <span>달력</span>
            </Link>
          </>
        )}
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
