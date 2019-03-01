import { ProductItem, ProductNode } from "./Product";

export class ShoppingCart {
  constructor(public items: ProductItem[]) { }

  getTotalItemsCount() {
    let count = 0;
    this.items.forEach(item => { count += item.quantity; });
    return count;
  }

  getQuantity(product: ProductNode) {
      let item = this.items.find(cartItem => cartItem.title === product.product.title);
      return item ? item.quantity : 0;
  }

  getItemPrice(product: ProductItem) {
    let item = this.items.find(cartItem => cartItem.title === product.title);
    return (item.price * item.quantity);
  }

  getTotalPrice() {
      let sum = 0;
      this.items.forEach(cartItem => {
          sum += (cartItem.price * cartItem.quantity);
        });
        return sum;
  }
}
