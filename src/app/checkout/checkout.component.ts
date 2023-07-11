import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  onSubmit(formElement: NgForm) {
    console.log(formElement)
  }
}
