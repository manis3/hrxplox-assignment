'use client';
import React from 'react';
import CategoriesCard from '../categoriesCard';
import { cn } from '@/utils/cn';
import Button from '@/components/ui/button/ButtonWithLoadingState';
import useCategoryImage from '@/components/hooks/category/useCategoryImage';
import { ExpandSvg } from '@/assets/svgs';
import ShrinkIcon from '@/assets/svgs/ShrinkIcon';

export default function CategoryCardWithImageZoomIn({ className }: { className?: string }) {
    const { isImageZoomIn, setIsImageZoomIn } = useCategoryImage();

    return (
        <div className="relative flex place-items-center  overflow-hidden aspect-square object-cover rounded-md ">
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
