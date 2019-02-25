import { ShoppingCart } from "./ShoppingCart";
import { ProductItem } from "./Product";


//Task 1 - Create Order Object
export class Order {
    datePlaced: number;
    items: any[];

    constructor(public userId: string, public shipping: any, shoppingCart: ShoppingCart){
        this.datePlaced = new Date().getTime();

        this.items = shoppingCart.items.map(i => {
            return {
              product: {
                title: i.title,
                imageUrl: i.imageUrl,
                price: i.price
              },
              quantity: i.quantity,
              totalPrice: (i.quantity * i.price)
            }
          })
    }
}