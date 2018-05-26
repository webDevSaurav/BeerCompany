import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { BeerShowcaseComponent } from './beer-showcase/beer-showcase.component';
import { BeerItemComponent } from './beer-item/beer-item.component';
import { HttpService } from './http.service';

import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';

@NgModule({
  declarations: [
    AppComponent,
    MainSectionComponent,
    BeerShowcaseComponent,
    BeerItemComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [HttpService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
