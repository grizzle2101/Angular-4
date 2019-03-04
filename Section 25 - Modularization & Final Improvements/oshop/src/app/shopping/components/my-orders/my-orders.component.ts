import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { OrderService } from '../../../shared/services/order.service';
import { switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit, OnDestroy {
  orders = [];
  subscription: Subscription

  constructor(
    private authService: AuthService,
    private orderService: OrderService) {

    }

    ngOnInit() {
      this.subscription = this.authService.user$
      .pipe(switchMap(u => 
        this.orderService.getOrdersByUser(u.uid)
        .valueChanges()))
        .subscribe(orders => this.orders = orders);
    }

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
  }