'use client';
import { getCookie } from '@/lib/action';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = await getCookie('accessToken');
      console.log('accessToken', accessToken);
      if (!accessToken) {
        router.push('/auth');
      }
    };
    checkAuth();
  }, [router]);

  return <>{children}</>;
}
