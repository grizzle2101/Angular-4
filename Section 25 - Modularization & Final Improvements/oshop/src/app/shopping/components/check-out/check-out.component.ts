import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { ShoppingCart } from '../../../shared/models/ShoppingCart';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy { 
  cart: ShoppingCart;
  subscription: Subscription;

  constructor(
    private cartService: ShoppingCartService){}

  async ngOnInit() {
    let cart$ = await this.cartService.getCartItems();
    this.subscription = cart$.valueChanges().subscribe(cart => this.cart = new ShoppingCart(cart));
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  } 
}
