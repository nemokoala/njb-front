import { Item } from '@/interfaces/item.interface';
import { FetchUtil } from '@/lib/Fetch.util';
import { useQuery } from '@tanstack/react-query';

export const useItems = () => {
  return useQuery<Item[]>({
    queryKey: ['items'],
    queryFn: () => FetchUtil.get(`/api/items`),
  });
};
