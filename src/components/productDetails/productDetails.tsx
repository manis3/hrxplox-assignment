'use client';
import React from 'react';
import CategoryCardWithImageZoomIn from './categoryCardWithImageZoomIn';
import ProductSummary from './productSummary';
import ProductDescriptionAndReview from './productDescriptionAndReview';
import { useGetCollections } from '@/api-services/queries/useGetCollections';
import { useGetCollection } from '@/api-services/queries/useGetCollection';
import { useGetProduct } from '@/api-services/queries/useGetProduct';
import useProductDetails from '../hooks/productDetails/useProductDetails';

export default function ProductDetails() {
  const {
    isActiveTab,
    setIsActiveTab,
    isInStock,
    productCount,
    setProductCount,
    title,
    isInStockTitle,
    productTitle,
    content,
    imageSrc,
    stockCount,
    price,
  } = useProductDetails();
  return (
    <div className="w-full h-full">
      <div className="flex flex-col lg:flex-row gap-10  xl:gap-14">
        <div className="lg:w-3/5 w-full">
          <div className="space-y-10">
            <CategoryCardWithImageZoomIn />
            <ProductSummary
              className="flex flex-col lg:hidden"
              productTitle={productTitle}
              title={title}
              stockCount={stockCount}
              price={price}
              isInStockTitle={isInStockTitle}
              isInStock={isInStock}
              productCount={productCount}
              setProductCount={setProductCount}
            />
            <ProductDescriptionAndReview title={productTitle} content={content} />
          </div>
        </div>
        <div className="lg:w-2/5 w-full hidden lg:flex">
          <ProductSummary
            className="hidden lg:flex flex-col"
            productTitle={productTitle}
            title={title}
            stockCount={stockCount}
            price={price}
            isInStockTitle={isInStockTitle}
            isInStock={isInStock}
            productCount={productCount}
            setProductCount={setProductCount}
          />
        </div>
      </div>
    </div>
  );
}
