
/* 1.- Es un Repositorio donde se registran todos nuestros componentes. */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* 5.- Agregamos el HTTPClient que es el mecanismo con el cual nos podemos conectar al servidor
backend definido en spring-boot.
   6.- Luego debemos de agregar y registrar este modulo en import */
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

/* 1.- Importamos la clase header.component */
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';

/* Importamos el ClienteService*/
import { ClienteService } from './clientes/cliente.service';

/* 1.- Importamos el Route para mapear las direcciones*/
import { RouterModule, Routes } from '@angular/router';

/* 2.- Creamos una constante que tiene un arreglo con las rutas.
  Definimos todas las rutas URL de nuestra aplicación. */
const routes: Routes =[
  /* path: '' -> Será nuestro Home que nos redirigirá a '/Clientes' */
  {path: '', redirectTo: '/clientes', pathMatch: 'full'},
/*3.- Ejemplo de como mapear una ruta:
  path: 'Nombre_Que_Queramos' , component'Asignamos_Componente'*/
  {path: 'directivas', component: DirectivaComponent},
  {path: 'clientes', component: ClientesComponent},
];


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
    BrowserModule,
    /* 7.- Agregamos el HTTPClientModule*/
    HttpClientModule,
    /* 4.- Debemos pasar el import de Router aquí. */
    RouterModule.forRoot(routes)

  ],
  /* 1.- Se registran nuestras clases de servicios.
     2.- Llammos a nuestra clase ClienteService */
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
