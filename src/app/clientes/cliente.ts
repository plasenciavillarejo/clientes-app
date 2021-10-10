export class Cliente {

  /* 1.- Cuando nos da un error -> Property 'id' has no initializer and is not definitely assigned in the constructor.
  Debemos acceder al fichero tsconfig.json y cambiar la configuración que indique "strict":true a false. */
  id: number;
  nombre: string;
  apellido: string;
  createAt: string;
  email: string;
}
