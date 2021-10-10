import { Component, OnInit } from '@angular/core';

/* 1.- Importamos la clase cliente para poder utilizarla. */
import{ Cliente } from './cliente';

/* Importamos la clase ClienteService*/
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

/* 1.- Usamos la Inyección de dependencias para llamar al ClienteService */
  constructor(private clienteService: ClienteService) { }

/* 1.- Este evento se realizar cuando se inicia el componente por lo que quedaría perfecto asignar
los clientes aquí. */
  ngOnInit(): void {
    this.clientes = this.clienteService.getClientes();
  }

}
