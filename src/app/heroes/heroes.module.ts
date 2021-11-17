import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroes.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    // Componentes que hacen parte del modulo
    declarations: [
        HeroeComponent,
        ListadoComponent
    ],
    // Son los componentes que se hacen visibles
    exports: [
        HeroeComponent,
        ListadoComponent
    ],
    // Solo van modulos generalmente y son los que necesito para el funcionamiento de los componentes
    imports: [
        CommonModule // Ofrece las directivas comunes y basicas de Angular
    ]
})
export class HeroesModule { }
