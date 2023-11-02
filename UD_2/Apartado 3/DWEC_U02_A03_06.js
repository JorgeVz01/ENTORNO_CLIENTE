// Función constructora. Suele escribirse la primera letra en mayúscula
function Usuario(nombre, apellidos) {
    this.nombre = nombre;
    this.apellidos = apellidos;

    this.saludar = function() {
	console.log(`Hola, soy ${this.nombre} ${this.apellidos}`);
    }

    // 'nombre', 'apellidos' y 'saludar' son propiedades que se definirán
    // en los objetos que se creen a partir de la función constructora

}

// Se construye un objeto nuevo
let usuario1 = new Usuario("David", "Pérez");
usuario1.saludar(); // Hola, soy David Pérez

// Se construye un objeto nuevo
let usuario2 = new Usuario("Jorge", "López");
usuario2.saludar(); // Hola, soy Jorge López


// Se añade una nueva propiedad al prototipo
Usuario.prototype.despedir = function() {
    console.log(`${this.nombre} ${this.apellidos} se despide`);
}

// Los objetos tienen acceso a la nueva propiedad definida en el prototipo
usuario1.despedir(); // David Pérez se despide
usuario2.despedir(); // Jorge López se despide

// Se añade una nueva propiedad al prototipo
Usuario.prototype.direccion = "Desconocida";

console.log(usuario1.direccion); // Desconocida
console.log(usuario2.direccion); // Desconocida

// Se cambia una propiedad en el objeto
// La modificación se realiza en el objeto, no en el prototipo
usuario1.direccion = "Calle Nueva";

// JavaScript accede a la propiedad del objeto, que existe y tiene el valor "Calle Nueva"
console.log(usuario1.direccion); // Calle Nueva

// JavaScript accede a la propiedad del objeto, que no existe;
// A continuación accede al prototipo y la encuentra con valor "Desconocida"
console.log(usuario2.direccion); // Desconocida
