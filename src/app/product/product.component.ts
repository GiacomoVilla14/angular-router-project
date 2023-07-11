import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, interval, Observable} from 'rxjs';
import {ProdottoService} from "../prodotto.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
  private subscription?: Subscription

  constructor(private prodService: ProdottoService) {

  }

  ngOnInit() {
    /*this.subscription = interval(1000).subscribe({
      next: (count) => {
        console.log(count)
      }
    })*/
    this.subscription = this.prodService.observable?.subscribe({
        next: (count) => {
          console.log(count)
        },
        complete: () => {
          alert("Completato")
        },
        error: (err) => {
          console.log(err.message)
        }
      }
    )
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe()
  }
}


