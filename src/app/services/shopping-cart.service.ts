import { Injectable } from '@angular/core';
import {CartItem} from "../dto/CartItem";
import {ProductDto} from "../dto/ProductDto";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private cartItems: CartItem[] = [];

  constructor() { }

  // Add item to the cart
// Add item to the cart
  addItemToCart(item: ProductDto, quantity: number, rentalPerDays: number) {
    const cartItem: CartItem = new CartItem(item, quantity, rentalPerDays);
    this.cartItems.push(cartItem);
  }


  // Get cart items
  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  // Clear cart
  clearCart() {
    this.cartItems = [];
  }
}
