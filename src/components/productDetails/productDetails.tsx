'use client';
import React from 'react';
import CategoryCardWithImageZoomIn from './categoryCardWithImageZoomIn';
import ProductSummary from './productSummary';
import ProductDescriptionAndReview from './productDescriptionAndReview';
import useProductDetails from '../hooks/productDetails/useProductDetails';
import Loader from '../ui/Loader/Loader';

export default function ProductDetails() {
  const {
    isProductBeingFetched,
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
    previewUrls,
  } = useProductDetails();

  if (isProductBeingFetched) {
    return <Loader wrapperClassName="bg-primary" />;
  }

  return (
    <div className="w-full h-full">
      <div className="flex flex-col lg:flex-row gap-10  xl:gap-14">
        <div className="lg:w-3/5 w-full">
          <div className="space-y-10">
            <CategoryCardWithImageZoomIn imageSrc={imageSrc} previewUrls={previewUrls} />
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
            <ProductDescriptionAndReview isActiveTab={isActiveTab} setIsActiveTab={setIsActiveTab} title={productTitle} content={content} />
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
