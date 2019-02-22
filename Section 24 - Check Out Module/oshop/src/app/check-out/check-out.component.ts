import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/ShoppingCart';
import { Subscription } from 'rxjs';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy { 
  shipping = {};
  cart: ShoppingCart;
  subscription: Subscription;

  constructor(private cartService: ShoppingCartService, private orderService: OrderService){}

  async ngOnInit() {
    let cart$ = await this.cartService.getCartItems();
    this.subscription = cart$.valueChanges().subscribe(cart => this.cart = new ShoppingCart(cart));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  
  placeOrder() {
    console.log(this.shipping);

    let order = {
      datePlace: new Date().getTime(),
      shipping: this.shipping,
      items: this.cart.items.map(i => {
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
    };
    this.orderService.storeOrder(order);
  }    
}
