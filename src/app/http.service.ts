import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
@Injectable()
export class HttpService {

  constructor(private _http : HttpClient) { }

  public getAllBeers(){
    return this._http.get("http://starlord.hackerearth.com/beercraft")
  }
}
