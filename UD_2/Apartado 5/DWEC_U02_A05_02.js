let usuarios = [
    {nombre: "David", apellido: "Pérez", nif: 1},
    {nombre: "Juan", apellido: "Martínez", nif: 2},
    {nombre: "José", apellido: "Fernández", nif: 3}
]

let usuariosMod = usuarios.map(usuario => {
    // Se crea un nuevo objeto vacío
    let nuevoUsuario = {};
    // Se copia el objeto original al nuevo objeto
    Object.assign(nuevoUsuario, usuario);
    // Se modifica el nuevo objeto
    nuevoUsuario.nombreCompleto = `${nuevoUsuario.nombre} ${nuevoUsuario.apellido}`;
    // Se devuelve el objeto nuevo
    return nuevoUsuario;
})

console.log(usuariosMod[0].nombreCompleto); // David Pérez
console.log(usuariosMod[1].nombreCompleto); // Juan Martínez
console.log(usuariosMod[2].nombreCompleto); // José Fernández

// Comprobamos que el array original no se ha modificado
console.log(usuarios[0].nombreCompleto); // undefined
console.log(usuarios[1].nombreCompleto); // undefined
console.log(usuarios[2].nombreCompleto); // undefined

// Comprobamos que se apunta a objetos distintos:
// Cambiamos el valor a través de 'usuariosMod'
usuariosMod[0].nombreCompleto = "aa";
usuariosMod[0].nombre = "Distinto";

// Comprobamos el valor a través de 'usuarios'
console.log(usuarios[0].nombreCompleto); // undefined
console.log(usuarios[0].nombre); // David
