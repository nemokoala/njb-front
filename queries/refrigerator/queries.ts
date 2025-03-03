import { Item } from '@/interfaces/item.interface';
import { CommonResponse } from '@/interfaces/response.interface';
import { Refrigerator } from '@/interfaces/refrigerator.interface';
import { FetchUtil } from '@/lib/Fetch.util';
import { useQuery } from '@tanstack/react-query';
import { REFRIGERATOR_CONSTANTS } from '@/constants/refrigerator.contants';

export const useItemsList = (refrigeratorId: string) => {
  return useQuery({
    queryKey: ['items'],
    queryFn: () =>
      FetchUtil.get(`${REFRIGERATOR_CONSTANTS.REFRIGERATORS}/${refrigeratorId}/ingredients`) as Promise<
        CommonResponse<Item[]>
      >,
  });
};

export const useRefrigeratorsList = () => {
  return useQuery({
    queryKey: ['refrigerators'],
    queryFn: () => FetchUtil.get(REFRIGERATOR_CONSTANTS.REFRIGERATORS) as Promise<CommonResponse<Refrigerator[]>>,
  });
};
