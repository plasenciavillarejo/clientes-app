import { Injectable } from '@angular/core';

/* 1.- Importamos Clientes del archivos cliente.json.ts */
import { CLIENTES } from './clientes.json';
/* 2.- Importamos la clase cliente para poder utilizarla. */
import{ Cliente } from './cliente';

/* 1.- El operador @Injectable indica que es una clase de servicio. Por lo que se puede inyectar
a otro componentes por ejemplo a una clase Component. */
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  /* 1.- Obtenemos un método getClientes() que retornara los clientes.  */
  getClientes(): Cliente[]{
    return CLIENTES;
  }

}
