import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

/* Para obtener el Id que le pasamos al cliente para editarlo tenemos que importar la clase ActivatedRouter*/
import { Router,ActivatedRoute } from '@angular/router'

/* Importamos librería para las alertas*/
import swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

/* creamos el cliente. */
  public cliente: Cliente = new Cliente();
  public titulo:string = "Crear Cliente"

/* Inyectamos la clase cliente.service.ts
   Inyectamos la clase Router y ActivatedRoutes*/s
  constructor(private clienteService: ClienteService,
  private router: Router,
  private activatedRoute: ActivatedRoute) {
  }

/* cuando se inicializa el componente, debemo de llamar al cargarCliente()*/
  ngOnInit() {
    this.cargarCliente()
  }

  /* Creamos el método create() que se conecta con nuestra Api rest del back-end*/
  public create(): void{
    this.clienteService.create(this.cliente)
      .subscribe(cliente =>{
        this.router.navigate(['/clientes'])
        swal('Nuevo Cliente',`El cliente ${cliente.nombre} se ha creado con éxito`,'success');
      }
    )
  }

/* Creamos el cargarcliente. */
cargarCliente(): void {
/* Vamos a sobrescribir un observador cuando este observando por parámetro. */
  this.activatedRoute.params.subscribe(params => {
    let id = params['id']
    /* Si existe el id, vamos a buscarlo por su Id.*/
    if(id){
      this.clienteService.getCliente(id).subscribe(
        (cliente) => this.cliente = cliente)
    }
  })
}



}
