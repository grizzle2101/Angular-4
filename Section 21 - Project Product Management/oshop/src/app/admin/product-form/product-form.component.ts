import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  categories$;

  constructor(
    private router: Router,
    private categoryService: CategoryService, 
    private productService: ProductService) {
    this.categories$ = categoryService.getCategories().valueChanges();
   }

  ngOnInit() {}

  //Task 4 - Redirect On Save:
  save(product) {
    console.log("Product: ", product);
    this.productService.createProduct(product);
    this.router.navigate(['admin/products']);
  }
}
