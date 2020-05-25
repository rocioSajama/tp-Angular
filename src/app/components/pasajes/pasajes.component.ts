import { Component, OnInit } from '@angular/core';
import { Pasaje } from './../../models/pasaje';
import { PasajeService } from './../../services/pasaje.service'

@Component({
  selector: 'app-pasajes',
  templateUrl: './pasajes.component.html',
  styleUrls: ['./pasajes.component.css']
})
export class PasajesComponent implements OnInit {

  venta:Pasaje;
  ventas:Array<Pasaje>;
  precioTotal:number;
  show:boolean = false;


  constructor(private ventaService: PasajeService) {
    this.venta = new Pasaje();
    this.ventas = new Array<Pasaje>();
    this.refrescarVentas();
  }

  ngOnInit(): void {
  }
  
  refrescarVentas(){
    this.ventas = this.ventaService.refrescarVentas();
  }

  public addVenta() {
    this.venta.fechaCompra = new Date();
    this.ventaService.addVenta(this.venta);
    this.venta = new Pasaje();
    this.precioTotal = 0;
    this.show=false;
  }

  public calcularDescuento(){
    if(this.venta.categoriaPasajero == 'm'){
      this.precioTotal=(this.venta.precio * 25)/100;
      this.show=true;
    }
    if(this.venta.categoriaPasajero == 'j'){
      this.precioTotal=(this.venta.precio*50)/100;
      this.show=true;
    }
    if(this.venta.categoriaPasajero == 'a'){
      this.precioTotal=(this.venta.precio);
      this.show = true;
    }
  }

  elegirVenta(vent:Pasaje){
    this.venta=vent;
  }

  borrarVenta(venta:Pasaje){
    this.ventaService.deleteVenta(venta);
    this.refrescarVentas();
    console.log(this.ventas);
  }

  modificarVenta(){
    this.ventaService.updateVenta(this.venta);
    this.calcularDescuento();
    this.venta = new Pasaje();
    this.refrescarVentas();
  }

  limpiar(){
    this.venta= new Pasaje();
  }
}
