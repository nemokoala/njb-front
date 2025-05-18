import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { ImageList } from '../../../lib/generated/prisma';

interface NaverSearchResponse {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: {
    title: string;
    link: string;
    thumbnail: string;
    sizeheight: string;
    sizewidth: string;
  }[];
}

interface NaverShopResponse {
  lastBuildDate: string;
  total: number;
  start: number;
  display: number;
  items: {
    title: string;
    link: string;
    image: string;
    lprice: string;
    hprice: string;
    mallName: string;
    productId: string;
    productType: string;
    brand: string;
    maker: string;
    category1: string;
    category2: string;
    category3: string;
    category4: string;
  }[];
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name')?.replace(/\s/g, '');

  if (!name) {
    return NextResponse.json({ error: 'Name is required' }, { status: 400 });
  }

  if (!process.env.NAVER_CLIENT_ID || !process.env.NAVER_CLIENT_SECRET) {
    throw new Error('Missing Naver API credentials');
  }

  const image: ImageList | null = await prisma.imageList.findFirst({
    where: {
      name: name,
    },
  });

  if (image !== null) {
    console.log('db에 캐싱된 데이터 반환');
    return NextResponse.json({ imageUrl: JSON.parse(image.imageUrl) });
  }

  try {
    const response = await fetch(`https://openapi.naver.com/v1/search/shop.json?query=${name}&display=20`, {
      headers: {
        'X-Naver-Client-Id': process.env.NAVER_CLIENT_ID,
        'X-Naver-Client-Secret': process.env.NAVER_CLIENT_SECRET,
      },
    });
    const data: NaverShopResponse = await response.json();
    console.log('naver data', data);
    console.log('naver 데이터 반환');
    // return;

    let itemList: string[] = [];
    data.items.map((item) => {
      itemList.push(item.image);
    });

    await prisma.imageList.create({
      data: {
        name: name,
        imageUrl: JSON.stringify(itemList),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
    return NextResponse.json({ imageUrl: itemList });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
