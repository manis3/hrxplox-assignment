import Image from 'next/image';
import React from 'react';
import SearchBar from '../ui/searchBar/searchBar';
import { CartIcon, CollectionsIcon } from '@/assets/svgs';
import Link from 'next/link';

export default function Navbar({ pathname }: { pathname: string }) {
  return (
    <div className="max-w-[1440px] h-[80px] shadow-sm z-50 mx-auto p-4 flex items-center space-x-7 justify-between">
      <div className="w-5/6 flex items-center justify-start space-x-8 md:pr-8">
        <Link className="flex gap-2" href={'/'}>
          <Image src={'https://demo.hyperce.io/logo.svg'} width={31} height={32} alt="Icon" />
          <div className="relative">
            <p className="ml-1 text-xl font-bold lg:text-2xl relative -top-1">Hyperce</p>
            <div className="absolute -bottom-2 right-0 bg-slate-500 text-xs rounded-full px-1 py-0 text-white">demo</div>
          </div>
        </Link>
        <div className="flex items-center justify-center text-base gap-2 pr-4 border-r border-text-breadcrumb">
          <CollectionsIcon />
          <div className="mr-1  font-medium text-[#202223]">Collections</div>
        </div>
        <SearchBar />
      </div>
      <div className="w-1/6 flex gap-3 items-center justify-end">
        <div className=" md:pr-8 border-r border-text-proseBody">
          <CartIcon className="w-6 h-6 text-text-grayScaleCharcoal" />
        </div>
        <div className="md:pl-4 flex gap-4 text-lg leading-none">
          <p className="hover:underline active:underline">sign in</p>
          <p className="hover:underline active:underline">sign up</p>
        </div>
      </div>
    </div>
  );
}
