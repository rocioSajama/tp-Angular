import { Component, OnInit } from '@angular/core';
import {Asistencia} from './../../models/asistencia';

@Component({
  selector: 'app-datatables-asistencia',
  templateUrl: './datatables-asistencia.component.html',
  styleUrls: ['./datatables-asistencia.component.css']
})
export class DatatablesAsistenciaComponent implements OnInit {

  asistente:Asistencia;
  asistentes:Array<Asistencia>;


  constructor() {
    this.asistente = new Asistencia();
    this.asistentes= new Array <Asistencia>();
  }

  ngOnInit(): void {
  }

  public registrarAsistentes(){
    console.log("Guardando...")
    this.asistentes.push(this.asistente);
    console.log(this.asistente);
    this.asistente = new Asistencia();

  }
  

}
