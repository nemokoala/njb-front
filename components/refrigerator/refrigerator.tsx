'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

type Refrigerator = {
  id: string;
  model: string;
  description: string;
  price: number;
  imageUrl: string;
};

const refrigerators: Refrigerator[] = [
  {
    id: '1',
    model: 'CoolFrost 3000',
    description: '대용량 양문형 냉장고',
    price: 1500000,
    imageUrl: '/placeholder.svg?height=300&width=300',
  },
  {
    id: '2',
    model: 'EcoFreeze 2000',
    description: '에너지 효율적인 3도어 냉장고',
    price: 1200000,
    imageUrl: '/placeholder.svg?height=300&width=300',
  },
  {
    id: '3',
    model: 'SmartChill Pro',
    description: '스마트 기능 탑재 4도어 냉장고',
    price: 2000000,
    imageUrl: '/placeholder.svg?height=300&width=300',
  },
  {
    id: '4',
    model: 'MiniFridge 100',
    description: '소형 원도어 냉장고',
    price: 300000,
    imageUrl: '/placeholder.svg?height=300&width=300',
  },
];

export function RefrigeratorGrid() {
  const [selectedRefrigerator, setSelectedRefrigerator] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    setSelectedRefrigerator(id);
    // TODO: 여기에 선택한 냉장고 처리 로직을 추가하세요
    console.log(`Selected refrigerator: ${id}`);
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {refrigerators.map((refrigerator) => (
        <Card key={refrigerator.id}>
          <CardHeader>
            <CardTitle>{refrigerator.model}</CardTitle>
            <CardDescription>{refrigerator.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <img
              src={refrigerator.imageUrl || '/placeholder.svg'}
              alt={refrigerator.model}
              className="h-auto w-full rounded-md object-cover"
            />
            <p className="mt-4 text-lg font-semibold">{refrigerator.price.toLocaleString()}원</p>
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
