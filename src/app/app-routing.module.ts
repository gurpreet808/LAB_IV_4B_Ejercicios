import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { LoginComponent } from './componentes/login/login.component';
import { ErrorComponent } from './componentes/error/error.component';
import { EjerciciosClase01Component } from './componentes/ejercicios-clase01/ejercicios-clase01.component';
import { RegistrarUsuarioComponent } from './componentes/registrar-usuario/registrar-usuario.component';

const routes: Routes = [
  { path: "", redirectTo: "/bienvenido", pathMatch: "full" },
  { path: "bienvenido", component: BienvenidoComponent },
  { path: "login", component: LoginComponent },
  { path: "registrar-usuario", component: RegistrarUsuarioComponent },
  { path: "clase-01", component: EjerciciosClase01Component },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
