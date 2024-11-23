'use client';
import React from 'react';
import CategoryCardWithImageZoomIn from './categoryCardWithImageZoomIn';
import ProductSummary from './productSummary';
import ProductDescriptionAndReview from './productDescriptionAndReview';
import { useGetCollections } from '@/api-services/queries/useGetCollections';
import { useGetCollection } from '@/api-services/queries/useGetCollection';
import { useGetProduct } from '@/api-services/queries/useGetProduct';

export default function ProductDetails() {
  const { collections, isCollectionsFetching } = useGetCollections();
  const { collection, isCollectionFetching } = useGetCollection({ slug: 'skincare' });
  const { product } = useGetProduct({ slug: 'hyaluronic-acid-serum' });
  console.log(collections, 'data ko value from the page');
  console.log(collection, 'data ko value from the page ------------------------------');
  console.log(product, 'data ko value from the page ------------------------------11111111111');

  return (
    <div className="w-full h-full">
      <div className="flex flex-col lg:flex-row gap-10  xl:gap-14">
        <div className="lg:w-3/5 w-full">
          <div className="space-y-10">
            <CategoryCardWithImageZoomIn />
            <ProductSummary className="flex lg:hidden" />
            <ProductDescriptionAndReview />
          </div>
        </div>
        <div className="lg:w-2/5 w-full hidden lg:flex">
          <ProductSummary />
        </div>
      </div>
    </div>
  );
}
