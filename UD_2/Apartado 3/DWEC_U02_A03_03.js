let objeto1 = {nombre: "David"}; // Se crea un objeto. 'objeto1' apunta a él
let objeto2 = objeto1; // NO SE CREA NINGÚN OBJETO NUEVO. 'objeto2' apunta al mismo objeto que 'objeto1'

let objeto3 = {}; // Se crea un objeto vacío
let objeto4 = {}; // Se crea otro objeto vacío
Object.assign(objeto3, objeto1); // Copia de 'objeto1' a 'objeto3'
Object.assign(objeto4, objeto1, {apellido: "Pérez"}); // Copia de 'objeto1' a 'objeto4' junto con una propiedad adicional

objeto1.nombre = "Juan"; // Cambio en 'objeto1'
objeto4.nombre = "Pablo"; // Cambio en 'objeto4'

console.log( objeto2.nombre ); // Juan ('objeto2' apunta al mismo objeto que 'objeto1')
console.log( objeto3.nombre ); // David ('objeto3' apunta a un objeto distinto)

objeto1 = null; // 'objeto1' ya no apunta al objeto. El objeto sigue existiendo.
objeto2 = null; // 'objeto2' ya no apunta al objeto. El primer objeto se elimina porque ya no está referenciado
