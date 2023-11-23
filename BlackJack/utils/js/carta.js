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

let nombreJugador = prompt("Bienvenido. Indique su nombre");
document.getElementById("nombre-jugador").textContent =
  "Jugador: " + nombreJugador;

let texto = document.getElementById("texto");

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
barajar();
const imagenPorDefecto = "./utils/images/red.png";

// Función para mostrar la carta en el DOM
function mostrarCartaEnDOM(carta) {
  let cartaContainer = document.getElementById("carta-container");

  while (cartaContainer.firstChild) {
    cartaContainer.removeChild(cartaContainer.firstChild);
  }

  // Crear elemento de imagen y asignar la URL de la imagen de la carta
  let imagenElement = document.createElement("img");
  imagenElement.src = carta ? carta.imagen : imagenPorDefecto; // Si hay una carta, usa su imagen, de lo contrario, usa la imagen por defecto

  imagenElement.width = 150;
  imagenElement.height = 200;

  // Añadir la imagen al contenedor
  cartaContainer.appendChild(imagenElement);
}

function mostrarMano(mano, contenedorId) {
  let manoContainer = document.getElementById(contenedorId);
  manoContainer.innerHTML = ""; // Limpiar el contenedor antes de mostrar una nueva mano

  for (let carta of mano) {
    let imagenElement = document.createElement("img");
    imagenElement.src = carta.imagen;
    imagenElement.width = 150;
    imagenElement.height = 200;
    manoContainer.appendChild(imagenElement);
  }
}

function juegoNuevo() {
  texto.textContent = "Su turno";
  barajar();
  //Establecer botones utilizables
  document.getElementById("pedir-carta").disabled = false;
  document.getElementById("plantarse").disabled = false;

  // Limpia las manos de jugador y crupier
  jugador = [];
  crupier = [];

  // Repartir dos cartas a cada jugador
  jugador.push(baraja.pop());
  jugador.push(baraja.pop());
  crupier.push(baraja.pop());
  crupier.push(baraja.pop());

  // Muestra las manos en el DOM
  mostrarMano(crupier, "mano-banca");
  mostrarMano(jugador, "mano-jugador");

  crupier.forEach((carta) => {
    carta.mostrarDatos();
  });
  jugador.forEach((carta) => {
    carta.mostrarDatos();
  });

  // Obtén los valores de las cartas
  let valoresJugador = jugador.map((carta) => carta.valor);
  let valoresCrupier = crupier.map((carta) => carta.valor);

  // Calcular la puntuación del jugador y del crupier
  let puntuacionCrupier = valoresCrupier.reduce(
    (acumulador, valor) => acumulador + valor,
    0
  );
  console.log(puntuacionCrupier);
  let puntuacionJugador = valoresJugador.reduce(
    (acumulador, valor) => acumulador + valor,
    0
  );
  console.log(puntuacionJugador);

  // Mostrar la puntuación del jugador y del crupier
  mostrarPuntuacion("crupier", puntuacionCrupier);
  mostrarPuntuacion("jugador", puntuacionJugador);

  juegoBanca(puntuacionCrupier, valoresCrupier);
}
juegoNuevo();

//Funcion para que la banca juegue hasta obtener un minimo de 17 puntos
function juegoBanca(puntuacionCrupier, valoresCrupier) {
  while (puntuacionCrupier <= 17) {
    crupier.push(baraja.pop());

    valoresCrupier = crupier.map((carta) => carta.valor);
    puntuacionCrupier = valoresCrupier.reduce(
      (acumulador, valor) => acumulador + valor,
      0
    );
    console.log(puntuacionCrupier);
    mostrarMano(crupier, "mano-banca");
    mostrarPuntuacion("crupier", puntuacionCrupier);
  }
  //La banca pierde automaticamente al pasar de 21
  if (puntuacionCrupier > 21) {
    texto.textContent = "¡GANA EL JUGADOR!";
    console.log("GANA EL JUGADOR");
    document.getElementById("pedir-carta").disabled = true;
    document.getElementById("plantarse").disabled = true;
  }

  return { puntuacionCrupier, valoresCrupier };
}
//Funcion para que el jugador pida carta
function pedirCarta(valoresJugador, puntuacionJugador) {
  jugador.push(baraja.pop());
  valoresJugador = jugador.map((carta) => carta.valor);
  puntuacionJugador = valoresJugador.reduce(
    (acumulador, valor) => acumulador + valor,
    0
  );
  console.log("Puntos Jugador", puntuacionJugador);
  mostrarMano(jugador, "mano-jugador");
  mostrarPuntuacion("jugador", puntuacionJugador);
  //El jugador pierde automaticamente si se pasa de 21
  if (puntuacionJugador > 21) {
    texto.textContent = "¡Gana la banca!";
    console.log("GANA LA BANCA");
    document.getElementById("pedir-carta").disabled = true;
    document.getElementById("plantarse").disabled = true;
  }

  return { valoresJugador, puntuacionJugador };
}
//Funcion para plantarse
function finTurno(puntuacionJugador, puntuacionCrupier) {
  valoresJugador = jugador.map((carta) => carta.valor);
  puntuacionJugador = valoresJugador.reduce(
    (acumulador, valor) => acumulador + valor,
    0
  );
  valoresCrupier = crupier.map((carta) => carta.valor);
  puntuacionCrupier = valoresCrupier.reduce(
    (acumulador, valor) => acumulador + valor,
    0
  );
  //En el caso de plantarse se procede a verificar la puntuación
  if (puntuacionCrupier == puntuacionJugador) {
    texto.textContent = "¡Empate!";
    console.log("EMPATE");
    document.getElementById("pedir-carta").disabled = true;
    document.getElementById("plantarse").disabled = true;
  } else if (puntuacionJugador > puntuacionCrupier && puntuacionJugador <= 21) {
    console.log("GANA EL JUGADOR");
    texto.textContent = "¡GANA EL JUGADOR!";
    document.getElementById("pedir-carta").disabled = true;
    document.getElementById("plantarse").disabled = true;
  } else {
    console.log("GANA LA BANCA");
    texto.textContent = "¡Gana la banca!";
    document.getElementById("pedir-carta").disabled = true;
    document.getElementById("plantarse").disabled = true;
  }
  console.log(puntuacionJugador);
}

function barajar() {
  baraja = []; //reiniciar la baraja

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
  baraja = _.shuffle(baraja);
}
//Funcion para mostrar la puntuacion
function mostrarPuntuacion(jugador, puntuacion) {
  let puntuacionElement = document.getElementById(`${jugador}-puntuacion`);
  puntuacionElement.textContent = `Puntuación: ${puntuacion}`;
}
