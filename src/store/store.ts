import { persist } from "zustand/middleware";
import { create } from "zustand";


import { StoreState } from "@/types/store-types";
import { createUserProductSlice } from "./user-slice";

export const useAppStore = create<StoreState>()(
    persist(
        (...a) => ({
            ...createUserProductSlice(...a),
            actions: {
                ...createUserProductSlice(...a).actions,
            },
        }),
        {
            name: "product-storage",
            onRehydrateStorage: (state) => {

                if (state?.productCount) {
                    console.log("Rehydrated products:", state.productCount);
                }
            },
            partialize: (state) =>
                Object.fromEntries(
                    Object.entries(state).filter(
                        ([key]) => !["actions"].includes(key)
                    )
                ),
        }
    )
);
