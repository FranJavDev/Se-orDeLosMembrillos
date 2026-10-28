// Clase base para modelar a cualquier personaje del universo de Juego de Tronos
export class Personaje {
  constructor(nombre, edad, vivo = true, casa = null) {
    this.nombre = nombre;
    this.edad = edad;
    this.vivo = vivo;
    this.casa = casa;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get edad() {
    return this._edad;
  }

  set edad(edad) {
    this._edad = edad;
  }

  get vivo() {
    return this._vivo;
  }

  set vivo(vivo) {
    this._vivo = vivo;
  }

  get casa() {
    return this._casa;
  }

  set casa(casa) {
    this._casa = casa;
  }

  // Método de combate general
  luchar() {
    console.log(`${this.nombre} lucha en el campo de batalla.`);
  }

  // Presentación pública indicando la casa noble a la que pertenece
  presentarse() {
    const nombreCasa = this.casa ? this.casa.nombre : "desconocida";
    console.log(`Soy ${this.nombre} de la Casa ${nombreCasa}.`);
  }

  // Cambia el estado de vida a muerto e informa por consola
  morir() {
    this.vivo = false;
    console.log(`${this.nombre} ha muerto.`);
  }
}

export default Personaje;
