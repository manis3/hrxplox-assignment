export interface IUserProductSliceActions {
  setProductCount: (productCount: number) => void;
  setProductsSlug: (productSlug: string) => void;
}

export interface IUserProductInitialState {
  productCount: number;
  productsSlug: string;
}

export interface IUserProductSlice extends IUserProductInitialState {
  actions: IUserProductSliceActions;
}
