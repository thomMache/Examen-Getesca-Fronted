import { Component, OnInit } from '@angular/core';
import { Equipo } from './equipo';
import { EquipoService } from './equipo.service';


@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html'
})
export class EquiposComponent implements OnInit {

equipos: Equipo[];

  constructor(private equipoService : EquipoService) { }

  ngOnInit(): void {
   this.equipoService.getEquipos().subscribe(
    equipos => this.equipos = equipos
   );
  }

}
