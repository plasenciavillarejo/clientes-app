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


  constructor() { }

}
