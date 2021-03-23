import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //importo http client
import {Country} from '../models/country' //importo mi modelo
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private regions:String[]

  constructor(
    private http:HttpClient
  ) {
    this.regions=new Array("Africa", "Americas", "Asia", "Europe", "Oceania");
  }


  getCountriesByRegion():Observable<any> {
    var region:String=this.regions[Math.floor(Math.random() * this.regions.length)];
    const path = 'https://restcountries.eu/rest/v2/region/Americas?fields=name;capital;flag';
    return this.http.get(path);
  }
}
