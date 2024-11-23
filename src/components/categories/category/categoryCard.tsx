import React from 'react';
import CategoriesCard from '../categoriesCard';
import { Card } from '@/components/ui/card';
import Rating from '@/components/ui/rating/ratingStar';

export default function CategoryCard({ imageSrc, price, productName }: { imageSrc?: string, price?: number, productName?: string }) {
  return (
    <Card className="rounded-md transition-all group hover:shadow-lg  pb-2">
      <CategoriesCard className="hover:scale-110" imageSrc={imageSrc} />
      <div className="text-xs font-bold text-text-charcoal sm:text-sm md:text-base ml-3 mt-3 space-y-3">
        <p>{`$${price}.00`}</p>
        <p>{productName}</p>
        <Rating rating={3} size={'md'} className="text-rating" />
      </div>
    </Card>
  );
}
