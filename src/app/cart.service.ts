import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService implements OnInit {
  CartChanged = new Subject()
  removedItem = new Subject()
  sendCartLength = new Subject()
  cart : any[] = []
  constructor() { }

  ngOnInit(){}
  

  addToCart(item){
    this.cart.push(item)
    this.CartChanged.next(this.cart)
    this.sendCartLength.next(this.cart.length)
  }

  removeItemFromCart(item){
   if(this.cart.indexOf(item) != -1){
     let index = this.cart.indexOf(item)
     this.cart.splice(index, 1)
     this.CartChanged.next(this.cart)
     this.sendCartLength.next(this.cart.length)
   } 
  }
}
