'use client';

import { useEffect, useState } from 'react';
import Item from '@/components/item';
import type { Item as ItemType } from '@/interfaces/item.interface';
import { useItemsList } from '@/queries/refrigerator/queries';
import { useSearchParams } from 'next/navigation';
import ItemForm from '@/components/item/item-form';
export default function ItemList() {
  const [sortBy, setSortBy] = useState<'name' | 'expiredAt' | 'createdAt'>('expiredAt');
  const [sortedItems, setSortedItems] = useState<ItemType[]>([]);
  const params = useSearchParams();
  const refrigeratorId = params.get('refrigeratorId') as string;
  const { data: items, isLoading, isError } = useItemsList(refrigeratorId);

  return (
    <>
      <p className="mt-8 text-4xl font-bold text-black">냉장고를 잘 부탁해</p>
      <div className="mt-6 flex justify-end">
        <ItemForm />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
          className="rounded-md border p-2"
        >
          <option value="expiredAt">유통기한순</option>
          <option value="name">이름순</option>
          <option value="createdAt">등록일순</option>
        </select>
      </div>
      <div className="mt-4 flex flex-col gap-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Error...</div>
        ) : (
          items?.data.map((item) => <Item key={item.id} item={item} />)
        )}
      </div>
    </>
  );
}
