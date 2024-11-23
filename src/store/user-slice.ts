import { IUserProductInitialState, IUserProductSlice } from "@/types/user-product-types";
import { StateCreator } from "zustand";

const initialState: IUserProductInitialState = {
    productCount: 0,
}

export const createUserProductSlice: StateCreator<IUserProductSlice> = (set, get) => ({
    ...initialState,
    actions: {

        setProductCount: (_count) => {
            set({ productCount: _count });
        },
    },
});