export class Asistencia {
    usuario:string;
    nombreOrganizacion:string;
    requiereConstancia:boolean;

    Asistencia(usuario?:string, nombreOrganizacion?:string, requiereConstancia?:boolean){
        this.usuario = usuario;
        this.nombreOrganizacion = nombreOrganizacion;
        this.requiereConstancia = requiereConstancia;
    }
}
