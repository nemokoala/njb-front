import ItemList from '@/components/item-list';
import Layout from '@/components/layout';

export default function ItemPage() {
  return (
    <>
      <Layout.Content>
        <ItemList />
      </Layout.Content>
      <Layout.Bottom />
    </>
  );
}
