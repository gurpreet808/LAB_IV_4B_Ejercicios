import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.scss']
})
export class RegistrarUsuarioComponent {
  usuario: Usuario = new Usuario("", "");
  clave2: string = "";
  error: string = "";
  block_ui: boolean = false;

  constructor(private router: Router) {
    Usuario.TraerDatosLocalStorage();
  }

  registrar() {
    this.block_ui = true;
    this.error = "";
    //console.log("registrar form", this.usuario);

    try {
      if (this.usuario.nombre == "" || this.usuario.clave == "" || this.clave2 == "") {
        throw new Error("Debe completar el usuario y las claves");
      }

      if (this.usuario.clave != this.clave2) {
        throw new Error("Las claves no coinciden");
      }

      Usuario.CrearUsuario(this.usuario);

      this.error = "Usuario creado correctamente";
    } catch (error: any) {
      console.log(error.message);
      this.error = error.message;
      this.block_ui = false;
    }
  }
}
