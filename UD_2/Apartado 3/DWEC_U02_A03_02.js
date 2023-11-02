let objeto1 = {
    pA: "valorA",
    pB: "valorB",
    pC: "valorC"
};

// En objetos las variables es asocian por nombre
let {pA, pB, pC} = objeto1;

console.log(pA); // valorA
console.log(pB); // valorB
console.log(pC); // valorC

let resto;
// OJO: en este punto hemos definido 'resto' en la línea anterior
// No podemos poner 'let' en la línea siguiente porque 'pA' ya ha sido definida al principio
// Por tanto, debemos poner la expresión entre paréntesis
({pA, ...resto} = objeto1); // Utilizar el operador rest: 'resto' almacenará un objeto
console.log(pA); // valorA
console.log(resto); // {pB: "valorB", pC: "valorC"}
