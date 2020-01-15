import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  itemDic = {};
  constructor() { }

  addToCart(product) {
    this.items.push(product);
    if(typeof this.itemDic[product.id] !== 'undefined'){
      this.itemDic[product.id].count += 1;
    }else{
      this.itemDic[product.id] = {
        count: 1,
        item: product
      };
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeFromCart(product) {
    debugger;
    let index = this.items.indexOf(product, 0);
    if (index > -1) {
      this.items.splice(index, 1);
    }

    if(typeof this.itemDic[product.id] !== 'undefined'){
      this.itemDic[product.id].count -= 1;
      if(this.itemDic[product.id].count < 1){
        this.itemDic[product.id].count = 0;
      }
    }

  }

}
