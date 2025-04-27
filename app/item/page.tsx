'use client';

import ItemList from '@/components/item/item-list';
import Layout from '@/components/layout';
import ItemForm from '@/components/item/item-modal';
import { useRefrigerator } from '@/queries/refrigerator/queries';
import { useUrlQuery } from '@/hooks/use-url-query';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Suspense } from 'react';
import { motion } from 'framer-motion';

function ItemPage() {
  const { getParam } = useUrlQuery();
  const refrigeratorId = getParam('refrigeratorId') as string;
  const { data: refrigerator, isLoading } = useRefrigerator(refrigeratorId);
  const router = useRouter();

  useEffect(() => {
    if (!refrigeratorId) {
      router.push('/refrigerator');
    }
  }, [refrigeratorId, router]);

  return (
    <>
      <Layout.Header className="flex flex-col rounded-b-3xl bg-green-100 p-5">
        <p className="text-3xl font-bold">재료 관리</p>
        <motion.div
          className="mb-4 text-base font-semibold text-gray-500"
          initial={{ opacity: 0 }}
          animate={isLoading ? { opacity: 0 } : { opacity: 1 }}
        >
          {refrigerator?.name} 냉장고의 재료들을 관리해봐요!
        </motion.div>
        <ItemForm refrigeratorId={refrigeratorId} />
      </Layout.Header>
      <Layout.Content className="bg-zinc-50 px-3 py-5">
        <ItemList />
      </Layout.Content>
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
