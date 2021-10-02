import { Component, OnInit } from '@angular/core';
import { ventas } from './ventas';
import { VENTAS } from './ventas.json';

@Component({
  selector: 'app-equipo-or-usuario',
  templateUrl: './equipo-or-usuario.component.html'
})
export class EquipoOrUsuarioComponent implements OnInit {

  usuarios: ventas[];
 

  EquipoOrUsuario: boolean = true;
  constructor() {  }

    setEquipoOrUsuario(): void{
    this.EquipoOrUsuario = (this.EquipoOrUsuario == true)? false: true;
    }
 
    ngOnInit(){
      this.usuarios = VENTAS;
    }


}
