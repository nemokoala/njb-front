import ItemList from '@/components/item/item-list';
import Layout from '@/components/layout';
import Header from '@/components/common/header';

export default function ItemPage() {
  return (
    <>
      {/* <Layout.Header>
        <Header title="재료" backButton />
      </Layout.Header> */}
      <Layout.Content>
        <ItemList />
      </Layout.Content>
      <Layout.Bottom />
    </>
  );
}
