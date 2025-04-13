import { getCookie, removeCookie, setCookie } from './action';
import { CommonResponse } from '@/interfaces/response.interface';
import { useUserStore } from '@/store/auth';

const handleFetch = async <T>(endpoint: string, options: RequestInit) => {
  try {
    const accessToken = useUserStore.getState().accessToken;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        authorization: accessToken ? `Bearer ${accessToken}` : '',
      },
    });

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

    return data as CommonResponse<T>;
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

  put: async <T>(endpoint: string, data: T, options: RequestInit = {}) => {
    return await handleFetch(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
      ...options,
    });
  },

  delete: async <T>(endpoint: string, data: T, options: RequestInit = {}) => {
    return await handleFetch(endpoint, {
      method: 'DELETE',
      body: JSON.stringify(data),
      ...options,
    });
  },
};

export const getNewAccessToken = async () => {
  try {
    const refreshToken = await getCookie('rft');
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
      await removeCookie('rft');
      window.location.href = '/auth?expired=true';
      throw new Error('새로운 액세스 토큰을 발급받는데 실패했습니다');
    }

    // 응답에서 새 액세스 토큰 추출
    const data = await response.json();
    console.log('data', data);
    const newAccessToken = data.data.accessToken;
    const newRefreshToken = data.data.refreshToken;
    const newRefreshExpireTimeEpoch = data.data.refreshExpireTimeEpoch;

    // Zustand 스토어에 새 토큰 저장
    if (newAccessToken) {
      const setAccessToken = useUserStore.getState().setAccessToken;
      console.log('newAccessToken', newAccessToken);
      setAccessToken(newAccessToken);
    }

    if (newRefreshToken) {
      await setCookie('rft', newRefreshToken, {
        httpOnly: true,
        domain: 'recipic.shop',
        expires: new Date(newRefreshExpireTimeEpoch * 1000),
      });
    }

    return true;
  } catch (error) {
    await removeCookie('rft');
    window.location.href = '/auth?expired=true';
    console.error('새로운 액세스 토큰을 발급받는데 실패했습니다', error);
    return false;
  }
};
