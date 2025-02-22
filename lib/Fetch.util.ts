import { cookies } from 'next/headers';

const handleFetch = async (endpoint: string, options: RequestInit) => {
  const cookieStore = await cookies();
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
    ...options,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${cookieStore.get('accessToken')?.value}`,
    },
  });
  console.log(cookieStore.get('accessToken')?.value);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || '요청 처리 중 오류가 발생했습니다.');
  }

  return data;
};

export const FetchUtil = {
  get: async (endpoint: string) => {
    return await handleFetch(endpoint, { method: 'GET' });
  },

  post: async <T>(endpoint: string, data: T) => {
    return await handleFetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  },
};
