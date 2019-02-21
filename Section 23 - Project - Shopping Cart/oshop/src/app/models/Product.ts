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
  key: string;

  constructor(init?: Partial<ProductItem>){
    Object.assign(this, init);
  }
}


