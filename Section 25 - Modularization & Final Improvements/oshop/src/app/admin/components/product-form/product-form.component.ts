import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import{ take } from 'rxjs/operators';
import { Product } from 'src/app/shared/models/Product';
import { CategoryService } from 'src/app/shared/services/category.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product: Product;
  id;

  constructor(
    private router: Router,
    private categoryService: CategoryService, 
    private productService: ProductService,
    private route: ActivatedRoute) {
    this.categories$ = categoryService.getCategories().valueChanges();

    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id) {
      this.productService.getProduct(this.id).valueChanges()
      .pipe(take(1)).subscribe(x => this.product = x[0]);
    };
   }

  ngOnInit() {}
  
  save(product: Product) {
    if(this.id) this.productService.update(this.id, product);
    else this.productService.createProduct(product);
    this.router.navigate(['admin/products']);
  }

  delete() {
    if(confirm('Sure you want to Delete this Product?')) {
      this.productService.remove(this.id);
      this.router.navigate(['admin/products']);
    }
  }
}
