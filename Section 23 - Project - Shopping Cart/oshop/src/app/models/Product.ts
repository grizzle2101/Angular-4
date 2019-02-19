export class ProductNode {
  key: string;
  product: Product;
}

export interface Product {
  title: string;
  price: number;
  category: string;
  imageUrl: string;
}

export class ShoppingCartItem {
  product: Product;
  quantity: number;
}

export class ProductItem {
  title: string;
  price: number;
  imageUrl: string;
  quantity: number;
}


export class ShoppingCart {
  constructor(public items: ShoppingCartItem[]){}
  
  get totalItemsCount() {
    let count = 0;
    this.items.forEach(item => {count += item.quantity});
    return count;
  }
}