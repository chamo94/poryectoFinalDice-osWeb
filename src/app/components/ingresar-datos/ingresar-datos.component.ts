import { Component, ENVIRONMENT_INITIALIZER, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { CroudService } from '../../service/croud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ingresar-datos',
  standalone: false,
  
  templateUrl: './ingresar-datos.component.html',
  styleUrl: './ingresar-datos.component.css'
})
export class IngresarDatosComponent implements OnInit{
   formularioDeDatos:FormGroup;

constructor (
  public formulario:FormBuilder,
  private crudService:CroudService,
  private ruteador:Router,
){
  this.formularioDeDatos=this.formulario.group({
    nombre:[''],
    correo:[''],
    numero:[''],
    especialidad:[''],
    horario:[''],

  })
}
  

ngOnInit(): void {}

enviarDatos(): any{
console.log(this,this.formularioDeDatos.value);
this.crudService.agregarDatos(this.formularioDeDatos.value).subscribe();

this.ruteador.navigateByUrl('/listar-cita');
}

}



