import React from 'react';
import ProductDescriptionAndReview from './productDescriptionAndReview';
import CategoryCardWithImageZoomIn from './categoryCardWithImageZoomIn';

export default function ProductDetailsCard() {
  return (
    <div className="space-y-10">
      <CategoryCardWithImageZoomIn />
      <ProductDescriptionAndReview />
    </div>
  );
}
