import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit {
  public appUser: AppUser;
  shoppingCartItemCount: number;
  
  constructor(private authService: AuthService, private shoppingCartService: ShoppingCartService) {}

  logout() {
    this.authService.logout();
    this.appUser = null;
  }

  //Task 1 - Get Cart Quantity:
  async ngOnInit() {
    this.authService.appUser$.subscribe(x => {this.appUser = x});

    let cart = await this.shoppingCartService.getCartItems();
    cart.valueChanges().subscribe(cart => {
      this.shoppingCartItemCount = 0; //Every Time Values are changed, will update.
      cart.forEach(item => {
        this.shoppingCartItemCount += item.quantity
      });
    });
  }
}
