
alert("Esto es un ejemplo de cuadro de aviso")
let continuar = confirm("esta seguro de que quiere continuar")
if (continuar) {
    let numero1 = prompt("introduce numero 1")
    let numero2 = prompt("introduce otro numero")
    console.log(`La suma de ${numero1} y ${numero2} es ${Number(numero1) + Number(numero2)}`);
}


console.log(`ejemplo de array y foreach` );


let numeros = [1,2,3,4,5,6,7,8,9,10]

//(param1, param2, param3)=>{cuerpo}
//funcion flecha callback(value, index , element)
numeros.forEach((value,index,element)=>{
    console.log(`Posicion ${index}: ${value} `)
    console.log(element);
})

let numLetra = "3"
let numNumero = 3
numLetra == numNumero //true -> contenido
numLetra === numNumero // false -> contenido y tipo 