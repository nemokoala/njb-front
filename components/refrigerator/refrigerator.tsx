'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRefrigeratorsList } from '@/queries/query';
import { useRouter } from 'next/navigation';
export function RefrigeratorGrid() {
  const [selectedRefrigerator, setSelectedRefrigerator] = useState<string | null>(null);
  const { data: refrigerators } = useRefrigeratorsList();
  const router = useRouter();

  const handleSelect = (id: string) => {
    router.push(`/item?refrigeratorId=${id}`);
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {refrigerators?.data?.map((refrigerator) => (
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
    </div>
  );
}
