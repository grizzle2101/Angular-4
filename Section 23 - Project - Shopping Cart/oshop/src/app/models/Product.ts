export class ProductNode {
  key: string;
  product: Product;
}

export interface Product {
  title: string;
  price: number;
  category: string;
  imageURL: string;
}

export class ShoppingCartItem {
  product: Product;
  quantity: number;
}