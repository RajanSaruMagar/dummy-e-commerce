import { create } from "zustand";

type TProducts = {
  id: number;
  image: string;
  title: string;
  price: string;
};

type Store = {
  count: number;
  increment: (product: TProducts) => void;
  decrement: (product: TProducts) => void;
  products: TProducts[];
};

export const useStoreData = create<Store>((set) => ({
  count: 0,
  products: [],
  increment: (product) => set((state) => ({
    count: state.count + 1,
    products: [...state.products, product]
  })),
  decrement: (productToRemove) => set((state) => {
    const updatedProducts = state.products.filter(product => product.id !== productToRemove.id);
    return {
      count: state.count - 1,
      products: updatedProducts
    };
  }),
}));
