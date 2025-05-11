'use client';

import { Calendars } from '@/components/calendar';
import Layout from '@/components/layout';
import { Suspense } from 'react';

function Calendar() {
  return (
    <>
      <Layout.Header className="flex flex-col rounded-b-3xl bg-green-100 p-5">
        <p className="text-3xl font-bold">캘린더</p>
        <p className="text-base font-semibold text-gray-500">캘린더를 통해 유통기한을 관리해봐요!</p>
      </Layout.Header>
      <Layout.Content>
        <Calendars />
      </Layout.Content>
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={null}>
      <Calendar />
    </Suspense>
  );
}
