import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  //Necesario para trabajar con HTTP

import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { QuestionContainerComponent } from './question-container/question-container.component';
import { ResultContainerComponent } from './result-container/result-container.component';

//Modulos de NgxSpinnerModule
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    QuestionContainerComponent,
    ResultContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //Se importa aqui tambien
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
