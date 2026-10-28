import { Personaje } from '../Personaje.js';

// Especialización de Personaje para los Consejeros de la corte
export class Consejero extends Personaje {
  constructor(nombre, edad, vivo, casa, especialidad) {
    super(nombre, edad, vivo, casa);
    this.especialidad = especialidad;
  }

  get especialidad() {
    return this._especialidad;
  }

  set especialidad(especialidad) {
    this._especialidad = especialidad;
  }

  // Los consejeros no luchan físicamente
  luchar() {
    console.log(`${this.nombre} no lucha con armas, sino con palabras e inteligencia.`);
  }

  // Ofrece consejos basados en su especialidad
  aconsejar(personaje) {
    console.log(`${this.nombre} aconseja a ${personaje.nombre} sobre ${this.especialidad}.`);
  }
}

export default Consejero;
