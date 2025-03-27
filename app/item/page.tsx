'use client';

import ItemList from '@/components/item/item-list';
import Layout from '@/components/layout';
import ItemForm from '@/components/item/item-form';
import { useRefrigerator } from '@/queries/refrigerator/queries';
import { useUrlQuery } from '@/hooks/use-url-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Suspense } from 'react';

function ItemPage() {
  const { getParam } = useUrlQuery();
  const refrigeratorId = getParam('refrigeratorId') as string;
  const { data: refrigerator } = useRefrigerator(refrigeratorId);
  const router = useRouter();

  useEffect(() => {
    if (!refrigeratorId) {
      router.push('/refrigerator');
    }
  }, [refrigeratorId, router]);

  return (
    <>
      <Layout.Header className="flex flex-col rounded-b-xl p-3 pb-0">
        <div className="flex flex-col gap-2 rounded-lg bg-gradient-to-tr from-green-200 to-green-100 p-5">
          <p className="text-3xl font-bold">재료 관리</p>
          <p className="mb-4 text-base font-semibold text-gray-500">
            {refrigerator?.name} 냉장고의 재료들을 관리해봐요!
          </p>
          <ItemForm refrigeratorId={refrigeratorId} />
        </div>
      </Layout.Header>
      <Layout.Content className="bg-zinc-50">
        <ItemList />
      </Layout.Content>
      <Layout.Bottom />
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ItemPage />
    </Suspense>
  );
}
