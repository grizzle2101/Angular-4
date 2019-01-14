import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import{take, map, takeWhile} from 'rxjs/operators';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;
  product = {};

  constructor(
    private router: Router,
    private categoryService: CategoryService, 
    private productService: ProductService,
    private route: ActivatedRoute) {
    this.categories$ = categoryService.getCategories().valueChanges();

    //Task 3 - Read Route Parameter & Load Product
    let id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.productService.getProduct(id).valueChanges()
      .pipe(take(1)).subscribe(x => this.product = x[0]);
    };
   }

  ngOnInit() {}
  
  save(product: Product) {
    console.log("Product: ", product);
    this.productService.createProduct(product);
    this.router.navigate(['admin/products']);
  }
}
