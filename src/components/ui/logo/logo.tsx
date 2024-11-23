import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Slogan({ show }: { show?: boolean }) {
  return (
    <Link className="flex gap-2" href={'/'}>
      <Image src={'https://demo.hyperce.io/logo.svg'} width={31} height={32} alt="Icon" />
      <div className="relative">
        <p className="ml-1 text-xl font-bold lg:text-2xl relative -top-1">Hyperce</p>
        {show && <div className="absolute -bottom-2 right-0 bg-slate-500 text-xs rounded-full px-1 py-0 text-white">demo</div>}
      </div>
    </Link>
  );
}
