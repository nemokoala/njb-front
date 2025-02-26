import Layout from '@/components/layout';
import { RefrigeratorGrid } from '@/components/refrigerator/refrigerator';

export default function RefrigeratorPage() {
  return (
    <>
      <Layout.Content>
        <RefrigeratorGrid />
      </Layout.Content>
      <Layout.Bottom />
    </>
  );
}
