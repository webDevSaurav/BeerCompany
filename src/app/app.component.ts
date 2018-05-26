import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartLength
  constructor(private cart : CartService){
    this.cart.sendCartLength.subscribe(
      data => {
        this.cartLength = data 
      }
    )
  }
}
