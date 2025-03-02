'use client';
import { getCookie } from '@/lib/action';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getNewAccessToken } from '@/lib/Fetch.util';
export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const accessToken = await getCookie('accessToken');
      const refreshToken = await getCookie('refreshToken');
      console.log('accessToken', accessToken);
      if (!accessToken && refreshToken) {
        const newAccessToken = await getNewAccessToken();
        if (!newAccessToken) {
          router.push('/auth');
        }
      } else if (!accessToken && !refreshToken) {
        router.push('/auth');
      }
    };
    checkAuth();
  }, [router]);

  return <>{children}</>;
}
