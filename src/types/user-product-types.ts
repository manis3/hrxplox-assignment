export interface IUserProductSliceActions {
    setProductCount: (productCount: number) => void
}

export interface IUserProductInitialState {
    productCount: number;

}

export interface IUserProductSlice extends IUserProductInitialState {
    actions: IUserProductSliceActions;
}