import { getCookie } from './action';

const handleFetch = async (endpoint: string, options: RequestInit) => {
  try {
    const accessToken = await getCookie('accessToken');
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      ...options,
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${accessToken?.value}`,
      },
    });
    console.log(accessToken?.value);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || '데이터를 불러오는데 실패했습니다');
    }

    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || '서버와의 통신에 실패했습니다');
    }
    throw new Error('알 수 없는 오류가 발생했습니다');
  }
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
