import React from 'react';
import CategoryCardWithImageZoomIn from '../categories/category/categoryCardWithImageZoomIn';

export default function ProductDetails() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/5 w-full">
          <CategoryCardWithImageZoomIn />
        </div>
        <div className="lg:w-2/5 w-full">div 2</div>
      </div>
    </div>
  );
}
