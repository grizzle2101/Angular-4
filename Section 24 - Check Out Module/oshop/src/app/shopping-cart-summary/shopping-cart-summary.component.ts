import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCart } from '../models/ShoppingCart';

@Component({
  selector: 'shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent implements OnInit {
  //Task 3 - Pass Cart Data:
  @Input('cart') cart: ShoppingCart;

  constructor() { }

  ngOnInit() {
  }

}
