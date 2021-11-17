import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Heroe 1', 'Heroe 2', 'Heroe 3', 'Heroe 4', 'Heroe 5'];
  heroeBorrado: string = '';

  borrarHeroe(): void {
    console.log('Borrando Heroe');
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado);
  }
}
