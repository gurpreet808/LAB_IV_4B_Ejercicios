import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { EjerciciosClase01Component } from './componentes/ejercicios-clase01/ejercicios-clase01.component';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent,
    EjerciciosClase01Component,
    NavBarComponent,
    RegistrarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
