import { Personaje } from '../Personaje.js';

// Especialización de Personaje para los Guerreros
export class Guerrero extends Personaje {
  // Propiedad privada para la vida del guerrero (inicializada a 100 según el enunciado)
  #vida = 100;
  #arma;

  constructor(nombre, edad, vivo, casa, arma) {
    super(nombre, edad, vivo, casa);
    this.#arma = arma;
    this.arma = arma;
    // Si el personaje no está vivo de entrada, su vida es 0
    this.#vida = vivo ? 100 : 0;
  }

  get vida() {
    return this.#vida;
  }

  set vida(vida) {
    this.#vida = vida;
  }

  get arma() {
    return this.#arma;
  }

  set arma(arma) {
    this.#arma = arma;
  }

  // Reduce la vida del guerrero y comprueba si muere
  recibirDaño(puntos) {
    this.#vida -= puntos;
    if (this.#vida <= 0) {
      this.#vida = 0;
      this.morir();
    }
  }

  // Soporte alternativo sin 'ñ'
  recibirDano(puntos) {
    this.recibirDaño(puntos);
  }

  // Ataca al objetivo aplicando una variación de entre el 70% y el 130% sobre el daño base del arma
  atacar(objetivo) {
    const danoBase = this.#arma ? (this.#arma.daño ?? this.#arma.dano) : 10;
    const daño = Math.floor(danoBase * (0.7 + Math.random() * 0.6)); // entre 70% y 130% del daño base
    console.log(`${this.nombre} ataca a ${objetivo.nombre} causando ${daño} puntos de daño.`);
    objetivo.recibirDaño(daño);
  }

  // Método de combate de la fase 2
  luchar() {
    const dano = this.#arma ? (this.#arma.daño ?? this.#arma.dano) : 0;
    const nombreArma = this.#arma ? this.#arma.nombre : "sus puños";
    console.log(
      `${this.nombre} ataca con su ${nombreArma}, causando ${dano} puntos de daño.`
    );
  }

  // Rutina de entrenamiento
  entrenar() {
    console.log(`${this.nombre} se entrena sin descanso para la próxima batalla.`);
  }
}

export default Guerrero;
