import { create } from "zustand";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

type Store = {
  cart: CartItem[];
  addToCart: (cartItem: CartItem) => void;
  removeFromCart: (id: number) => void; // Agrega esta línea
};

export const useShoppingCart = create<Store>((set) => ({
  cart: [],
  addToCart: (cartItem: CartItem) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item.id === cartItem.id
      );
      let newCart;
      if (existingItemIndex >= 0) {
        if (cartItem.quantity <= 0) {
          newCart = [
            ...state.cart.slice(0, existingItemIndex),
            ...state.cart.slice(existingItemIndex + 1),
          ];
        } else {
          newCart = [
            ...state.cart.slice(0, existingItemIndex),
            { ...state.cart[existingItemIndex], quantity: cartItem.quantity },
            ...state.cart.slice(existingItemIndex + 1),
          ];
        }
      } else if (cartItem.quantity > 0) {
        newCart = [...state.cart, cartItem];
      } else {
        return {};
      }
      return { cart: newCart };
    }),
  removeFromCart: (id: number) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item.id !== id);
      return { cart: newCart };
    }),
}));
