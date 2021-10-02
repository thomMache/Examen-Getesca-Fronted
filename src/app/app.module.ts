import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.componet';
import { FooterComponent } from './footer/footer/footer.component';
import { EquipoOrUsuarioComponent } from './equipo-or-usuario/equipo-or-usuario.component';
import { EquiposComponent } from './equipos/equipos.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EquipoOrUsuarioComponent,
    EquiposComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
