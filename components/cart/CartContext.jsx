"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("marrks-cart");
      if (stored) setItems(JSON.parse(stored));
    } catch {
      setItems([]);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (ready) localStorage.setItem("marrks-cart", JSON.stringify(items));
  }, [items, ready]);

  function addToCart(product, quantity = 1) {
    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...current, { ...product, quantity }];
    });
  }

  function updateQuantity(id, quantity) {
    setItems((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        )
        .filter(Boolean)
    );
  }

  function removeFromCart(id) {
    setItems((current) => current.filter((item) => item.id !== id));
  }

  function clearCart() {
    setItems([]);
  }

  const value = useMemo(() => {
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return { items, itemCount, total, addToCart, updateQuantity, removeFromCart, clearCart };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
