let array1 = ["valorA", "valorB", "valorC"];

// En arrays las variables se asocian por posición
let [a, b, c] = array1;

console.log(a); // valorA
console.log(b); // valorB
console.log(c); // valorC

// Ignorar un elemento
let [d, , e] = array1;
console.log(d); // valorA
console.log(e); // valorC

// Utilizar el operador rest: 'g' almacenará un array
let [f, ...g] = array1;
console.log(f); // valorA
console.log(g); // ["valorB", "valorC"]
