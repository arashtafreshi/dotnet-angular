import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  constructor() { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeFromCart(product) {

    let index = this.items.indexOf(product, 0);
    debugger;
    if (index > -1) {
      this.items.splice(index, 1);
    }
  }

}
