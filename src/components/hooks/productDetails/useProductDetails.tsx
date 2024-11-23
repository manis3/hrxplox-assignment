import { TabType } from '@/consts/product-description-and-review';
import { useAppStore } from '@/store/store';
import { useState } from 'react';

export default function useProductDetails() {
    const [isActiveTab, _setIsActiveTab] = useState<string>(TabType.DESCRIPTION);
    const [isInStock, setIsInStock] = useState<boolean>(false)
    const productCount = useAppStore((store) => store.productCount);
    const setProductCount = useAppStore((store) => store.actions.setProductCount)

    const title = productCount === 0 ? "Add to cart" : `${productCount} in cart`
    const isInStockTitle = isInStock ? "In Stock" : "Out Of Stock";

    const setIsActiveTab = (type: TabType) => {
        _setIsActiveTab(type);
    };

    return {
        isActiveTab,
        setIsActiveTab,
        isInStock,
        productCount,
        setProductCount,
        title,
        isInStockTitle
    };
}
