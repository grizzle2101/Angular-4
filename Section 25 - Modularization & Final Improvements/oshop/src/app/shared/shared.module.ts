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
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


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
    CartQuantityComponent,
    CommonModule,
    FormsModule,
    MaterialModule,
    NgbModule.forRoot().ngModule, //return module
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    NgbModule.forRoot(),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
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
