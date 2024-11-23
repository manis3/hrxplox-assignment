export interface IProductSummary {
  className?: string;
  title: string;
  stockCount: number;
  price: number;
  isInStockTitle: string;
  productCount: number;
  setProductCount: (productCount: number) => void;
  isInStock: boolean;
  productTitle: string;
}
