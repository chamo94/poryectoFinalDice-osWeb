import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { datos } from './datos';
@Injectable({
  providedIn: 'root'
})
export class CroudService {

API: string='http://localhost/datos/'
  constructor(private ClientHttp:HttpClient) { }
  agregarDatos (datosCliente:datos): Observable<any>{
   return this.ClientHttp.post (this.API+"?insetar=1",datosCliente);
  }
  
  
     
  }
  
  
  

