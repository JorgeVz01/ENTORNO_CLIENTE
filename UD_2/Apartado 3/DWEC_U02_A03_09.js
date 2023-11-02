class Usuario {
    constructor(nombre, apellidos) {
	this.nombre = nombre;
	this.apellidos = apellidos;
    }

    saludar() {
	console.log(`Me llamo ${this.nombre} ${this.apellidos}`);
    }
}

// Se crea un objeto, 'UsuarioEspecial.prototype', cuyo prototipo es 'Usuario'
class UsuarioEspecial extends Usuario {
    // Se define un nuevo constructor con distintos parámetros
    constructor(nombre, apellidos, edad) {
	// Se llama al constructor del prototipo
	// ES OBLIGATORIO hacerlo antes de poder utilizar 'this'
	// El constructor del prototipo define las propiedades 'nombre' y 'apellidos'
	super(nombre,apellidos)

	// Se crea la propiedad 'edad'
	this.edad = edad;
    }

    // Se sobreescribe el método 'saludar' para incluir funcionalidad adicional
    saludar() {
	// Se llama a la función 'saludar' del prototipo
	super.saludar();

	// Se añade la funcionalidad adicional
	console.log(`Y tengo ${this.edad} años`);
    }
}

// Se crea un objeto cuyo prototipo es 'UsuarioEspecial' utilizando el nuevo constructor
let usuario = new UsuarioEspecial("David", "Pérez", 35);

// JavaScript busca 'saludar' en el objeto ('usuario') y no lo encuentra
// A continuación busca en su prototipo, 'UsuarioEspecial', donde lo encuentra
// 'saludar' llama a la función 'saludar' de 'Usuario' mediante 'super'
// 'saludar' ejecuta la segunda sentencia 'console.log'
usuario.saludar(); // Me llamo David Pérez
		   // Y tengo 35 años
