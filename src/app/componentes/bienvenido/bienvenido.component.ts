import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.scss']
})
export class BienvenidoComponent {
  nom_usuario: string = '';

  constructor(private router: Router) {
    Usuario.TraerDatosLocalStorage();

    if (Usuario.usuarioLogueado != null) {
      this.nom_usuario = ' ' + Usuario.usuarioLogueado.nombre;
    } else {
      this.router.navigateByUrl('/login');
    }
  }

  desloguear() {
    Usuario.usuarioLogueado = null;
    localStorage.setItem("usuarioLogueado", JSON.stringify(Usuario.usuarioLogueado));
    this.router.navigateByUrl('/login');
  }
}
