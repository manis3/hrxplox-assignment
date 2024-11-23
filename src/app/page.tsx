'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CollectionsPage from './pages/collections/collections.page';
import ProductDetails from '@/components/productDetails/productDetails';
const queryClient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="max-w-7xl m-auto">
        <CollectionsPage />
        <ProductDetails />
      </div>
    </QueryClientProvider>
  );
}
