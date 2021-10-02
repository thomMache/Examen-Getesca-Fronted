import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Equipo } from './equipo';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class EquipoService {

private urlEndpoint: string = 'http://localhost:8080/teams';

  constructor(private http: HttpClient) { }

  getEquipos(): Observable<Equipo[]>{
   return this.http.get(this.urlEndpoint).pipe(
     map( (response) => response as Equipo[])
   );
  }

}
