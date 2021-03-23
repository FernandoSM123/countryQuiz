import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';  //Necesario para trabajar con HTTP

import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { QuestionContainerComponent } from './question-container/question-container.component';
import { ResultContainerComponent } from './result-container/result-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    QuestionContainerComponent,
    ResultContainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule //Se importa aqui tambien
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
