import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
})
export class DirectivaComponent {
  listaCurso: string[] = ['TypeScript', 'JavaScript' , 'Java Se', 'C#']
  habilitar: boolean = true;

  setHabilitar(): void{
    this.habilitar = this.habilitar? false:true;
  }
}
 