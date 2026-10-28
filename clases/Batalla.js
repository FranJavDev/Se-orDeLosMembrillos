import { Guerrero } from './personajesEspeciales/Guerrero.js';

// Clase que gestiona y simula una batalla completa entre dos casas nobles
export class Batalla {
  #enCurso = false;
  #muertos = [];
  #supervivientes = [];
  #casaA = null;
  #casaB = null;
  #ganador = null;

  constructor() {
    this.#enCurso = false;
    this.#muertos = [];
    this.#supervivientes = [];
    this.#casaA = null;
    this.#casaB = null;
    this.#ganador = null;
  }

  get enCurso() {
    return this.#enCurso;
  }

  get muertos() {
    return this.#muertos;
  }

  get supervivientes() {
    return this.#supervivientes;
  }

  get ganador() {
    return this.#ganador;
  }

  // Prepara los ejércitos, valida las condiciones y ejecuta los combates 1 contra 1
  iniciarBatalla(casaA, casaB) {
    // 6. Evitar que se inicie una nueva batalla si la batalla actual ya está en curso
    if (this.#enCurso) {
      console.log("No se puede iniciar la batalla: ya hay una batalla en curso.");
      return;
    }

    // 5. Impedir que una casa se enfrente a sí misma
    if (!casaA || !casaB || casaA === casaB) {
      console.log("Una casa no puede enfrentarse a sí misma.");
      return;
    }

    // 1. Obtener los personajes pertenecientes a cada casa
    // 2. Seleccionar únicamente los personajes que sean guerreros
    // 3. Excluir del combate a los personajes que no sean guerreros
    // 4. Comprobar que ambas casas disponen de al menos un guerrero vivo
    const ejercitoA = (casaA.miembros || []).filter(
      (personaje) => personaje instanceof Guerrero && personaje.vivo && personaje.vida > 0
    );

    const ejercitoB = (casaB.miembros || []).filter(
      (personaje) => personaje instanceof Guerrero && personaje.vivo && personaje.vida > 0
    );

    if (ejercitoA.length === 0 || ejercitoB.length === 0) {
      console.log("Ambas casas deben disponer de al menos un guerrero vivo para comenzar la batalla.");
      return;
    }

    this.#enCurso = true;
    this.#casaA = casaA;
    this.#casaB = casaB;
    this.#muertos = [];
    this.#supervivientes = [];
    this.#ganador = null;

    console.log("Iniciamos la lucha...");
    console.log(`Los guerreros que pelearán de la casa ${casaA.nombre} serán los siguientes:`);
    console.log(ejercitoA);
    console.log(`Los guerreros que pelearán de la casa ${casaB.nombre} serán los siguientes:`);
    console.log(ejercitoB);

    let indexA = 0;
    let indexB = 0;

    // Bucle de enfrentamientos mientras ambos bandos tengan guerreros en pie
    while (indexA < ejercitoA.length && indexB < ejercitoB.length) {
      const guerreroA = ejercitoA[indexA];
      const guerreroB = ejercitoB[indexB];

      console.log("");
      console.log(`Nuevo enfrentamiento: ${guerreroA.nombre} vs ${guerreroB.nombre}`);

      // El guerrero de la casa A inicia el ataque
      guerreroA.atacar(guerreroB);

      // Si el guerrero de la casa B sigue vivo tras el impacto, contraataca
      if (guerreroB.vivo && guerreroB.vida > 0) {
        guerreroB.atacar(guerreroA);
      }

      // Mostramos los puntos de vida de ambos tras el cruce de golpes
      console.log(`${guerreroA.nombre}: ${guerreroA.vida} | ${guerreroB.nombre}: ${guerreroB.vida}`);

      // Si el guerrero de la casa A muere, se almacena en las bajas y avanza el turno al siguiente
      if (!guerreroA.vivo || guerreroA.vida === 0) {
        this.#muertos.push(guerreroA);
        indexA++;
      }

      // Si el guerrero de la casa B muere, se almacena en las bajas y avanza el turno al siguiente
      if (!guerreroB.vivo || guerreroB.vida === 0) {
        this.#muertos.push(guerreroB);
        indexB++;
      }
    }

    this.#enCurso = false;

    // Determinamos la casa ganadora y almacenamos los supervivientes
    if (indexA < ejercitoA.length) {
      this.#ganador = casaA;
      this.#supervivientes = ejercitoA.slice(indexA);
      console.log(`La batalla ha sido ganada por la Casa ${casaA.nombre}`);
    } else if (indexB < ejercitoB.length) {
      this.#ganador = casaB;
      this.#supervivientes = ejercitoB.slice(indexB);
      console.log(`La batalla ha sido ganada por la Casa ${casaB.nombre}`);
    } else {
      this.#ganador = null;
      this.#supervivientes = [];
      console.log("La batalla ha terminado en empate.");
    }
  }

  // Muestra por consola y retorna el listado de guerreros caídos en combate
  mostrarGuerrerosMuertosEnCombate() {
    console.log(this.#muertos);
    return this.#muertos;
  }

  // Alias compatible con la llamada de fase3.js proporcionada por el profesor
  mostrarGuerrerosMuertosEnBatalla() {
    return this.mostrarGuerrerosMuertosEnCombate();
  }

  // Muestra por consola y retorna el listado de guerreros supervivientes
  mostrarSupervivientes() {
    console.log(this.#supervivientes);
    return this.#supervivientes;
  }
}

export default Batalla;
