'use server';

import { cookies } from 'next/headers';

export const getCookie = async (key: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get(key);
  return accessToken;
};

export const removeCookie = async (key: string) => {
  const cookieStore = await cookies();
  cookieStore.delete(key);
};
