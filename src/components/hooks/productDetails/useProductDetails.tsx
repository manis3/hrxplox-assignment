import { useGetProduct } from '@/api-services/queries/useGetProduct';
import { TabType } from '@/consts/product-description-and-review';
import { useAppStore } from '@/store/store';
import { useParams } from 'next/navigation';
import { useState } from 'react';

interface IAssets {
  id: string;
  preview: string;
}
export default function useProductDetails() {
  const { slug } = useParams();
  const { product, isProductBeingFetched } = useGetProduct({ slug: String(slug) });
  const [isActiveTab, _setIsActiveTab] = useState<string>(TabType.DESCRIPTION);
  const [isInStock, setIsInStock] = useState<boolean>(true);
  const productCount = useAppStore((store) => store.productCount);
  const setProductCount = useAppStore((store) => store.actions.setProductCount);

  const title = productCount === 0 ? 'Add to cart' : `${productCount} in cart`;

  const productTitle = product?.name;
  const content = product?.description;
  const imageSrc = product?.featuredAsset?.preview;
  const stockCount = product?.variants[0]?.sku;
  const isInStockTitle = product?.variants[0]?.stockLevel;
  const price = product?.variants[0]?.price;
  const previewUrls = product?.assets?.map((asset: IAssets) => asset.preview);

  const setIsActiveTab = (type: TabType) => {
    _setIsActiveTab(type);
  };

  return {
    isActiveTab,
    isProductBeingFetched,
    setIsActiveTab,
    isInStock,
    productCount,
    setProductCount,
    title,
    isInStockTitle,
    productTitle,
    content,
    imageSrc,
    stockCount,
    price,
    previewUrls,
  };
}
