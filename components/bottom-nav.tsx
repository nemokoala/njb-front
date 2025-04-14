'use client';

import { useUrlQuery } from '@/hooks/use-url-query';
import { Calendar, Package, Refrigerator, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Suspense } from 'react';

function BottomNavContent() {
  const pathname = usePathname();
  const { getParam } = useUrlQuery();
  const refrigeratorId = getParam('refrigeratorId') as string;
  const hideRouter = ['/auth'];

  return (
    <AnimatePresence>
      <motion.div
        className="mx-auto h-[70px] w-full max-w-screen-md border-t bg-background bg-white"
        initial={{ opacity: 0, y: '100%' }}
        animate={hideRouter.includes(pathname) ? { opacity: 0, y: '100%' } : { opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <div className="relative mx-auto flex max-w-screen-md justify-around py-3">
          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="flex flex-col items-center"
          >
            <Link
              href="/refrigerator"
              className={`flex flex-col items-center ${pathname === '/refrigerator' ? 'text-primary' : 'text-black'}`}
            >
              <Refrigerator size={20} />
              <span>냉장고</span>
            </Link>
          </motion.div>

          {refrigeratorId && (
            <>
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="flex flex-col items-center"
              >
                <Link
                  href={`/item?refrigeratorId=${refrigeratorId}`}
                  className={`flex flex-col items-center ${pathname.startsWith('/item') ? 'text-primary' : 'text-black'}`}
                >
                  <Package size={20} />
                  <span>재료</span>
                </Link>
              </motion.div>

              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="flex flex-col items-center"
              >
                <Link
                  href={`/calendar?refrigeratorId=${refrigeratorId}`}
                  className={`flex flex-col items-center ${pathname.startsWith('/calendar') ? 'text-primary' : 'text-black'}`}
                >
                  <Calendar size={20} />
                  <span>달력</span>
                </Link>
              </motion.div>
            </>
          )}

          <motion.div
            layout
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="flex flex-col items-center"
          >
            <Link
              href="/profile"
              className={`flex flex-col items-center ${pathname === '/profile' ? 'text-primary' : 'text-black'}`}
            >
              <User size={20} />
              <span>프로필</span>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function BottomNav() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BottomNavContent />
    </Suspense>
  );
}
