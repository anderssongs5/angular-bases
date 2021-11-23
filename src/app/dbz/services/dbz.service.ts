import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

// Se utiliza para los servicios y son singleton
@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [{
        nombre: 'Goku',
        poder: 15000
    }, {
        nombre: 'Vegeta',
        poder: 11300
    }];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {
        console.log('Servicio DbzService inicializado');
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }
}
