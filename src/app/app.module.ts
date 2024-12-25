import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresarDatosComponent } from './components/ingresar-datos/ingresar-datos.component';
import { EditarDatosComponent } from './components/editar-datos/editar-datos.component';
import { ListarCitaComponent } from './components/listar-cita/listar-cita.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { LaboratorioComponent } from './components/laboratorio/laboratorio.component';
import { OpticaComponent } from './components/optica/optica.component';

@NgModule({
  declarations: [
    AppComponent,
    IngresarDatosComponent,
    EditarDatosComponent,
    ListarCitaComponent,
    AcercadeComponent,
    LaboratorioComponent,
    OpticaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
