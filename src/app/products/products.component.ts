import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsRoot } from '../models';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  //stati
  productsRoot?: ProductsRoot;
  loading = false;
  private httpSubscription?: Subscription;
  // constructor() {
  //   this.loading = true;
  //   fetch('https://dummyjson.com/products')
  //     .then((res) => res.json())
  //     .then((json) => {
  //       this.loading = false;
  //       this.productsRoot = json;
  //     });
  // }
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.httpSubscription = this.http
      .get<ProductsRoot>('https://dummyjson.com/products')
      .subscribe({
        next: (value) => {
          this.productsRoot = value;
          this.loading = false;
        },
      });
  }
  ngOnDestroy() {
    this.httpSubscription?.unsubscribe();
  }
}
