import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { AuthGuard } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { OrderService } from './services/order.service';
import { ProductService } from './services/product.service';
import { ShoppingCartService } from './services/shopping-cart.service';
import { UserService } from './services/user.service';
import { EditProductCardComponent } from './components/edit-product-card/edit-product-card.component';
import { CartQuantityComponent } from './components/cart-quantity/cart-quantity.component';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
    EditProductCardComponent,
    CartQuantityComponent
  ],
  exports: [
    //Expose Components outside of Shared.
    ProductCardComponent,
    ProductQuantityComponent,
    EditProductCardComponent,
    CartQuantityComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    UserService,
    CategoryService,
    ProductService,
    ShoppingCartService,
    OrderService
  ]
})

export class SharedModule { }
