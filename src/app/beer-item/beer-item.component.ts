import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.css']
})
export class BeerItemComponent implements OnInit {
  @Input() beerItemData 
  disable : boolean = false
  constructor(private cart : CartService) { }

  ngOnInit() {
    this.cart.removedItem.subscribe(
      (data : any) => 
      {
        if(data.name === this.beerItemData.name){
          this.disable = false
        }
      }
    )
  }

  addToCart(){
    this.disable = true
    this.cart.addToCart(this.beerItemData)
  }

}
