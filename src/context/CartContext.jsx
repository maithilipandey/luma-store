import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'luma-store-cart-v1';

function readCart() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [];
    const parsed = JSON.parse(saved);
    return Array.isArray(parsed) ? parsed.filter(item => Number.isInteger(item.id) && Number.isInteger(item.quantity) && item.quantity > 0) : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(readCart);
  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); }
    catch (error) { console.error('Unable to save cart to localStorage:', error); }
  }, [cart]);

  const addToCart = (product) => setCart(current => {
    const existing = current.find(item => item.id === product.id);
    return existing
      ? current.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...current, { id: product.id, quantity: 1 }];
  });
  const removeFromCart = (id) => setCart(current => current.filter(item => item.id !== id));
  const updateQuantity = (id, quantity) => {
    if (quantity < 1) return removeFromCart(id);
    setCart(current => current.map(item => item.id === id ? { ...item, quantity: Math.min(99, quantity) } : item));
  };
  const clearCart = () => setCart([]);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const value = useMemo(() => ({ cart, addToCart, removeFromCart, updateQuantity, clearCart, itemCount }), [cart, itemCount]);
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
