import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juego';
import { JuegoService } from 'src/app/services/juego.service'

@Component({
  selector: 'app-punto4',
  templateUrl: './punto4.component.html',
  styleUrls: ['./punto4.component.css']
})
export class Punto4Component implements OnInit {

  animales : Array <Juego>;
  palabra:Juego;
  puntaje:number = 0;
  cantVidas:number = 6;

  arrayPalabraIngles : Array<string>;
  arrayPalabraU : Array<string>;

  indicePalabraActual: number;
	longitudPalabraActual: number;
	letra0: string;
	letra1: string;
	letra2: string;
	letra3: string;
	letra4: string;
	letra5: string;
	letra6: string;
	letra7: string;

  constructor(private juegoService: JuegoService) {
    this.obtenerPalabras();
    this.iniciarJuego();
  }

  obtenerPalabras(){
    this.animales = this.juegoService.getAnimales();
  }
  ngOnInit(): void {
  }

  iniciarJuego(){
    this.letra0="";
	  this.letra1="";
    this.letra2="";
    this.letra3="";	
    this.letra4="";
    this.letra5="";
    this.letra6="";
    this.letra7="";

    this.indicePalabraActual = 0;
    this.palabra = this.animales[this.indicePalabraActual];
    this.longitudPalabraActual = this.palabra.palabraIngles.length;
    
    this.arrayPalabraIngles = this.palabra.palabraIngles.split("");
  
    var palabraUsuario = this.palabra.palabraIngles;
    palabraUsuario = palabraUsuario.replace(/./gi,' ');
    this.arrayPalabraU = palabraUsuario.split("");
  
    console.log(this.arrayPalabraIngles);
    console.log(this.arrayPalabraU);

  }

  public ponerLetras(){
    console.log("cambiado");
    console.log(this.arrayPalabraU.join("") );
    console.log(this.arrayPalabraIngles.join("") );

    this.arrayPalabraU[0]=this.letra0;	
    this.arrayPalabraU[1]=this.letra1;
    this.arrayPalabraU[2]=this.letra2;
    this.arrayPalabraU[3]=this.letra3;
    this.arrayPalabraU[4]=this.letra4;
    this.arrayPalabraU[5]=this.letra5;
    this.arrayPalabraU[6]=this.letra6;
    this.arrayPalabraU[7]=this.letra7;

  }

  public puntosVidas(){
    if(this.arrayPalabraU.join("") == this.arrayPalabraIngles.join("")){
      alert ("Has acertado");
      this.puntaje=this.puntaje+1;
		  this.cambiarSiguientePalabra();
    }
    else
    {
      alert("Incorrecto");
      this.cantVidas=this.cantVidas - 1;
    }
  }
  
  cambiarSiguientePalabra(){
    this.letra0="";
    this.letra1="";
    this.letra2="";
    this.letra3="";
    this.letra4="";
    this.letra5="";
    this.letra6="";
    this.letra7="";
  }


  
}
