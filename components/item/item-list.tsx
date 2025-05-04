'use client';

import { useState } from 'react';
import Item from '@/components/item/item';
import { useItemsList } from '@/queries/refrigerator/queries';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '../ui/skeleton';
import { useUrlQuery } from '@/hooks/use-url-query';
import { useUserStore } from '@/store/auth';

export default function ItemList() {
  const [sortField, setSortField] = useState<'name' | 'expirationDate' | 'registrationDate'>('expirationDate');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const { getParam } = useUrlQuery();
  const refrigeratorId = getParam('refrigeratorId') as string;
  const user = useUserStore();
  const { data: items, isLoading } = useItemsList({ refrigeratorId, sortField, sortOrder, key: user.accessToken });

  return (
    <>
      <div className="sticky top-0 z-10 flex flex-row gap-2 bg-zinc-50 py-3">
        <Select value={sortField} onValueChange={(value) => setSortField(value as typeof sortField)}>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="정렬 기준 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="expirationDate">유통기한순</SelectItem>
            <SelectItem value="name">이름순</SelectItem>
            <SelectItem value="registrationDate">등록일순</SelectItem>
          </SelectContent>
        </Select>
        <Select value={sortOrder} onValueChange={(value) => setSortOrder(value as typeof sortOrder)}>
          <SelectTrigger className="w-full bg-white">
            <SelectValue placeholder="정렬 기준 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">오름차순</SelectItem>
            <SelectItem value="desc">내림차순</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="mt-4 flex flex-col gap-3 rounded-lg">
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => <Skeleton key={index} className="h-[100px]" />)
          : items?.map((item) => <Item key={item.id} item={item} />)}
      </div>
    </>
  );
}
