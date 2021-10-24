import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

/* creamos el cliente. */
  public cliente: Cliente = new Cliente();
  public titulo:string = "Crear Cliente"

/* Inyectamos la clase cliente.service.ts */
  constructor(private clienteService: ClienteService,
  private router: Router) { }

  ngOnInit() {
  }

  /* Creamos el método create() que se conecta con nuestra Api rest del back-end*/
  public create(): void{
    this.clienteService.create(this.cliente).subscribe(
      response => this.router.navigate(['/clientes'])
    )
  }

}
