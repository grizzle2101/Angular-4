import { Component, Input } from '@angular/core';
import { Product } from '../../models/Product';

@Component({
  selector: 'edit-product-card',
  templateUrl: './edit-product-card.component.html',
  styleUrls: ['./edit-product-card.component.css']
})
export class EditProductCardComponent {
  @Input('product') product: Product;
}
