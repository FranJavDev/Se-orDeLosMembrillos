const Arma = require("./classes/Arma");
const Casa = require("./classes/Casa");
const Personaje = require("./classes/Personaje");
const Reino = require("./classes/Reino");
const Guerrero = require("./classes/personajesEspeciales/Guerrero");
const Consejero = require("./classes/personajesEspeciales/Consejero");
const Rey = require("./classes/personajesEspeciales/Rey");

if (require.main === module) {
  const poniente = new Reino("Poniente");
  const stark = new Casa("Stark", "Se acerca el invierno");
  const lannister = new Casa("Lannister", "Oye mi rugido");

  const garra = new Arma("Garra", 25, "espada");

  const jon = new Guerrero("Jon Snow", 25, true, stark, garra);
  const tyrion = new Consejero(
    "Tyrion Lannister",
    39,
    true,
    lannister,
    "la estrategia"
  );
  const robert = new Rey("Robert Baratheon", 38, true, lannister, 15);

  poniente.agregarCasa(stark);
  poniente.agregarCasa(lannister);
  stark.agregarMiembro(jon);
  lannister.agregarMiembro(tyrion);
  lannister.agregarMiembro(robert);
  poniente.proclamarRey(robert);

  jon.presentarse();
  jon.luchar();
  jon.entrenar();

  tyrion.presentarse();
  tyrion.luchar();
  tyrion.aconsejar(robert);

  robert.presentarse();
  robert.gobernar();
  robert.luchar();
}

module.exports = {
  Arma,
  Casa,
  Personaje,
  Reino,
  Guerrero,
  Consejero,
  Rey,
};
