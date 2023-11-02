// Esta función tiene dos parámetros y además hace referencia a 'this'
function saludar(mensajeInicio, mensajeFinal) {
    return mensajeInicio + this.nombre + mensajeFinal;
}

// Objeto sobre el que realizar pruebas
let usuario1 = {nombre: "David"};

// Ejecución de la función sin pasar referencia a ningún objeto.
saludar("Hola ", ", ¿qué tal estás?"); // Hola undefined, ¿qué tal estás?

// Ejecución de la función mediante 'call': los parámetros se pasan como lista
saludar.call(usuario1, "Hola ", ", ¿qué tal estás?"); // Hola David, ¿qué tal estás?

// Ejecución de la función mediante 'apply': los parámetros se pasan en un array
saludar.apply(usuario1, ["Hola ", ", ¿qué tal estás?"]); // Hola David, ¿qué tal estás?

// Enlace explícito de la función al objeto 'usuario1'
let saludaADavid = saludar.bind(usuario1);
// La ejecución de la función se realiza sin pasar referencia. Sin embargo,
// ésta ya estaba pasada mediante 'bind'.
saludaADavid("Hola ", ", ¿qué tal estás?");  // Hola David, ¿qué tal estás?
