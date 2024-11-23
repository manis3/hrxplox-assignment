'use client';
import React from 'react';
import CategoryCardWithImageZoomIn from './categoryCardWithImageZoomIn';
import ProductDetailsCard from './productDetailsCard';

export default function ProductDetails() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-3/5 w-full">
          <div>
            <ProductDetailsCard />
          </div>
        </div>
        <div className="lg:w-2/5 w-full">div 2</div>
      </div>
    </div>
  );
}
