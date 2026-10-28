// Clase que representa una Casa noble y gestiona sus miembros
export class Casa {
  constructor(nombre, lema) {
    this.nombre = nombre;
    this.lema = lema;
    this.miembros = [];
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get lema() {
    return this._lema;
  }

  set lema(lema) {
    this._lema = lema;
  }

  get miembros() {
    return this._miembros;
  }

  set miembros(miembros) {
    this._miembros = miembros;
  }

  // Agrega un personaje a la casa y le asigna la referencia de la misma
  agregarMiembro(personaje) {
    this.miembros.push(personaje);
    personaje.casa = this;
    console.log(`${personaje.nombre} ha sido añadido a la Casa ${this.nombre}.`);
  }

  // Muestra la lista de personajes que integran la casa noble
  mostrarMiembros() {
    console.log(`Miembros de la Casa ${this.nombre}:`);
    this.miembros.forEach((miembro) => console.log(`- ${miembro.nombre}`));
    return this.miembros;
  }
}

export default Casa;
