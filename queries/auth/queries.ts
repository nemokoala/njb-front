import { useQuery } from '@tanstack/react-query';
import { FetchUtil } from '@/lib/Fetch.util';
import { AUTH_CONSTANTS } from '@/constants/auth.constants';

export const useActive = (token: string | null) => {
  return useQuery({
    queryKey: ['active'],
    queryFn: async () => {
      const response = await FetchUtil.get(`${AUTH_CONSTANTS.ACTIVE}?token=${token}`);
      return response.data;
    },
    retry: false,
    enabled: !!token,
    throwOnError: false,
  });
};
