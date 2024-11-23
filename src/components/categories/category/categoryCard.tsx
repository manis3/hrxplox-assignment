import React from 'react';
import CategoriesCard from '../categoriesCard';
import { Card } from '@/components/ui/card';
import Rating from '@/components/ui/rating/ratingStar';

export default function CategoryCard() {
  return (
    <Card className="!py-0 !px-0 shadow-lg space-x-2 space-y-3">
      <CategoriesCard className="hover:scale-110" />
      <div className="text-xs font-bold text-text-charcoal sm:text-sm md:text-base ml-3 mt-3 space-y-3">
        <p>$695.00</p>
        <p>John Hardy Women Legends Naga Gold & Silver Dragon Station Chain Bracelet</p>
        <Rating rating={3} size={'md'} className="text-rating" />
      </div>
    </Card>
  );
}
