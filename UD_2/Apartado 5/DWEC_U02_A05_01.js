let usuarios = [
    {nombre: "David", apellido: "Pérez", nif: 1},
    {nombre: "Juan", apellido: "Martínez", nif: 2},
    {nombre: "José", apellido: "Fernández", nif: 3}
]

let usuariosMod = usuarios.map(usuario => {
    // Se modifica el objeto original
    usuario.nombreCompleto = `${usuario.nombre} ${usuario.apellido}`;
    // Se devuelve una referencia al mismo objeto original
    return usuario;
})

console.log(usuariosMod[0].nombreCompleto); // David Pérez
console.log(usuariosMod[1].nombreCompleto); // Juan Martínez
console.log(usuariosMod[2].nombreCompleto); // José Fernández

// Comprobamos que el array original apunta a los mismos objetos
console.log(usuarios[0].nombreCompleto); // David Pérez
console.log(usuarios[1].nombreCompleto); // Juan Martínez
console.log(usuarios[2].nombreCompleto); // José Fernández

// Comprobamos que se apunta al mismo objeto:
// Cambiamos el valor a través de 'usuariosMod'
usuariosMod[0].nombreCompleto = "aa";

// Comprobamos el valor a través de 'usuarios'
console.log(usuarios[0].nombreCompleto); // aa
