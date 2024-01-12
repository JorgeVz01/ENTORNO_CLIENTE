function cambiarColorFondo() {
    var fechaInput = document.getElementById('fecha').value;
    var fechaSeleccionada = new Date(fechaInput);
    var mes = fechaSeleccionada.getMonth() + 1;

    var color;

    if (mes >= 3 && mes <= 5) {
      color = '#7FFFD4'; // Primavera
    } else if (mes >= 6 && mes <= 8) {
      color = '#FFD700'; // Verano
    } else if (mes >= 9 && mes <= 11) {
      color = '#FFA500'; // Otoño
    } else {
      color = '#4682B4'; // Invierno
    }

    document.body.style.backgroundColor = color;
  }