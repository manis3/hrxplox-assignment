'use client';
import React from 'react';
import Link from 'next/link';
import { useAppStore } from '@/store/store';
import { useParams } from 'next/navigation';
import Loader from '@/components/ui/Loader/Loader';
import Breadcrumb from '@/components/ui/breadcrumb/breadcrumb';
import CategoryCard from '@/components/categories/category/categoryCard';
import { useGetCollection } from '@/api-services/queries/useGetCollection';

export default function ProductList() {
  const { slug } = useParams();
  const setProductsSlug = useAppStore((Store) => Store.actions.setProductsSlug);

  if (slug) {
    setProductsSlug(String(slug));
  }

  const { productList, isProductListFetching } = useGetCollection({ slug: String(slug) });
  return (
    <div>
      <h3 className="text-3xl sm:text-5xl font-medium tracking-tight text-gray-900 my-8">{slug}</h3>
      <Breadcrumb slug={String(slug)} link={`/products/${slug}`} />
      <div className="flex gap-4">
        <div className="w-1/6" />
        {isProductListFetching ? (
          <Loader wrapperClassName="bg-primary" />
        ) : (
          <div className="w-5/6 grid gap-y-10 gap-x-6 grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
            {productList &&
              Object.entries(productList).map(([key, product]: [string, any]) => (
                <Link key={product.slug} href={`/product/${product.slug}`}>
                  <CategoryCard price={product?.priceWithTax?.max} imageSrc={product?.productAsset?.preview} productName={product?.productName} />
                </Link>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
