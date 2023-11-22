// array -> arraylist
// let elementos = [];
// elementos.push("opcion1", "opcion2", "opcion3"); // retorna el nuevo size del array
// elementos.unshift("opcion4", "opcion5", "opcion6"); // retorna el nuevo size del array
// console.log(elementos.pop()); // elimina y da el ultimo
// console.log(elementos.shift()); // elimina y da el primero

// import Carta from "./carta";

let palos = ["C", "T", "P", "D"];
let baraja = [];

for (let i = 0; i < palos.length; i++) {
  for (let j = 1; j < 14; j++) {
    // baraja.push(`${j}${palos[i]}`);

    let cartas = new Carta(`${j}${palos[i]}`);
    baraja.push(cartas);
  }
}

// barajar
// random - saco por posicion -

// sacar todos los treboles

baraja = _.shuffle(baraja);

console.log(baraja);

baraja
  .filter((value) => value.includes("T"))
  .forEach((item) => {
    console.log(item);
  });
