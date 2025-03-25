import { Item } from '@/interfaces/item.interface';
import { CommonResponse } from '@/interfaces/response.interface';
import { Category, Refrigerator } from '@/interfaces/refrigerator.interface';
import { FetchUtil } from '@/lib/Fetch.util';
import { useQuery } from '@tanstack/react-query';
import { REFRIGERATOR_CONSTANTS } from '@/constants/refrigerator.contants';

export const useItemsList = (refrigeratorId: string) => {
  return useQuery({
    queryKey: ['items', refrigeratorId],
    queryFn: async () => {
      const response = (await FetchUtil.get(
        `${REFRIGERATOR_CONSTANTS.REFRIGERATORS}/${refrigeratorId}/ingredients`,
      )) as CommonResponse<Item[]>;
      return response.data;
    },
  });
};

export const useRefrigeratorsList = () => {
  return useQuery({
    queryKey: ['refrigerators'],
    queryFn: async () => {
      const response = (await FetchUtil.get(REFRIGERATOR_CONSTANTS.REFRIGERATORS)) as CommonResponse<Refrigerator[]>;
      return response.data;
    },
  });
};

export const useRefrigerator = (refrigeratorId: string) => {
  return useQuery({
    queryKey: ['refrigerator', refrigeratorId],
    queryFn: async () => {
      const response = (await FetchUtil.get(
        `${REFRIGERATOR_CONSTANTS.REFRIGERATORS}/${refrigeratorId}`,
      )) as CommonResponse<Refrigerator>;
      return response.data;
    },
  });
};

export const useCategoryList = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = (await FetchUtil.get(`${REFRIGERATOR_CONSTANTS.REFRIGERATORS}/categories`)) as CommonResponse<
        Category[]
      >;
      return response.data;
    },
    staleTime: 1000 * 60 * 60 * 24,
  });
};
