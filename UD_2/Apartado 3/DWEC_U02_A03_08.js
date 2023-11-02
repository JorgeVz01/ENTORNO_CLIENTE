class Usuario {
    constructor(nombre, apellidos) {
	this.nombre = nombre;
	this.apellidos = apellidos;
    }

    // 'saludar' está definido en 'Usuario.prototype'
    saludar() {
	console.log(`Me llamo ${this.nombre} ${this.apellidos}`);
    }
}

// Se crea un objeto, 'UsuarioEspecial.prototype', cuyo prototipo es 'Usuario'
class UsuarioEspecial extends Usuario {

    // 'cantar' está definido en 'UsuarioEspecial.prototype'
    cantar() {
	console.log("Yo también sé cantar");
    }
}

// Se crea un objeto cuyo prototipo es 'UsuarioEspecial'
let usuario = new UsuarioEspecial("David", "Pérez");

// JavaScript busca 'saludar' en el objeto ('usuario') y no lo encuentra
// A continuación busca en su prototipo, 'UsuarioEspecial' y tampoco lo encuentra
// Por último busca en el prototipo de 'UsuarioEspecial', que es 'Usuario' y finalmente lo encuentra
// 'saludar' está definido en 'Usuario.prototype'
// La ruta de búsqueda es: usuario -> UsuarioEspecial -> Usuario
usuario.saludar(); // Me llamo David Pérez

// JavaScript busca 'saludar' en el objeto ('usuario') y no lo encuentra
// A continuación busca en su prototipo, 'UsuarioEspecial', donde lo encuentra 
// 'cantar' está definido en 'UsuarioEspecial.prototype'
// La ruta de búsqueda es: usuario -> UsuarioEspecial
usuario.cantar(); // También sé cantar
