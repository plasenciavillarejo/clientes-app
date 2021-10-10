import { Injectable } from '@angular/core';

/* 1.- Importamos Clientes del archivos cliente.json.ts */
import { CLIENTES } from './clientes.json';
/* 2.- Importamos la clase cliente para poder utilizarla. */
import{ Cliente } from './cliente';

/* Importamos la clase Api Observable
  En angular 5 se importa -> 'rxjs/Observable'
  En angular 6 se importa -> 'rxjs' */

/* Importamos el método of
 En angular 5 se importa -> import { of } from 'rxjs/observable/of'
 En angular 6 se importa -> import { of, Observable } from 'rxjs'*/
import {of} from 'rxjs';
import {from,Observable} from 'rxjs';


/* 1.- El operador @Injectable indica que es una clase de servicio. Por lo que se puede inyectar
a otro componentes por ejemplo a una clase Component. */
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  /* 1.- Obtenemos un método getClientes() que retornara los clientes.
    2.- Vamos a modirica la clase getClientes() -> Ya que queremos que sea un método asincrono para nuestro
    servidor Api/Rest
    3.- El método Observable es: Tenemos nuestra clase Observada 'Cliente' la cual si en el back-end hay algún
    cambio de cliente será notificado al front-end que esté publicara la clase en tiempo real, sin necesidad de tener
    que refrescar la página. Nuevo cliente, Borra un cliente, Actualizar un cliente... */
  getClientes(): Observable<Cliente[]>{
    /* 3.- Convertimos nuestro listado clientes en un Observable -> Un string, un flujo de datos.
    La idea es que se puede manejar grandes cantidades de datos ya sea un listado, videos, imagenes, etc ..*/
    return of (CLIENTES);
  }

}
