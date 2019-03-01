import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { AppUser } from '../shared/models/app-user';
import { ShoppingCartService } from '../shared/services/shopping-cart.service';
import { ShoppingCart } from '../shared/models/ShoppingCart';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  appUser: AppUser;
  cart: ShoppingCart;
  
  constructor(private authService: AuthService, private shoppingCartService: ShoppingCartService) {}

  logout() {
    this.authService.logout();
    this.appUser = null;
  }

  async ngOnInit() {
    this.authService.appUser$.subscribe(x => {this.appUser = x});

    //Initialize Cart
    let cartItems = await this.shoppingCartService.getCartItems();
    cartItems.valueChanges().subscribe(cart => {
      this.cart = new ShoppingCart(cart);
    });
  }
}
