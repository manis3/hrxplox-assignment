'use client';
import React from 'react';
import CategoriesCard from '../categories/categoriesCard';
import { cn } from '@/utils/cn';
import Button from '@/components/ui/button/ButtonWithLoadingState';
import useCategoryImage from '@/components/hooks/category/useCategoryImage';
import { ExpandSvg, ShrinkIcon } from '@/assets/svgs';

export default function CategoryCardWithImageZoomIn({ className }: { className?: string }) {
    const { isImageZoomIn, setIsImageZoomIn } = useCategoryImage();

    return (
        <div className={cn("relative flex place-items-center overflow-hidden aspect-square object-cover rounded-md ", className)}>
            <CategoriesCard
                className={cn('transition-transform duration-300 w-full h-full', {
                    'scale-125': isImageZoomIn,
                    'scale-100': !isImageZoomIn,
                })}
            />
            <Button onClick={setIsImageZoomIn} className="absolute bottom-4 right-4 bg-foreground p-2 h-10 w-10 rounded-lg shadow-md bg-opacity-50">
                {isImageZoomIn ? <ShrinkIcon /> : <ExpandSvg />}
            </Button>
        </div>
    );
}
