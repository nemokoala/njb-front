'use client';
import Layout from '@/components/layout';
import { RefrigeratorGrid } from '@/components/refrigerator/refrigerator';
import RefrigeratorModalForm from '@/components/refrigerator/refrigerator-form';
import { Suspense } from 'react';

function Refrigerator() {
  return (
    <>
      <Layout.Header className="flex flex-col rounded-b-3xl bg-green-100 p-5">
        <p className="text-3xl font-bold">냉장고 선택</p>
        <p className="mb-4 text-base font-semibold text-gray-500">어떤 냉장고를 관리할까요?</p>
        <RefrigeratorModalForm />
      </Layout.Header>
      <Layout.Content>
        <RefrigeratorGrid />
      </Layout.Content>
    </>
  );
}

export default function RefrigeratorPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Refrigerator />
    </Suspense>
  );
}
