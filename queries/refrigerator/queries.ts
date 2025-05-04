import { Item } from '@/interfaces/item.interface';
import { CommonResponse } from '@/interfaces/response.interface';
import { Category, Refrigerator } from '@/interfaces/refrigerator.interface';
import { FetchUtil } from '@/lib/Fetch.util';
import { useQuery } from '@tanstack/react-query';
import { REFRIGERATOR_CONSTANTS } from '@/constants/refrigerator.contants';
import { S3_CONSTANTS } from '@/constants/s3.constants';

export const useItemsList = ({
  refrigeratorId,
  sortField = 'expirationDate',
  sortOrder = 'desc',
  key,
}: {
  refrigeratorId: string;
  sortField?: 'name' | 'expirationDate' | 'registrationDate';
  sortOrder?: 'asc' | 'desc';
  key: string;
}) => {
  return useQuery({
    queryKey: ['items', refrigeratorId, sortField, sortOrder, key],
    queryFn: async () => {
      const response = (await FetchUtil.get(
        `${REFRIGERATOR_CONSTANTS.REFRIGERATORS}/${refrigeratorId}/ingredients?sortField=${sortField}&sortOrder=${sortOrder}`,
      )) as CommonResponse<Item[]>;

      return response.data;
    },
    enabled: !!key,
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
