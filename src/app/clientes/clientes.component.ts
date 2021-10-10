import { Component, OnInit } from '@angular/core';

/* 1.- Importamos la clase cliente para poder utilizarla. */
import{ Cliente} from './cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  /* 2.- Arreglo Json con los objetos de Cliente. */
  clientes: Cliente[] = [
    {id: 1, nombre: 'Jose', apellido: 'Plasencia', email: 'Plasenci@gmail.com', createAt: '2081-09-12'},
    {id: 2, nombre: 'Andres', apellido: 'Garcia', email: 'Plasenci@gmail.com', createAt: '2011-09-12'},
    {id: 3, nombre: 'Mari Lola', apellido: 'Lopez', email: 'Plasenci@gmail.com', createAt: '2091-09-12'},
    {id: 4, nombre: 'Antonio', apellido: 'Plasencia', email: 'Plasenci@gmail.com', createAt: '2001-09-12'},
    {id: 5, nombre: 'Ani', apellido: 'Villarejo', email: 'Plasenci@gmail.com', createAt: '2011-09-12'},
    {id: 6, nombre: 'Leonor', apellido: 'Balbuena', email: 'Plasenci@gmail.com', createAt: '2019-09-12'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
