import { Injectable } from '@angular/core';
import { Pasaje } from './../models/pasaje'
import { isNgTemplate } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {

  ventas:Array<Pasaje>;

  constructor() {
    this.ventas=new Array<Pasaje>();

  }

  refrescarVentas(){
    return this.ventas;
  }
  addVenta(venta:Pasaje){
    venta.id=this.getId();
    this.ventas.push(venta);
  }
  deleteVenta(venta:Pasaje){
    var idBorrar= this.ventas.findIndex((item:Pasaje) => item.id == venta.id);
    console.log(idBorrar);
    this.ventas.splice(idBorrar,1);

  }

  updateVenta(venta:Pasaje){
    var borrar = this.ventas.findIndex((item: Pasaje) => item.id == venta.id);
    console.log (borrar);
    this.ventas.splice(borrar ,1, venta);
  }

  getId(){
    var idMax:number;
    idMax=0;
    for(var i = 0 ; i<this.ventas.length ; i++){
      if(idMax < this.ventas[i].id){
        idMax = this.ventas[i].id;
      }
    }
    return idMax+1;
  }

}
