import { Component, OnInit,Input, EventEmitter } from '@angular/core';
import { Country } from '../models/country';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.css']
})
export class QuestionContainerComponent implements OnInit {

  @Input() public countryList:Country[]; //Recibe lista de paises desde el componente padre
  options:Country[];
  answer:Country;
  numQuestion:number;
  numCorrectAnwers:number;
  gameOver:boolean;

  constructor() {
    this.countryList=new Array();
    this.options=new Array();
    this.numQuestion=1;
    this.numCorrectAnwers=0;
    this.gameOver=false;
  }

  ngOnInit(): void {
    var firstOption:number=(this.numQuestion-1)*4;
    var lastOption:number=firstOption+4;
    this.options=this.countryList.slice(firstOption,lastOption);  //opciones de la pregunta
    this.answer=this.options[Math.floor(Math.random() * this.options.length)]; //respuesta
    console.log("pregunta");
    console.log(this.answer);
    console.log("Lista de paises");
    console.log(this.countryList);
    console.log("Lista de opciones");
    console.log(this.options);

    this.shuffleArray(this.options);
  }

    //Acomoda los elmentos del array de forma aleatoria
    shuffleArray(array:any[]) {
      array.sort(() => Math.random() - 0.5);
    }


    getResponse(response:string){
      var list:HTMLCollection = document.getElementById("optionsContainer").children;
      //respuesta correcta
      if(response==this.answer.name){
        for(var i=0;i<4;i++){
          if(list[i].getAttribute("value")==response){
            list[i].className= "correct";
            this.numCorrectAnwers++;
          }
          else
            list[i].className= "optionDisabled";
        }
      }

      //respuesta incorrecta
       else{
        for(var i=0;i<4;i++){
          if(list[i].getAttribute("value")==response)
            list[i].className= "incorrect";
          else if(list[i].getAttribute("value")==this.answer.name)
            list[i].className= "correct";
          else
            list[i].className= "optionDisabled";
        }
      }
      //Habilitar boton de siguiente
      document.getElementById("buttonContainer").style.visibility="visible";
    }

    nextQuestion(){
      //Continua a la siguiente pregunta
      this.numQuestion++;
      if(this.numQuestion<=10){
      this.resetStyles();
      this.ngOnInit();
      }
      //Pantalla de resultados
      else
      this.gameOver=true;
    }

    //Reiniciar estilos de los botones de opciones
    resetStyles(){
      var list:HTMLCollection = document.getElementById("optionsContainer").children;
      for(var i=0;i<4;i++){
        list[i].className= "option";
      }
    }

    //Refrescar pagina
    refreshPage(){
      window.location.reload();
    }

}
