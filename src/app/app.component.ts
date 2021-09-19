import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/* AppComponent se puede comparar como un Controlador de Spring.
La etiquetas que se definen dentro se mostraran dentro del -> selector: 'app-root' */
export class AppComponent {
  title = 'Bienvenido a Angular';

  curso: string = 'Curso Spring 5 con Angular 7';
  alumno: string = 'José Plasencia Villarejo';
}
