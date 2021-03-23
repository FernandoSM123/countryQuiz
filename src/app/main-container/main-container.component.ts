import { Component, OnInit,Input } from '@angular/core';
import { Country } from '../models/country';
import { QuestionContainerComponent } from '../question-container/question-container.component';
import { ResultContainerComponent } from '../result-container/result-container.component';
import {CountryService} from '../services/country.service'; //importo mi servicio


@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css']
})
export class MainContainerComponent implements OnInit {

  public countries:Country[];

  constructor(
    private countryService:CountryService
  ){}

  getCountries() {
   this.countryService.getCountriesByRegion().subscribe(
     response => {
       this.countries=response;
       this.shuffleArray(this.countries);
      },
      error =>{
        console.log(error);
      }
   );
  }

  ngOnInit(): void {
  this.getCountries();
  }

  //Acomoda los elmentos del array de forma aleatoria
  shuffleArray(array:any[]) {
    array.sort(() => Math.random() - 0.5);
  }


}
