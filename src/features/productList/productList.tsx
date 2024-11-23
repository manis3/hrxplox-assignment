'use client';
import { useGetCollection } from '@/api-services/queries/useGetCollection';
import CategoryCard from '@/components/categories/category/categoryCard';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

export default function ProductList() {
  const { slug } = useParams();
  const { productList } = useGetCollection({ slug: String(slug) });
  return (
    <div>
      <h3 className="text-3xl sm:text-5xl font-medium tracking-tight text-gray-900 my-8">{slug}</h3>
      <p className=" text-text-proseBody hover:text-zinc-800 text-base leading-tight">Breadcrumb </p>
      <div className="grid gap-y-10 gap-x-6 grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        <div className="hidden" />
        {productList &&
          Object.entries(productList).map(([key, product]: [string, any]) => (
            <Link key={product.slug} href={`/product/${product.slug}`}>
              <CategoryCard price={product?.priceWithTax?.max} imageSrc={product?.productAsset?.preview} productName={product?.productName} />
            </Link>
          ))}
      </div>
    </div>
  );
}
