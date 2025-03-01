import Header from '@/components/common/header';
import Layout from '@/components/layout';
import { RefrigeratorGrid } from '@/components/refrigerator/refrigerator';

export default function RefrigeratorPage() {
  return (
    <>
      <Layout.Header>
        <Header title="냉장고" />
      </Layout.Header>
      <Layout.Content>
        <RefrigeratorGrid />
      </Layout.Content>
      <Layout.Bottom />
    </>
  );
}
