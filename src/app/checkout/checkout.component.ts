import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent /*implements OnInit, DoCheck*/ {
  @ViewChild("form") checkoutForm?: NgForm

  onSubmit() {
    console.log(this.checkoutForm)
  }
}
