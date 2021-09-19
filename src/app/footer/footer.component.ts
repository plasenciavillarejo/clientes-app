import {Component} from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  /* 1.- Registramos la clase de estilos footer.component.css */
  styleUrls: ['./footer.component.css']
})
export class FooterComponent{
  /* 1.- Any: es un tipo genérico, que puede ser de cualquier tipo. */
  public autor: any = {nombre: 'Jose', apellido: 'Plasencia'};
}
