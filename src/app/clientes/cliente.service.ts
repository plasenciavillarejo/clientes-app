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
import { HttpClient, HttpHeaders } from '@angular/common/http';

/* 1.- El operador @Injectable indica que es una clase de servicio. Por lo que se puede inyectar
a otro componentes por ejemplo a una clase Component. */
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  /* Definimos la URl */
private urlEndPoint:string = 'http://localhost:8081/api/clientes/';

/* creamos atributo con las cabeceras*/
private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});


/* Inyectamos el HttpClient*/
  constructor(private http: HttpClient) {

  }

  /* 1.- Obtenemos un método getClientes() que retornara los clientes.
    2.- Vamos a modirica la clase getClientes() -> Ya que queremos que sea un método asincrono para nuestro
    servidor Api/Rest
    3.- El método Observable es: Tenemos nuestra clase Observada 'Cliente' la cual si en el back-end hay algún
    cambio de cliente será notificado al front-end que esté publicara la clase en tiempo real, sin necesidad de tener
    que refrescar la página. Nuevo cliente, Borra un cliente, Actualizar un cliente... */
//  getClientes(): Observable<Cliente[]>{
    /* 3.- Convertimos nuestro listado clientes en un Observable -> Un string, un flujo de datos.
    La idea es que se puede manejar grandes cantidades de datos ya sea un listado, videos, imagenes, etc ..*/
//    return of (CLIENTES);


    /* Vamos a devolver la lista de cliente que hay configurada en el servidor de spring-boot.
      Añadimos el casteo get<Cliente[], para devolver el tipo json a un Listado de Clientes().
      Otra forma es importando el map de 'rxjs/operatos' */
    getClientes(): Observable<Cliente[]>{
      return this.http.get<Cliente[]>(this.urlEndPoint);
    }

/* Implemenamos el método Crear Cliente. */

create(cliente: Cliente): Observable<Cliente>{
  return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
  }

/*  Vamos a implementar el método editar cliente. */
getCliente(id): Observable<Cliente>{
  return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`);
}

}
