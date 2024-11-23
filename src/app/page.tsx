'use client';
import ProductDetails from '@/components/productDetails/productDetails';
import CollectionsPage from './collections/page';
export default function Home() {
  return (
    <div className="max-w-7xl m-auto">
      <CollectionsPage />
      <ProductDetails />
    </div>
  );
}
