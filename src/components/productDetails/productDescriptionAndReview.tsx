// ProductDescriptionAndReview.tsx
import React, { useState } from 'react';
import Tabs from '../ui/tabs/tabs';
import { TabsData, TabType } from '@/consts/product-description-and-review';
import useProductDetails from '../hooks/productDetails/useProductDetails';
import ProductDescription from './productDescription';
import ProductReview from './productReview';

export default function ProductDescriptionAndReview({ title, content, className }: { title: string, content: string, className?: string }) {
  const { isActiveTab, setIsActiveTab } = useProductDetails();

  return (
    <div className={className}>
      <div className="flex gap-4 items-center justify-start mb-5 border-b  border-border-lightGray">
        {TabsData.map(({ title, status }) => (
          <Tabs key={title} isActive={isActiveTab === status} onClick={() => setIsActiveTab(status)}>
            {title}
          </Tabs>
        ))}
      </div>
      <div className="mt-4">
        {isActiveTab === TabType.DESCRIPTION && <ProductDescription title={title} content={content} />}
        {isActiveTab === TabType.REVIEW && (
          <div className="flex flex-col gap-10 mt-10">
            <ProductReview userName='Sarah Lee' date='29 April, 2022' />
            <ProductReview userName='Jack Smith' date='28 April, 2022' />
            <ProductReview userName='Emily Jones' date='27 April, 2022' />
            <ProductReview userName='Jhon Doe' date='26 April, 2022' />
          </div>
        )}
      </div>
    </div>
  );
}
