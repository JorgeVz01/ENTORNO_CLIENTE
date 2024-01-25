import Tarea from "./tarea.js";
//CREAR OBJETO CON LOS ELEMENTOS DEL FORMULARIO
let nombre = document.querySelector("#nombre");
let descripcion = document.querySelector("#descripcion");
let prioridad = document.querySelector("#prioridad");
let fecha = document.querySelector("#fecha");
let prioritaria = document.querySelector("#prioritaria");
prioritaria.value = false;
let aceptar = document.querySelector("#aceptar");
let tareas = [];

prioritaria.addEventListener("change", (e) => {
  if (prioritaria.checked) {
    prioritaria.value = true;
  } else {
    prioritaria.value = false;
  }
});

aceptar.addEventListener("click", (e) => {
  tareas.push(new Tarea(nombre.value, descripcion.value, prioridad.value, fecha.value, prioritaria.value));
  mostrarTodasTareas();
  resultados.selectedIndex = 0; //Para que cada vez que se añada una tarea, el select de la lista se ponga en Todas
  console.log(tareas);
  anhadirTarjetas();
});

//AÑADIR A LA LISTA LOS NOMBRES DE LAS TAREAS
let resultados = document.querySelector("#resultados");
let lista = document.querySelector("#lista-tareas");

function mostrarTodasTareas() {
  lista.innerHTML = "";
  tareas.forEach((item) => {
    let elemento = document.createElement("p");
    elemento.classList.add("w-100", "border", "p-2", "rounded", "m-0");
    elemento.innerHTML = `${item.nombre}`;
    lista.appendChild(elemento);
  });
}

//FILTRO DE LISTA DE TAREAS
resultados.addEventListener("input", (e) => {
  if (resultados.value == "todas") {
    mostrarTodasTareas();
  } else if (resultados.value == "alta") {
    lista.innerHTML = "";
    tareas.forEach((item) => {
      if (item.prioridad == "Prioridad alta") {
        let elemento = document.createElement("p");
        elemento.classList.add("w-100", "border", "p-2", "rounded", "m-0");
        elemento.innerHTML = `${item.nombre}`;
        lista.appendChild(elemento);
      }
    });
  } else if (resultados.value == "media") {
    lista.innerHTML = "";
    tareas.forEach((item) => {
      if (item.prioridad == "Prioridad media") {
        let elemento = document.createElement("p");
        elemento.classList.add("w-100", "border", "p-2", "rounded", "m-0");
        elemento.innerHTML = `${item.nombre}`;
        lista.appendChild(elemento);
      }
    });
  } else if (resultados.value == "baja") {
    lista.innerHTML = "";
    tareas.forEach((item) => {
      if (item.prioridad == "Prioridad baja") {
        let elemento = document.createElement("p");
        elemento.classList.add("w-100", "border", "p-2", "rounded", "m-0");
        elemento.innerHTML = `${item.nombre}`;
        lista.appendChild(elemento);
      }
    });
  }
});

//AÑADIR LAS CARTAS CON LAS TAREAS
let tarjetas = document.querySelector("#tarjetas");
let botonCompletar = [];
let contenedores = [];
function anhadirTarjetas() {
  tarjetas.innerHTML = "";
  tareas.forEach((item) => {
    if (item.completa == false) {
      let contenedor = document.createElement("div");
      contenedor.classList.add("col-4", "border", "rounded", "w-25", "m-1");
      let imagen = document.createElement("img");
      imagen.src = `img/${item.imagen}`;
      imagen.width = 200;
      imagen.classList.add("text-center");
      let titulo = document.createElement("h4");
      titulo.innerHTML = item.nombre;
      let descripcion = document.createElement("p");
      descripcion.innerHTML = item.descripcion;
      let prioridad = document.createElement("p");
      prioridad.innerHTML = item.prioridad;
      let boton = document.createElement("button");
      boton.innerHTML = "Completar";
      boton.classList.add("btn", "btn-primary", "boton-completar");
      //   boton.id = `boton-completar-${item.id}`;
      contenedor.appendChild(imagen);
      contenedor.appendChild(titulo);
      contenedor.appendChild(descripcion);
      contenedor.appendChild(prioridad);
      contenedor.appendChild(boton);
      tarjetas.appendChild(contenedor);
      botonCompletar = document.querySelectorAll(".boton-completar");
      contenedores = document.querySelectorAll(".w-25");
      console.log(contenedores);
    }
  });
  comprobarTarjetas();
}

function comprobarTarjetas() {
  for (let i = 0; i < botonCompletar.length; i++) {
    botonCompletar[i].addEventListener("click", (e) => {
      tareas[i].completa = true;
      tarjetas.removeChild(contenedores[i]);
      tareas.splice(i, 1);
      console.log(tareas);
      console.log(contenedores);
      anhadirTarjetas();
      mostrarTodasTareas();
    });
  }
}
