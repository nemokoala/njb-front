import { getCookie, removeCookie } from './action';
import { Response } from '@/interfaces/response.interface';
const handleFetch = async <T>(endpoint: string, options: RequestInit) => {
  try {
    const accessToken = await getCookie('accessToken');
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${accessToken?.value}`,
      },
    });
    console.log(accessToken?.value);

    const data = await response.json();

    if (response.status === 401) {
      const tokenRefreshed = await getNewAccessToken();
      if (tokenRefreshed) {
        return await handleFetch(endpoint, options);
      }
    }

    if (!response.ok) {
      throw new Error(data.message || '데이터를 불러오는데 실패했습니다');
    }

    return data as Response<T>;
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

  post: async <T>(endpoint: string, data: T, options: RequestInit = {}) => {
    return await handleFetch(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
      ...options,
    });
  },
};

export const getNewAccessToken = async () => {
  try {
    const refreshToken = await getCookie('refreshToken');
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refreshToken: refreshToken?.value,
      }),
      credentials: 'include',
    });

    if (response.status !== 200) {
      await removeCookie('refreshToken');
      window.location.href = '/auth';
      throw new Error('새로운 액세스 토큰을 발급받는데 실패했습니다');
    }

    return true;
  } catch (error) {
    await removeCookie('refreshToken');
    window.location.href = '/auth';
    console.error('새로운 액세스 토큰을 발급받는데 실패했습니다', error);
    return false;
  }
};
