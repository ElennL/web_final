// src/lib/stores/cartStore.ts
import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';

// Define the item type
type CartItem = {
  productId: string;
  productImage: string;
  productTitle: string;
  productPrice: number;
  productDescription: string;
  quantity: number;
};

// Extend the Writable type to include custom methods
interface CartStore extends Writable<CartItem[]> {
  addItem: (item: CartItem) => void;
  // other custom methods can be added here
}

function createCart(): CartStore {
  const { subscribe, set, update } = writable<CartItem[]>([]);

  // Custom method to add an item to the cart
  function addItem(item: CartItem) {
    update((items) => {
      const existingItemIndex = items.findIndex((i) => i.productId === item.productId);
      if (existingItemIndex !== -1) {
        // Increase quantity for existing item
        items[existingItemIndex].quantity += 1;
        return items;
      } else {
        // Add new item with quantity 1
        return [...items, { ...item, quantity: 1 }];
      }
    });
  }

  // Return an object that satisfies the CartStore interface
  return {
    subscribe,
    set,
    update,
    addItem, // Add the custom method
  };
}

export const cart = createCart();
