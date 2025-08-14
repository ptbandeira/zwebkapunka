import { create } from "zustand";
import type { Product } from "@/types/product";

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
}

export const useCart = create<CartState>((set) => ({
  items: [],
  addItem: (product) =>
    set((state) => {
      const existing = state.items.find(
        (item) => item.product.id === product.id
      );
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { items: [...state.items, { product, quantity: 1 }] };
    }),
}));
