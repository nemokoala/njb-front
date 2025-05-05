'use client';

import { Button } from '../ui/button';
import { useState } from 'react';
import { SearchIcon } from 'lucide-react';
import { UseFormReturn } from 'react-hook-form';
import { ItemFormData } from '@/lib/schema';
import Image from 'next/image';
export default function ImageSearch({
  form,
  value,
  onChange,
}: {
  form: UseFormReturn<ItemFormData>;
  value?: string | null;
  onChange: (url: string) => void;
}) {
  const [imageList, setImageList] = useState<string[]>([]);

  const handleSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const name = form.getValues('name');
    if (!name) return;
    const response = await fetch(`/api/search-image?name=${name}`);
    const data = await response.json();
    setImageList(data.imageUrl);
  };

  const handleImageClick = (e: React.MouseEvent<HTMLButtonElement>, image: string) => {
    e.preventDefault();
    onChange(image);
  };

  return (
    <div className="flex flex-col gap-3">
      <Button variant="outline" onClick={handleSearch}>
        <SearchIcon className="mr-2 h-4 w-4" />
        이미지 검색
      </Button>
      <div className="flex max-h-[100px] gap-2 overflow-x-scroll scrollbar-hide">
        {imageList.map((image) => (
          <Button
            variant="outline"
            className={`relative h-[100px] min-w-[100px] ${value === image ? 'border-2 border-primary' : ''}`}
            key={image}
            onClick={(e) => handleImageClick(e, image)}
          >
            <Image src={image} alt="검색된 이미지" fill sizes="30vw" className="object-cover" />
          </Button>
        ))}
      </div>
    </div>
  );
}
