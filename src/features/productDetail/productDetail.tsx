import ProductDetails from '@/components/productDetails/productDetails';
import Breadcrumb from '@/components/ui/breadcrumb/breadcrumb';
import { useAppStore } from '@/store/store';
import { useParams } from 'next/navigation';
import React from 'react';

export default function ProductDetail() {
  const productsSlug = useAppStore(store => store.productsSlug)
  return (
    <div className="space-y-10 my-10 ">
      <Breadcrumb slug={productsSlug} link={`/products/${productsSlug}`} />
      <ProductDetails />
    </div>
  );
}
