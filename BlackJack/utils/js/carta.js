class Carta {
  imagen;
  valor;
  representacion;

  constructor(representacion) {
    this.representacion = representacion;
    this.valor = this.getValor();
    this.imagen = "./utils/images/" + `${representacion}.png`;
  }

  get getRepresentacion() {
    return this.representacion;
  }

  getValor() {
    // parte la representacion y quédate con los números y/o modifica los J K Q
    let valorStr = this.representacion.slice(0, -1); // Elimina el último carácter (palo)

    // Modifica J, Q, K a sus respectivos valores
    switch (valorStr) {
      case "J":
        return 11;
      case "Q":
        return 11;
      case "K":
        return 11;
      default:
        // Si no es J, Q, K, convierte el string a número
        return parseInt(valorStr, 10); //si pongo 11 la carta 10 tendra ese valor tambien, (error)
    }
  }

  set setValor(valor) {
    this.valor = valor;
  }

  getImagen() {
    return this.imagen;
  }

  mostrarDatos() {
    console.log(`Representacion: ${this.representacion}, Valor: ${this.valor}`);
  }
}

let palos = ["C", "T", "P", "D"];
let baraja = [];
//Guardar del 1 al 10
for (let i = 0; i < palos.length; i++) {
  for (let j = 1; j < 11; j++) {
    let cartas = new Carta(`${j}${palos[i]}`);
    baraja.push(cartas);
  }
}
//Guardar las J,Q,K.
for (let i = 0; i < palos.length; i++) {
  for (let j of ["J", "Q", "K"]) {
    let cartas = new Carta(`${j}${palos[i]}`);
    baraja.push(cartas);
  }
}

// barajar
// random - saco por posicion

// Función para obtener una carta aleatoria de la baraja
function obtenerCartaAleatoria(baraja) {
  let indiceAleatorio = Math.floor(Math.random() * baraja.length);
  return baraja[indiceAleatorio];
}

function mostrarCartaAleatoria() {
  // Obtén una carta aleatoria de la baraja
  let cartaAleatoria = obtenerCartaAleatoria(baraja);

  // Muestra la carta en el DOM
  mostrarCartaEnDOM(cartaAleatoria);
}

const imagenPorDefecto = "./utils/images/red.png";

// Función para mostrar la carta en el DOM
function mostrarCartaEnDOM(carta) {
  let cartaContainer = document.getElementById("carta-container");

  while (cartaContainer.firstChild) {
    cartaContainer.removeChild(cartaContainer.firstChild);
  }

  // cartaContainer.innerHTML = ""; // Limpiar el contenedor antes de mostrar una nueva carta

  // Crear elemento de imagen y asignar la URL de la imagen de la carta
  let imagenElement = document.createElement("img");
  imagenElement.src = carta ? carta.imagen : imagenPorDefecto; // Si hay una carta, usa su imagen; de lo contrario, usa la imagen por defecto

  // imagenElement.src = carta.imagen;

  imagenElement.width = 150;
  imagenElement.height = 200;

  // Añadir la imagen al contenedor
  cartaContainer.appendChild(imagenElement);
}
function barajar() {
  baraja = _.shuffle(baraja);

  baraja.forEach((carta) => {
    carta.mostrarDatos();
  });

  mostrarCartaEnDOM(null);
}
barajar();

class CartaMagia extends Carta {
  valorMagico;

  constructor(representacion, valorMagico) {
    super(representacion);
    this.valorMagico = valorMagico;
  }

  mostrarDatos() {
    super.mostrarDatos();
    console.log("valorMagico " + this.valorMagico);
  }
}

let cartaJSON = {
  representacion: "1C",
  imagen: "1C.png",
  valor: "1",
  mostrarDatos: function (param) {},
};

// let carta = new Carta("1C", 1, "./utils/1C.png");
// carta.setValor = 5;
// console.log(carta.getValor);
// console.log(carta.getRepresentacion);
