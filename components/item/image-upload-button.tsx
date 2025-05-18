'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { ImagePlus } from 'lucide-react';
import { useImageList, useS3Upload } from '@/queries/s3/queries';
import { useS3UploadMutation } from '@/queries/s3/mutation';
import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
export default function ImageUploadButton({
  value,
  type,
  onChange,
}: {
  value?: string | null;
  type: 'refrigerator' | 'ingredient';
  onChange: (url: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const queryClient = useQueryClient();
  const { data: imageUpload, isLoading: isImageUploadLoading } = useS3Upload({
    isEnabled: !!file,
    folder: type,
    fileName: file?.name || '',
  });

  const { data: imageList } = useImageList({ type });

  const { mutate: uploadImage } = useS3UploadMutation(
    () => {
      if (imageUpload?.path) {
        onChange(imageUpload.path);
        setFile(null);
        queryClient.invalidateQueries({ queryKey: ['s3-image-list', type] });
        queryClient.removeQueries({ queryKey: ['s3-upload', type, file?.name || ''] });
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

  const handleImageClick = (url: string) => {
    onChange(url);
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
        이미지 업로드
      </Button>
      <div className="flex flex-wrap gap-2">
        {imageList?.map((image) => (
          <Button
            variant="outline"
            type="button"
            className={`relative mt-2 h-[100px] w-[100px] ${image.photoUrl === value ? 'border-2 border-primary' : ''}`}
            key={image.photoUrl + image.uploadedAt}
            onClick={() => handleImageClick(image.photoUrl)}
          >
            <Image src={image.photoUrl} alt="업로드된 이미지" className="max-h-32 rounded-md" fill sizes="30vw" />
          </Button>
        ))}
      </div>
    </>
  );
}
