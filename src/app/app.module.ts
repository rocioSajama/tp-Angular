import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxDataTableModule} from "angular-9-datatable";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { DatatablesAsistenciaComponent } from './components/datatables-asistencia/datatables-asistencia.component';
import { PasajesComponent } from './components/pasajes/pasajes.component';
import { Punto4Component } from './components/punto4/punto4.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Punto1Component,
    DatatablesAsistenciaComponent,
    PasajesComponent,
    Punto4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxDataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
