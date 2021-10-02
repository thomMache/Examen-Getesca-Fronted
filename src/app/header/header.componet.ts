import { Component } from "@angular/core";
import { Equipo } from "../equipos/equipo";
import { Usuario } from "../usuarios/usuario";

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class  HeaderComponent{
   
    equipos: Equipo[] = [
        {id:1,name:'Team_1'},
        {id:2,name:'Team_2'}
      ];

      usuarios: Usuario[] = [
        {id:1,name:'User 1',teamId:'1'},
        {id:2,name:'User 2',teamId:'2'},
        {id:1,name:'User 3',teamId:'2'},
        {id:2,name:'User 4',teamId:'2'}
      
      ];

    title:string = 'Examen-Getesca'
}