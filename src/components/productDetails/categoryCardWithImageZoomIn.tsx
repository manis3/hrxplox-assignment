'use client';
import React from 'react';
import CategoriesCard from '../categories/categoriesCard';
import { cn } from '@/utils/cn';
import Button from '@/components/ui/button/ButtonWithLoadingState';
import useCategoryImage from '@/components/hooks/category/useCategoryImage';
import { ExpandSvg, ShrinkIcon } from '@/assets/svgs';
import Image from 'next/image';

export default function CategoryCardWithImageZoomIn({
  imageSrc,
  previewUrls,
  className
}: {
  imageSrc: string;
  previewUrls: string[];
  className?: string;
}) {
  const { isImageZoomIn, setIsImageZoomIn, previewImage, setPreviewImage } = useCategoryImage({ imageSrc });

  return (
    <div className={cn('relative flex overflow-hidden aspect-square object-cover rounded-md gap-6', className)}>
      <div className='w-2/6 flex flex-col gap-4 items-start justify-start '>
        {previewUrls &&
          previewUrls.map((url, index) => (
            <div key={index} onClick={() => setPreviewImage(url)}>
              <Image src={url} width={150} height={150} alt={`Preview ${index + 1}`} className='object-cover aspect-square focus-visible:ring-1 cursor-pointer active:shadow-sm transition-transform duration-300 transform hover:scale-110' />
            </div>
          ))}
      </div>

      <CategoriesCard
        className={cn('transition-transform duration-300 w-full h-full', {
          'scale-125': isImageZoomIn,
          'scale-100': !isImageZoomIn,
        })}
        imageSrc={previewImage}
      />

      <Button
        onClick={setIsImageZoomIn}
        className="absolute bottom-4 right-4 bg-foreground p-2 h-10 w-10 rounded-lg shadow-md bg-opacity-50"
      >
        {isImageZoomIn ? <ShrinkIcon /> : <ExpandSvg />}
      </Button>
    </div>
  );
}
