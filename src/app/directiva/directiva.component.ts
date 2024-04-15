import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {
  listaCurso: string[] = ['TyperScript', 'JavaScript', 'Java SE', 'SQL'];

  habilitar: boolean = true;
  estadoBoton: String = 'Ocultar';

  setHabilitar(): void {
    this.habilitar = this.habilitar == true ? false : true;
    if (this.habilitar) {
      this.estadoBoton = 'Ocultar';
    } else {
      this.estadoBoton = 'Mostrar';
    }
  }


}
