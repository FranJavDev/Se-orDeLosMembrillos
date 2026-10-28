// Clase que representa un arma en el universo de Poniente
export class Arma {
  // El tipo tiene un valor por defecto para permitir instanciaciones de 2 argumentos como en fase 3
  constructor(nombre, dano, tipo = "Arma") {
    this.nombre = nombre;
    this.dano = dano;
    this.tipo = tipo;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get dano() {
    return this._dano;
  }

  set dano(dano) {
    this._dano = dano;
  }

  // Getter y setter alternativos con 'ñ' para evitar problemas de compatibilidad
  get daño() {
    return this._dano;
  }

  set daño(daño) {
    this._dano = daño;
  }

  get tipo() {
    return this._tipo;
  }

  set tipo(tipo) {
    this._tipo = tipo;
  }

  // Devuelve la descripción detallada del arma
  descripcion() {
    return `${this.nombre} (${this.tipo}) - daño: ${this.dano}`;
  }
}

export default Arma;
