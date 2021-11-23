import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  /*get personajes(): Personaje[] {
    return this.dbzService.personajes;
  }*/

  agregar(event: any) {
    event.preventDefault();
    console.log("Hey!!!");
  }

  /* agregarNuevoPersonaje(personaje: Personaje) {
    // debugger;
    console.log('Main Page Component');
    console.log(personaje);
    this.personajes.push(personaje);
  } */

  /*agregar2() {
    if (this.nuevo.nombre.trim().length === 0) {
      return;
    }

    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }

    console.log(this.personajes);
  }*/

  /* cambiarNombre(event: any) {
    console.log(event.target.value);
  } */

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

}
