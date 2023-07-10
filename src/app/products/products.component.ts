import { Component } from '@angular/core';
import { ProductsRoot } from '../models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  //stati
  productsRoot?: ProductsRoot;
  loading = false;

  constructor() {
    this.loading = true;
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((json) => {
        this.loading = false;
        this.productsRoot = json;
      });
  }
}
