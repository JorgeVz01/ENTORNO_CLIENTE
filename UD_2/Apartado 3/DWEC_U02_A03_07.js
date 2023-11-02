// Objeto normal que será utilizado como prototipo
let Usuario = {
    nombre: "",
    apellido: ""
}

// Función para inicializar los datos
Usuario.setDatos = function(nombre, apellidos) {
    this.nombre = nombre;
    this.apellidos = apellidos;
}

Usuario.saludar = function() {
    console.log(`Hola, soy ${this.nombre} ${this.apellidos}`);
}

// Se construyen objetos basados en el prototipo
let usuario1 = Object.create(Usuario);
let usuario2 = Object.create(Usuario);

// Se inicializan los objetos
usuario1.setDatos("David", "Pérez");
usuario2.setDatos("Jorge", "López");

// Función 'saludar'
usuario1.saludar(); // Hola, soy David Pérez
usuario2.saludar(); // Hola, soy Jorge López

// Se añade una nueva propiedad al prototipo
Usuario.despedir = function() {
    console.log(`${this.nombre} ${this.apellidos} se despide`);
}

// Los objetos tienen acceso a la nueva propiedad definida en el prototipo
usuario1.despedir(); // David Pérez se despide
usuario2.despedir(); // Jorge López se despide

// Se añade una nueva propiedad al prototipo
Usuario.direccion = "Desconocida";

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
