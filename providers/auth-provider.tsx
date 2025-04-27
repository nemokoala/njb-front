'use client';
import { getCookie } from '@/lib/action';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { getNewAccessToken } from '@/lib/Fetch.util';
import { useUserStore } from '@/store/auth';
import { useUserInfo } from '@/queries/auth/queries';
import { useFCMTokenMutation } from '@/queries/auth/mutation';
export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const accessToken = useUserStore((state) => state.accessToken);
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  // const { data: userInfo } = useUserInfo({ isEnabled: !!accessToken });

  // useEffect(() => {
  //   if (userInfo) {
  //     // console.log('userInfo', userInfo);
  //     // setUserInfo(userInfo.email, userInfo.nickname);
  //   }
  // }, [userInfo, setUserInfo]);
  // useEffect(() => {
  //   // console.log('accessToken', accessToken);
  // }, [router, accessToken]);

  return <>{children}</>;
}
