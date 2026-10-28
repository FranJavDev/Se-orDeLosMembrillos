// Esta clase sirve para guardar los datos de un arma.
class Arma {
  // Al crear el arma le pasamos su nombre, el daño y el tipo.
  constructor(nombre, dano, tipo) {
    this.nombre = nombre;
    this.dano = dano;
    this.tipo = tipo;
  }

  // Este método junta los datos del arma en un texto.
  descripcion() {
    return `${this.nombre} (${this.tipo}) - daño: ${this.dano}`;
  }
}

// Aquí guardamos la información de cada personaje.
class Personaje {
  // El arma empieza vacía porque todavía no le hemos dado ninguna.
  constructor(nombre, edad, vivo, casa) {
    this.nombre = nombre;
    this.edad = edad;
    this.vivo = vivo;
    this.casa = casa;
    this.arma = null;
  }

  // Con este método le damos un arma al personaje.
  equiparArma(arma) {
    this.arma = arma;
    console.log(`${this.nombre} ha equipado el arma ${arma.nombre}.`);
  }

  // Si se llama a este método, el personaje pasa a estar muerto.
  morir() {
    this.vivo = false;
  }

  // El personaje dice quién es y de qué casa viene.
  presentarse() {
    const presentacion = `Soy ${this.nombre} de la Casa ${this.casa.nombre}.`;
    console.log(presentacion);
    return presentacion;
  }
}

// En esta clase se guarda una casa y las personas que pertenecen a ella.
class Casa {
  // Al principio la casa no tiene miembros.
  constructor(nombre, lema) {
    this.nombre = nombre;
    this.lema = lema;
    this.miembros = [];
  }

  // Añadimos el personaje y también actualizamos su casa.
  agregarMiembro(personaje) {
    this.miembros.push(personaje);
    personaje.casa = this;
    console.log(`${personaje.nombre} ha sido añadido a la Casa ${this.nombre}.`);
  }

  // Recorremos el array para enseñar los miembros que hay.
  mostrarMiembros() {
    console.log(`Miembros de la Casa ${this.nombre}:`);
    this.miembros.forEach((miembro) => console.log(`- ${miembro.nombre}`));
    return this.miembros;
  }
}

// Esta clase representa el reino y las casas que hay dentro.
class Reino {
  // Todavía no ponemos rey porque se elige más adelante.
  constructor(nombre) {
    this.nombre = nombre;
    this.casas = [];
    this.rey = null;
  }

  // Guardamos la casa en el array de casas del reino.
  agregarCasa(casa) {
    this.casas.push(casa);
    console.log(`La Casa ${casa.nombre} ha sido añadida al Reino de ${this.nombre}.`);
  }

  // Enseñamos todas las casas que se han añadido.
  listarCasas() {
    console.log(`Casas del Reino de ${this.nombre}:`);
    this.casas.forEach((casa) => console.log(`- ${casa.nombre}`));
    return this.casas;
  }

  // Aquí elegimos quién será el rey.
  proclamarRey(personaje) {
    this.rey = personaje;
    console.log(`${personaje.nombre} ha sido proclamado rey de ${this.nombre}.`);
  }

  // Mostramos los datos del rey que tiene el reino ahora mismo.
  mostrarRey() {
    if (!this.rey) {
      console.log("No hay rey actualmente.");
      return null;
    }

    const informacion = `El rey actual es ${this.rey.nombre} de la Casa ${this.rey.casa.nombre}.`;
    console.log(informacion);
    return informacion;
  }
}

// Este bloque es para probar que todo funciona al ejecutar el archivo.
if (require.main === module) {
  // Primero creamos el reino, las casas y las armas.
  const poniente = new Reino("Poniente");
  const stark = new Casa("Stark", "Se acerca el invierno");
  const lannister = new Casa("Lannister", "Oye mi rugido");

  const aguja = new Arma("Aguja", 15, "espada");
  const garra = new Arma("Garra", 25, "espada");

  // Ahora creamos a los personajes y les damos una casa.
  const jon = new Personaje("Jon Snow", 25, true, stark);
  const arya = new Personaje("Arya Stark", 18, true, stark);
  const jaime = new Personaje("Jaime Lannister", 35, true, lannister);

  // Metemos las dos casas dentro del reino.
  poniente.agregarCasa(stark);
  poniente.agregarCasa(lannister);

  // Cada uno se equipa con su arma.
  jon.equiparArma(garra);
  arya.equiparArma(aguja);

  // Añadimos los personajes a sus casas.
  stark.agregarMiembro(jon);
  stark.agregarMiembro(arya);
  lannister.agregarMiembro(jaime);

  // Jaime será el rey en este ejemplo.
  poniente.proclamarRey(jaime);

  // A partir de aquí enseñamos los resultados por consola.
  poniente.listarCasas();
  console.log("Rey actual:");
  poniente.mostrarRey();

  console.log("Miembros de la Casa Stark:");
  stark.mostrarMiembros();

  console.log("Presentaciones:");
  jon.presentarse();
  arya.presentarse();
  jaime.presentarse();

  console.log("Armas:");
  console.log(garra.descripcion());
  console.log(aguja.descripcion());
}

module.exports = { Arma, Personaje, Casa, Reino };