import { Personaje } from '../Personaje.js';

// Especialización de Personaje para los Reyes de Poniente
export class Rey extends Personaje {
  constructor(nombre, edad, vivo, casa, anosDeReinado) {
    super(nombre, edad, vivo, casa);
    this.anosDeReinado = anosDeReinado;
  }

  get anosDeReinado() {
    return this._anosDeReinado;
  }

  set anosDeReinado(anosDeReinado) {
    this._anosDeReinado = anosDeReinado;
  }

  // Comportamiento del rey en batalla
  luchar() {
    console.log(`${this.nombre} lidera la batalla y anima a sus tropas.`);
  }

  // Acción característica de gobierno
  gobernar() {
    console.log(
      `${this.nombre} gobierna con sabiduría desde hace ${this.anosDeReinado} años.`
    );
  }
}

export default Rey;
