import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-beer-showcase',
  templateUrl: './beer-showcase.component.html',
  styleUrls: ['./beer-showcase.component.css']
})
export class BeerShowcaseComponent implements OnInit {
  modBeerData
  beerData
  beerStyleList = []
  searchString : string
  sortValue : "descending"
  beerStyle : "all"
  constructor(private _http : HttpService) { }

  ngOnInit() {
    this._http.getAllBeers().subscribe(
      (data) => {
        this.beerData = data
        this.searchBeer(null)
        this.sortBeer("descending")
        this.makeBeerStyleList()
      })  
  }

  setFilters(){

  }

  searchBeer(val){
    if(val){
      this.modBeerData = this.beerData.filter((item)=>{
           if(item.name.toLowerCase().indexOf(val.toLowerCase()) != -1){
            return item
          }
      })
    } else {
      this.modBeerData = this.beerData
    }  
  }

  sortBeer(val){
    if(val === "ascending"){
      this.modBeerData = this.modBeerData.sort((a, b) => {
        return a.abv-b.abv
      })
    } else if(val === "descending"){
      this.modBeerData = this.modBeerData.sort((a, b) => {
        return b.abv-a.abv
      })
    }
  }

  makeBeerStyleList(){
    this.beerData.forEach(element => {
      if(this.beerStyleList.indexOf(element.style) === -1){
        this.beerStyleList.push(element.style)
      }
    });
  }

  filterStyle(val){
    if(val === "all"){
      this.modBeerData = this.beerData
    } else{
      this.modBeerData = this.beerData.filter((item)=>{
        if(item.style.toLowerCase().indexOf(val.toLowerCase()) != -1){
         return item
       }
      })
    }
  }
}
