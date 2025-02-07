'use client';

import { useEffect, useState } from 'react';
import Item from '@/components/item';
import type { Item as ItemType } from '@/interfaces/item.interface';
import { useItems } from '@/queries/query';

export default function ClientSort() {
  const { data: items, isLoading } = useItems();
  const [sortBy, setSortBy] = useState<'name' | 'expiredAt' | 'createdAt'>('expiredAt');
  const [sortedItems, setSortedItems] = useState<ItemType[]>([]);
  useEffect(() => {
    if (!items) return;
    const sortedItems = [...items].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'expiredAt':
          return new Date(a.expiredAt).getTime() - new Date(b.expiredAt).getTime();
        case 'createdAt':
          return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
        default:
          return new Date(a.expiredAt).getTime() - new Date(b.expiredAt).getTime();
      }
    });
    setSortedItems(sortedItems);
  }, [items]);

  return (
    <>
      <p className="mt-8 text-4xl font-bold text-black">냉장고를 잘 부탁해</p>
      <div className="mt-6 flex justify-end">
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
        {isLoading ? <div>Loading...</div> : sortedItems.map((item) => <Item key={item.id} item={item} />)}
      </div>
    </>
  );
}
