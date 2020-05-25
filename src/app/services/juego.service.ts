import { Injectable } from '@angular/core';
import { Juego } from '../models/juego';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  animales: Array <Juego>;

  constructor() {
    this.animales = new Array <Juego>();
    this.animales = [
      {
        id:1,
        palabraIngles: "wolf",
        palabraEspanol: "lobo",
        urlImagen:"lobo.jpg"
      },
      {
        id:2,
        palabraIngles: "lion",
        palabraEspanol: "leon",
        urlImagen:"leon.jpg"
      },
      {
        id:3,
        palabraIngles: "fish",
        palabraEspanol: "pez",
        urlImagen:"pez.jpg" 
      },
      {
        id:4,
        palabraIngles: "bull",
        palabraEspanol: "toro",
        urlImagen:"toro.jpg"
      },
      {
        id:5,
        palabraIngles: "goat",
        palabraEspanol: "cabra",
        urlImagen:"cabra.jpg"
      },
      {
        id:6,
        palabraIngles: "crab",
        palabraEspanol: "cangrejo",
        urlImagen:"cangrejo.jpg"
      },
      {
        id:7,
        palabraIngles: "seal",
        palabraEspanol: "foca",
        urlImagen:"foca.jpg"
      },
      {
        id:8,
        palabraIngles: "boar",
        palabraEspanol: "jabali",
        urlImagen:"jabali.jpg"
      },
      {
        id:9,
        palabraIngles: "deer",
        palabraEspanol: "ciervo",
        urlImagen:"bambi.jpg"
      },
      {
        id:10,
        palabraIngles: "bear",
        palabraEspanol: "oso",
        urlImagen:"oso.jpg"
      }

    ]
  }

  getAnimales(){
    return this.animales;
  }

}
