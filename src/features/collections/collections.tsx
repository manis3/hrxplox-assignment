import { useGetCollections } from '@/api-services/queries/useGetCollections';
import Banner from '@/components/banner/banner';
import CategoriesCard from '@/components/categories/categoriesCard';
import Link from 'next/link';
import React from 'react';
import OurServices from './ourServices';
import Loader from '@/components/ui/Loader/Loader';

export default function Collections() {
  const { collections, isCollectionsFetching } = useGetCollections();

  return (
    <div className="pt-4 space-y-12">
      <Banner />
      {isCollectionsFetching ? (
        <Loader wrapperClassName="bg-primary" />
      ) : (
        <>
          <h1 className="text-2xl text-text-proseBody sm:text-4xl font-normal mb-5">Shop by Category</h1>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {collections &&
              Object.entries(collections).map(([key, collection]: [string, any]) => (
                <Link key={key} href={`products/${collection.slug}`}>
                  <CategoriesCard badgeTitle={collection?.name} show className="hover:scale-110" imageSrc={collection?.featuredAsset?.preview} />
                </Link>
              ))}
          </div>
        </>
      )}
      <OurServices />
    </div>
  );
}
