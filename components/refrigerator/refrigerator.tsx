'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useRefrigeratorsList } from '@/queries/refrigerator/queries';
import { useRouter } from 'next/navigation';
import { ArrowUp, Refrigerator } from 'lucide-react';
import Image from 'next/image';
import { Skeleton } from '../ui/skeleton';

export function RefrigeratorGrid() {
  const { data: refrigerators, isLoading } = useRefrigeratorsList();
  const router = useRouter();

  const handleSelect = (id: number) => {
    router.push(`/item?refrigeratorId=${id}`);
  };

  if (!isLoading && refrigerators?.length === 0)
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <ArrowUp className="h-8 w-8" />
        <p className="text-center text-2xl font-bold">냉장고가 없습니다.</p>
        <p className="text-center text-sm text-gray-500">상단 버튼을 통해 냉장고를 추가해주세요.</p>
      </div>
    );

  return (
    <>
      <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {isLoading && Array.from({ length: 12 }).map((_, index) => <Skeleton key={index} className="aspect-square" />)}
        {!isLoading &&
          refrigerators?.map((refrigerator) => (
            <Card
              key={refrigerator.id}
              className="aspect-square cursor-pointer"
              onClick={() => handleSelect(refrigerator.id)}
            >
              <CardHeader>
                <CardTitle>{refrigerator.name}</CardTitle>
                <CardDescription>{refrigerator.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {refrigerator.photoUrl ? (
                  <Image
                    src={refrigerator.photoUrl}
                    alt={refrigerator.name}
                    className="h-auto w-full rounded-md object-cover"
                    width={100}
                    height={100}
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <Refrigerator className="h-1/2 w-1/2 rounded-md object-cover" strokeWidth={1} />
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
      </div>
    </>
  );
}
