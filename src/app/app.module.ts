
/* 1.- Es un Repositorio donde se registran todos nuestros componentes. */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
/* 1.- Importamos la clase header.component */
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
/* Importamos el ClienteService*/
import { ClienteService } from './clientes/cliente.service';
@NgModule({
  /* 1.- Se registras nuestras clases @component */
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule
  ],
  /* 1.- Se registran nuestras clases de servicios.
     2.- Llammos a nuestra clase ClienteService */
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
