import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

/* 1.- Creamos un arreglo de string.
  2.- La idea es iterar sobre este arreglo utlizando la directiva ngFor en
  la vista. */
  listaCurso: string[] = ['TypeScript','JavaScript','Java SE','C#','PHP'];

/* 3.- Tenemos una variables para mostrar u ocultar un listado. */
  habilitar: boolean = true;

  constructor() { }
/* 4.- Metodo que no retorna nada, solo asignar un valor al habilitar.
  5.- Mostrara/Ocultara la lista segun su valor ->
      (click)="habilitar=(habilitar ==true)? false:true;"*/

    setHabilitar(): void {
      this.habilitar = (this.habilitar==true)? false: true;
    }

}
