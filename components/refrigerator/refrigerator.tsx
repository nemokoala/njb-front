'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRefrigeratorsList } from '@/queries/refrigerator/queries';
import { useRouter } from 'next/navigation';
import RefrigeratorModalForm from './refrigerator-form';

export function RefrigeratorGrid() {
  const [selectedRefrigerator, setSelectedRefrigerator] = useState<string | null>(null);
  const { data, isLoading } = useRefrigeratorsList();
  const refrigerators = data?.data;
  const router = useRouter();

  const handleSelect = (id: string) => {
    router.push(`/item?refrigeratorId=${id}`);
  };

  if (!isLoading && refrigerators?.length === 0)
    return (
      <div className="flex h-full w-full flex-col items-center justify-center">
        <Card className="w-full max-w-[500px]">
          <CardHeader>
            <CardTitle>냉장고가 없습니다.</CardTitle>
            <CardDescription>냉장고를 추가해주세요.</CardDescription>
          </CardHeader>
          <CardContent>
            <RefrigeratorModalForm />
          </CardContent>
        </Card>
      </div>
    );

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {!isLoading &&
        refrigerators?.map((refrigerator) => (
          <Card key={refrigerator.id}>
            <CardHeader>
              <CardTitle>{refrigerator.name}</CardTitle>
              <CardDescription>{refrigerator.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <img
                src={refrigerator.photoUrl || '/placeholder.svg'}
                alt={refrigerator.name}
                className="h-auto w-full rounded-md object-cover"
              />
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleSelect(refrigerator.id)}
                variant={selectedRefrigerator === refrigerator.id ? 'secondary' : 'default'}
                className="w-full"
              >
                {selectedRefrigerator === refrigerator.id ? '선택됨' : '선택하기'}
              </Button>
            </CardFooter>
          </Card>
        ))}
      <Card className="w-full max-w-[500px]">
        <CardHeader>
          <CardTitle>냉장고가 없습니다.</CardTitle>
          <CardDescription>냉장고를 추가해주세요.</CardDescription>
        </CardHeader>
        <CardContent>
          <RefrigeratorModalForm />
        </CardContent>
      </Card>
    </div>
  );
}
