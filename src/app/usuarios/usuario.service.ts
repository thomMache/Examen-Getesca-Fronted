import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from './usuario';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndpoint: string = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

    getUsuarios(): Observable<Usuario[]>{
      return this.http.get<Usuario[]>(this.urlEndpoint)
    }
   
}
