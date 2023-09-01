import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LAB_IV_4B_Ejercicios';

  edadUno: number | undefined;
  edadDos: number | undefined;

  suma: number | undefined;
  promedio: number | undefined;

  promediar(n1: number, n2: number): number {
    return parseFloat(((n1 + n2) / 2).toFixed(2));
  }

  sumar(n1: number, n2: number): number {
    return n1 + n2;
  }

  calcular(): void {
    if (this.edadUno != null || this.edadDos != null) {
      this.promedio = this.promediar(this.edadUno!, this.edadDos!);
      this.suma = this.sumar(this.edadUno!, this.edadDos!);
    }
  }

  limpiar(): void {
    delete this.edadUno;
    delete this.edadDos;
    delete this.promedio;
    delete this.suma;
  }
}
