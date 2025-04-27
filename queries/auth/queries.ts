import { useQuery } from '@tanstack/react-query';
import { FetchUtil } from '@/lib/Fetch.util';
import { AUTH_CONSTANTS } from '@/constants/auth.constants';
import { useUserStore } from '@/store/auth';

export const useActivate = (token: string | null) => {
  return useQuery({
    queryKey: ['activate'],
    queryFn: async () => {
      const response = await FetchUtil.get(`${AUTH_CONSTANTS.ACTIVATE}?token=${token}`);
      return response.data;
    },
    retry: false,
    enabled: !!token,
    throwOnError: false,
  });
};

export const useUserInfo = ({ isEnabled }: { isEnabled: boolean }) => {
  return useQuery({
    queryKey: ['userInfo'],
    queryFn: async () => {
      const response = await FetchUtil.get(AUTH_CONSTANTS.USER_INFO);
      return response.data;
    },
    enabled: isEnabled,
  });
};
