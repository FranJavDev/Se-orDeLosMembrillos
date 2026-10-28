import { Rey } from './personajesEspeciales/Rey.js';

// Clase que modela un Reino completo con sus casas nobles y su monarca
export class Reino {
  constructor(nombre) {
    this.nombre = nombre;
    this.casas = [];
    this.rey = null;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get casas() {
    return this._casas;
  }

  set casas(casas) {
    this._casas = casas;
  }

  get rey() {
    return this._rey;
  }

  set rey(rey) {
    if (rey !== null && !(rey instanceof Rey)) {
      throw new TypeError("El rey del reino debe ser un objeto de tipo Rey.");
    }
    this._rey = rey;
  }

  // Agrega una casa noble al reino
  agregarCasa(casa) {
    this.casas.push(casa);
    console.log(`La Casa ${casa.nombre} ha sido añadida al Reino de ${this.nombre}.`);
  }

  // Corona y proclama al rey de Poniente
  proclamarRey(rey) {
    this.rey = rey;
    console.log(`${rey.nombre} ha sido proclamado rey de ${this.nombre}.`);
  }
}

export default Reino;
