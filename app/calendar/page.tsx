'use client';

import { Calendars } from '@/components/calendar';
import Layout from '@/components/layout';
import { Suspense } from 'react';

function Calendar() {
  return (
    <>
      <Layout.Header>
        <div className="text-xl font-bold">캘린더</div>
      </Layout.Header>
      <Layout.Content>
        <Calendars />
      </Layout.Content>
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Calendar />
    </Suspense>
  );
}
