import Banner from '@/components/banner/banner';
import CategoriesCard from '@/components/categories/categoriesCard';
import React from 'react';

export default function Collections() {
  return (
    <div className="pt-4 space-y-12">
      <Banner />
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
        <CategoriesCard badgeTitle="Men's ware" show className="hover:scale-110" />
        <CategoriesCard badgeTitle="Men's ware" show className="hover:scale-110" />
        <CategoriesCard badgeTitle="Men's ware" show className="hover:scale-110" />
        <CategoriesCard badgeTitle="Men's ware" show className="hover:scale-110" />
        <CategoriesCard badgeTitle="Men's ware" show className="hover:scale-110" />
        <CategoriesCard badgeTitle="Men's ware" show className="hover:scale-110" />
        <CategoriesCard badgeTitle="Men's ware" show className="hover:scale-110" />
        <CategoriesCard badgeTitle="Men's ware" show className="hover:scale-110" />
        <CategoriesCard badgeTitle="Men's ware" show className="hover:scale-110" />
      </div>
    </div>
  );
}
