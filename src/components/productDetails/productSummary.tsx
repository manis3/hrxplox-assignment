import { cn } from '@/utils/cn';
import React from 'react';
import Rating from '../ui/rating/ratingStar';
import FeatureList from '../ui/featureList/featureList';
import Button from '../ui/button/ButtonWithLoadingState';
import { PaymentIcon, ProfileIcon, ShippingIcon, TagIcon } from '@/assets/svgs';
import { IProductSummary } from '@/types/product-detail.type';

export default function ProductSummary({
  title,
  productTitle,
  stockCount,
  price,
  className,
  isInStockTitle,
  productCount,
  setProductCount,
  isInStock,
}: IProductSummary) {
  return (
    <div className={cn(className)}>
      <h1 className="text-2xl sm:text-3xl font-bold">{productTitle}</h1>
      <div className="relative !flex !flex-row items-center gap-2 mt-3 ">
        <p>{stockCount}</p>
        <span
          className={cn('py-1 px-2  rounded-md font-medium', {
            'bg-green-100 text-green-900': isInStock,
            '!bg-red-100 text-red-900': !isInStock,
          })}
        >
          {isInStockTitle}
        </span>
      </div>
      <div className="flex items-center justify-start mt-5 gap-3">
        <Rating rating={4} size={'lg'} />5 reviews
      </div>

      <div className="mt-8 text-3xl font-bold text-text-proseBody">
        {`$${price}.00`}
        <FeatureList icon={<TagIcon />} content="Save 10% on your first order" />
      </div>
      <div className="mt-10">
        <Button
          variant={'secondary'}
          className="rounded-full bg-[] text-text-primary hover:opacity-90 transition-all duration-300"
          onClick={() => setProductCount(productCount + 1)}
        >
          {' '}
          {title}
        </Button>
      </div>
      <div className="mt-8">
        <FeatureList icon={<ShippingIcon />} content="Free shipping worldwide" />

        <FeatureList icon={<PaymentIcon />} content="100% Secured Payment" />

        <FeatureList icon={<ProfileIcon />} content="Made by professionals" />
      </div>
    </div>
  );
}
