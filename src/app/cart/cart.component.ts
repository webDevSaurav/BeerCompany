import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  localCart 
  constructor(private cart : CartService) { }

  ngOnInit() {
    this.cart.CartChanged.subscribe(
      data => {
        this.localCart = data
      }
    )
  }

  removeItem(item){
    this.cart.removedItem.next(item)
    this.cart.removeItemFromCart(item)
  }
}
