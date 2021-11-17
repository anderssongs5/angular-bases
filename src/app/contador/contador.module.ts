import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    // Componentes que hacen parte del modulo
    declarations: [
        ContadorComponent
    ],
    // Son los componentes que se hacen visibles
    exports: [
        ContadorComponent
    ]
})
export class ContadorModule { }
