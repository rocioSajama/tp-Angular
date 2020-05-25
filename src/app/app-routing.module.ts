import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { DatatablesAsistenciaComponent } from './components/datatables-asistencia/datatables-asistencia.component';
import { PasajesComponent } from './components/pasajes/pasajes.component';
import { Punto4Component } from './components/punto4/punto4.component'

const routes: Routes = [
  { path: 'punto1', component: Punto1Component },
  { path: 'datatable', component: DatatablesAsistenciaComponent},
  { path: 'pasaje' , component: PasajesComponent },
  { path:'punto4' , component: Punto4Component },
  { path:'**' , pathMatch:'full' , redirectTo:'punto1' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
