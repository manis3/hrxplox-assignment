import { TabType } from '@/consts/product-description-and-review';
import { useState } from 'react';

export default function useProductDetails() {
  const [isActiveTab, _setIsActiveTab] = useState<string>(TabType.DESCRIPTION);

  const setIsActiveTab = (type: TabType) => {
    _setIsActiveTab(type);
  };

  return {
    isActiveTab,
    setIsActiveTab,
  };
}
