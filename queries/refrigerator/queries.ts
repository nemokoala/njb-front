import { Item } from '@/interfaces/item.interface';
import { CommonResponse } from '@/interfaces/response.interface';
import { Refrigerator } from '@/interfaces/refrigerator.interface';
import { FetchUtil } from '@/lib/Fetch.util';
import { useQuery } from '@tanstack/react-query';

export const useItemsList = (refrigeratorId: string) => {
  return useQuery({
    queryKey: ['items'],
    queryFn: () => FetchUtil.get(`/refri/ingredients/${refrigeratorId}`) as Promise<CommonResponse<Item[]>>,
  });
};

export const useRefrigeratorsList = () => {
  return useQuery({
    queryKey: ['refrigerators'],
    queryFn: () => FetchUtil.get(`/refri`) as Promise<CommonResponse<Refrigerator[]>>,
  });
};
