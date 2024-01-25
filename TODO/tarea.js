class Tarea {
  static id = 0;
  nombre;
  descripcion;
  prioridad;
  fecha;
  prioritaria;
  completa;
  imagen;

  constructor(nombre, descripcion, prioridad, fecha, prioritaria) {
    this.id = Tarea.incrementarId();
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.prioridad = this.setPrioridad(prioridad);
    this.fecha = fecha;
    this.prioritaria = prioritaria;
    this.imagen = `${prioridad}.png`;
    this.completa = false;
  }

  static incrementarId() {
    return Tarea.id++;
  }

  setPrioridad(prioridad) {
    if (prioridad == 1) {
      return "Prioridad alta";
    } else if (prioridad == 2) {
      return "Prioridad media";
    } else if (prioridad == 3) {
      return "Prioridad baja";
    }
  }
}

export default Tarea;
