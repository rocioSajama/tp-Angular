export class Pasaje {
    id:number;
    dnipasajero:string;
    precio:number;
    categoriaPasajero:string;
    fechaCompra:Date;
    
    
    pasaje(id?:number, dnipasajero?:string,precio?:number,categoriaPasajero?:string,fechaCompra?:Date){
    this.id = id;
    this.dnipasajero=dnipasajero;
    this.precio=precio;
    this.categoriaPasajero=categoriaPasajero;
    this.fechaCompra=fechaCompra;
    }
}