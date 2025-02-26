import Layout from '@/components/layout';
export default async function Home() {
  return (
    <>
      <Layout.Header>
        <div className="text-xl font-bold">재료</div>
      </Layout.Header>
      <Layout.Content>안녕</Layout.Content>
      <Layout.Bottom />
    </>
  );
}
