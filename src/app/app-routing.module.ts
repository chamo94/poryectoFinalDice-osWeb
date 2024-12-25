import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ EditarDatosComponent } from './components/editar-datos/editar-datos.component';
import { IngresarDatosComponent } from './components/ingresar-datos/ingresar-datos.component';
import	{ListarCitaComponent} from './components/listar-cita/listar-cita.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { LaboratorioComponent } from './components/laboratorio/laboratorio.component';
import { BiopsiasComponent } from './components/biopsias/biopsias.component';
import { OpticaComponent } from './components/optica/optica.component';

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'ingresar-datos'},
  {path: 'ingresar-datos', component:IngresarDatosComponent},
  {path: 'editar-datos/:id', component:EditarDatosComponent},
  {path: 'listar-cita', component:ListarCitaComponent},
  {path: 'acercade', component:AcercadeComponent},
   {path:'laboratorio',component:LaboratorioComponent},
   {path:'biopsias', component:BiopsiasComponent},
   {path:'optica', component:OpticaComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
