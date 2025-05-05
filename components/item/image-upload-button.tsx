'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { ImagePlus } from 'lucide-react';
import { useS3Upload } from '@/queries/s3/queries';
import { useS3UploadMutation } from '@/queries/s3/mutation';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
export default function ImageUploadButton({
  value,
  onChange,
}: {
  value?: string | null;
  onChange: (url: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | undefined>(value || undefined);

  const queryClient = useQueryClient();
  const { data: imageUpload, isLoading: isImageUploadLoading } = useS3Upload({
    isEnabled: !!file,
    folder: 'item',
    fileName: file?.name || '',
  });

  const { mutate: uploadImage } = useS3UploadMutation(
    () => {
      if (imageUpload?.path) {
        setImageUrl(imageUpload.path);
        onChange(imageUpload.path);
        setFile(null);
        queryClient.removeQueries({ queryKey: ['s3-upload', 'item', file?.name || ''] });
      }
    },
    () => {},
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFile(file);
    }
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  useEffect(() => {
    if (imageUpload && !isImageUploadLoading) {
      const { presignedUrl } = imageUpload;
      if (file) {
        uploadImage({ presignedUrl, file });
      }
    }
  }, [imageUpload, file]);

  return (
    <>
      <input type="file" ref={inputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
      <Button variant={'outline'} onClick={handleButtonClick} type="button">
        <ImagePlus className="mr-2 h-4 w-4" />
        {imageUrl ? '이미지 변경' : '이미지 업로드'}
      </Button>
      {imageUrl && (
        <div className="relative mt-2 h-[100px] w-[100px]">
          <Image src={imageUrl} alt="업로드된 이미지" className="max-h-32 rounded-md" fill sizes="30vw" />
        </div>
      )}
    </>
  );
}
