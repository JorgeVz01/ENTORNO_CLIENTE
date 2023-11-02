let array1 = ['a', 'b', 'c'];

array1.push("d"); // array1 = [ 'a', 'b', 'c', 'd' ]
array1.pop(); // array1 = [ 'a', 'b', 'c' ]

array1.shift(); // array1 = [ 'b', 'c' ] (la función devuelve 'a')
array1.unshift("a"); // array1 = [ 'a', 'b', 'c' ]

let array2 = [10, 11, 12, 13, 14];
array2.splice(1, 2); // array2 = [ 10, 13, 14 ] (extrae 2 elementos a partir de la posición 1)

let array3 = [1, 2, 3, 4, 5];
let array4 = array3.slice(1, 4); // Extrae los elementos entre las posiciones 1 y 4 (sin incluir el 4)
// array3 no se modifica
// array4 = [2, 3, 4]

let array5 = [1, 2];
let array6 = [8, 9];
let array7 = array5.concat(array6); // [1, 2, 8, 9]
// array5 y array6 no se modifican

array7.indexOf(8); // 2
array7.includes(1); // true
array7.includes(3); // false
