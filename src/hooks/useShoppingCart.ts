// import { create } from "zustand";

// export type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// };

// type Store = {
//   cart: CartItem[];
//   addToCart: (cartItem: CartItem) => void;
// };

// export const useShoppingCart = create<Store>()((set) => ({
//   cart: [],
//   addToCart: (cartItem: CartItem) =>
//     set((state) => ({ cart: [...state.cart, cartItem] })),
// }));

// import { create } from "zustand";

// export type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// };

// type Store = {
//   cart: CartItem[];
//   addToCart: (cartItem: CartItem) => void;
// };

// export const useShoppingCart = create<Store>((set) => ({
//   cart: [],
//   addToCart: (cartItem: CartItem) =>
//     set((state) => {
//       // Buscar si el ítem ya está en el carrito
//       const itemIndex = state.cart.findIndex((item) => item.id === cartItem.id);
//       if (itemIndex > -1) {
//         // Si el ítem ya está en el carrito, incrementa la cantidad
//         const newCart = [...state.cart];
//         newCart[itemIndex] = {
//           ...newCart[itemIndex],
//           quantity: newCart[itemIndex].quantity + 1,
//         };
//         return { cart: newCart };
//       } else {
//         // Si el ítem no está en el carrito, añádelo directamente
//         return { cart: [...state.cart, { ...cartItem, quantity: 1 }] };
//       }
//     }),
// }));

// import { create } from "zustand";

// export type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// };

// type Store = {
//   cart: CartItem[];
//   addToCart: (cartItem: CartItem) => void;
//   updateCartQuantity: (id: number, quantity: number) => void;
// };

// export const useShoppingCart = create<Store>((set) => ({
//   cart: [],
//   addToCart: (cartItem: CartItem) =>
//     set((state) => {
//       const existingItem = state.cart.find((item) => item.id === cartItem.id);
//       if (existingItem) {
//         const updatedCart = state.cart.map((item) =>
//           item.id === cartItem.id
//             ? { ...item, quantity: item.quantity + cartItem.quantity }
//             : item
//         );
//         console.log("Updated Cart", updatedCart);
//         return { cart: updatedCart };
//       } else {
//         return { cart: [...state.cart, cartItem] };
//       }
//     }),
//   updateCartQuantity: (id, quantity) =>
//     set((state) => {
//       const updatedCart = state.cart.map((item) =>
//         item.id === id ? { ...item, quantity } : item
//       );
//       console.log("Updated Cart", updatedCart);
//       return { cart: updatedCart };
//     }),
// }));
// import { create } from "zustand";

// export type CartItem = {
//   id: number;
//   name: string;
//   price: number;
//   quantity: number;
// };

// type Store = {
//   cart: CartItem[];
//   addToCart: (cartItem: CartItem) => void;
// };

// export const useShoppingCart = create<Store>((set) => ({
//   cart: [],
//   addToCart: (cartItem: CartItem) =>
//     set((state) => {
//       const existingItemIndex = state.cart.findIndex(
//         (item) => item.id === cartItem.id
//       );
//       let newCart;
//       if (existingItemIndex >= 0) {
//         // Si existe y la cantidad es cero, lo eliminamos
//         if (cartItem.quantity <= 0) {
//           newCart = [
//             ...state.cart.slice(0, existingItemIndex),
//             ...state.cart.slice(existingItemIndex + 1),
//           ];
//         } else {
//           // Si existe y la cantidad es mayor a cero, actualizamos
//           newCart = [
//             ...state.cart.slice(0, existingItemIndex),
//             { ...state.cart[existingItemIndex], quantity: cartItem.quantity },
//             ...state.cart.slice(existingItemIndex + 1),
//           ];
//         }
//       } else if (cartItem.quantity > 0) {
//         // Si no existe y la cantidad es mayor a cero, añadimos
//         newCart = [...state.cart, cartItem];
//       } else {
//         // Si no existe y la cantidad es cero, no hacemos nada
//         return {};
//       }
//       console.log("Updated Cart:", newCart);
//       return { cart: newCart };
//     }),
// }));
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
      console.log("Updated Cart:", newCart);
      return { cart: newCart };
    }),
  removeFromCart: (id: number) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item.id !== id);
      console.log("Cart after removal:", newCart);
      return { cart: newCart };
    }),
}));
