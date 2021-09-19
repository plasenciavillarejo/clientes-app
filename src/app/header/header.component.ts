/* 1.- Creamos la sintaxis de la clase
   2.- Con export nos permite poder exportar está clase para que se pueda utilizar, registar
   o guardar en el app-module. (contenedor de angular) */
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
/* 1.- Lllamos a nuestra cabecera header.component.html que contiene el navbar. */
  templateUrl: './header.component.html'
})
export class HeaderComponent{
  title: string = 'App Angular';
}
