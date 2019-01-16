import { Component, OnDestroy, ViewChild } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Subscription } from 'rxjs';
import { ProductNode, Product } from 'src/app/models/Product';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})

export class AdminProductsComponent implements OnDestroy {
  products: any[];
  filteredList: any[] = [];
  subscription: Subscription;
  dataSource;
  displayedColumns: string[] = ['key', 'title', 'price', 'link'];

  constructor(private productService: ProductService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.subscription =  this.productService.getAllProducts().subscribe(products => {
      this.filteredList = this.products = products;
      this.dataSource = new MatTableDataSource<ProductNode>(products);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort});
  }

  filter(query: string) {
   this.filteredList = (query) ?
   this.products.filter(p => p.product.title.toLowerCase().includes(query.toLowerCase())) : 
   this.products;
   this.dataSource = this.filteredList;
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
