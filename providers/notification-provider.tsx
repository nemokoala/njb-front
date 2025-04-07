'use client';

import { ReactNode } from 'react';
import useNotification from '@/hooks/use-notification';

export default function NotificationProvider({ children }: { children: ReactNode }) {
  useNotification();
  return <>{children}</>;
}
