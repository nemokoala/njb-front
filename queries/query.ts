import { Item } from '@/interfaces/item.interface';
import { Refrigerator } from '@/interfaces/refrigerator.interface';
import { FetchUtil } from '@/lib/Fetch.util';
import { useQuery } from '@tanstack/react-query';

export const useItemsList = (refrigeratorId: string) => {
  return useQuery<Item[]>({
    queryKey: ['items'],
    queryFn: () => FetchUtil.get(`/refri/ingredients/${refrigeratorId}`),
  });
};

export const useRefrigeratorsList = () => {
  return useQuery<Refrigerator[]>({
    queryKey: ['refrigerators'],
    queryFn: () => FetchUtil.get(`/refri`),
  });
};
