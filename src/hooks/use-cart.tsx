"use client"

import * as React from "react";
import type { Product } from "@/components/product/ProductCard";

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  wishlist: Product[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (id: string) => void;
  subtotal: number;
}

const CartContext = React.createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = React.useState<CartItem[]>([]);
  const [wishlist, setWishlist] = React.useState<Product[]>([]);

  React.useEffect(() => {
    const storedItems = localStorage.getItem("cart");
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedItems) {
      try {
        setItems(JSON.parse(storedItems));
      } catch {
        setItems([]);
      }
    }
    if (storedWishlist) {
      try {
        setWishlist(JSON.parse(storedWishlist));
      } catch {
        setWishlist([]);
      }
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  React.useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addItem = (product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const addToWishlist = (product: Product) => {
    setWishlist((prev) => {
      if (prev.find((item) => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
    return sum + price * item.quantity;
  }, 0);

  const value: CartContextValue = {
    items,
    wishlist,
    addItem,
    removeItem,
    addToWishlist,
    removeFromWishlist,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = React.useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

