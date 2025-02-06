import ClientSort from '@/components/client-sort';
import Layout from '@/components/layout';
export default async function Home() {
  // const items = await FetchUtil.get('api/items');

  return (
    <>
      <Layout.Header>
        <div className="text-xl font-bold">재료</div>
      </Layout.Header>
      <Layout.Content>
        <ClientSort />
      </Layout.Content>
      <Layout.Bottom />
    </>
  );
}
