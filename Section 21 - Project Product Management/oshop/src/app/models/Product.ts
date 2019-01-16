//Task 1 - Create Interfaces:
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