import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../models/ShoppingCart';
import { Subscription } from 'rxjs';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';
import { Order } from '../models/order';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy { 
  shipping = {};
  cart: ShoppingCart;
  userId: string;
  cartSubscription: Subscription;
  userSubscription: Subscription;

  constructor(
    private cartService: ShoppingCartService, 
    private orderService: OrderService, 
    private authService: AuthService){}

  async ngOnInit() {
    let cart$ = await this.cartService.getCartItems();
    this.cartSubscription = cart$.valueChanges().subscribe(cart => this.cart = new ShoppingCart(cart));
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy(){
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }
  

  //Task 2 - Refactor Component:
  placeOrder() {
    console.log(this.shipping);
    let order = new Order(this.userId, this.shipping, this.cart);
    this.orderService.storeOrder(order);
  }    
}
