'use client';

import { useEffect, useState } from 'react';
import Item from '@/components/item/item';
import type { Item as ItemType } from '@/interfaces/item.interface';
import { useItemsList } from '@/queries/refrigerator/queries';
import { useSearchParams } from 'next/navigation';
import ItemForm from '@/components/item/item-form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '../ui/skeleton';

export default function ItemList() {
  const [sortBy, setSortBy] = useState<'name' | 'expiredAt' | 'createdAt'>('expiredAt');
  const [sortedItems, setSortedItems] = useState<ItemType[]>([]);
  const params = useSearchParams();
  const refrigeratorId = params.get('refrigeratorId') as string;
  const { data: items, isLoading } = useItemsList(refrigeratorId);

  return (
    <>
      {/* <p className="mt-8 text-4xl font-bold text-black">냉장고를 잘 부탁해</p> */}
      <div className="mt-6 flex justify-end gap-2">
        <ItemForm refrigeratorId={refrigeratorId} />
        <Select value={sortBy} onValueChange={(value) => setSortBy(value as typeof sortBy)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="정렬 기준 선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="expiredAt">유통기한순</SelectItem>
            <SelectItem value="name">이름순</SelectItem>
            <SelectItem value="createdAt">등록일순</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {isLoading
          ? Array.from({ length: 12 }).map((_, index) => <Skeleton key={index} className="h-[100px]" />)
          : items?.data.map((item) => <Item key={item.id} item={item} />)}
      </div>
    </>
  );
}
