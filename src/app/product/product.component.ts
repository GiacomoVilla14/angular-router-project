import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
  private intervalSubscription?: Subscription;

  constructor() {}

  ngOnInit() {
    this.intervalSubscription = interval(1000).subscribe({
      next(value) {
        console.log(value);
      },
    });
  }
  ngOnDestroy() {
    this.intervalSubscription?.unsubscribe();
  }
}
