import { Component, OnInit } from '@angular/core';
import {Mensaje} from './../../models/mensaje'

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {

  mensaje: Mensaje;
  tamMaxTxt:number = 140 ;
  tamTxt:number;
  mensajes:Array<Mensaje>;

  constructor() {
    this.mensaje = new Mensaje();
    this.mensajes= new Array <Mensaje>();
  }

  public enviarMensaje(){
    console.log("Guardando...")
    this.mensaje.fecha = new Date();
    this.mensajes.push(this.mensaje);
    console.log(this.mensaje);
    this.mensaje = new Mensaje();

  }

  public cambiarTamTexto(){
    this.tamTxt = this.mensaje.texto.length;
    console.log(this.tamTxt);
  }

  ngOnInit(): void {
  }

  restante() {
    return this.tamMaxTxt - this.tamTxt;
  }
}
