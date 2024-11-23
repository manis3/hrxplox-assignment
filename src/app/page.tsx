'use client';
import ProductDetails from '@/components/productDetails/productDetails';
import CollectionsPage from './collections/page';
export default function Home() {
  return (
    <div className="max-w-[1220px] m-auto">
      <CollectionsPage />
    </div>
  );
}
