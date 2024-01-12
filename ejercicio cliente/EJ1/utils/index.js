function enviarFormulario() {
    let nombre = document.querySelector("#nombre").value;
    let apellido = document.querySelector("#apellido").value;
    let telefono = document.querySelector("#telefono").value;
    let dni = document.querySelector("#dni").value;

    if (nombre === "" || apellido === "" || telefono === "" || dni === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }
    // Validar elementos introducidos correctamente
    if (!/^[A-Za-zÁ-ÿ\s]+$/.test(nombre)) {
        alert("Por favor, introduce solo letras en el campo de nombre.");
        return;
    }
    if (!/^[A-Za-zÁ-ÿ\s]+$/.test(apellido)) {
        alert("Por favor, introduce solo letras en el campo de apellido.");
        return;
    }
    if (!/^[0-9]{9}$/.test(telefono)) {
        alert("Por favor, introduce un número de teléfono válido (9 dígitos).");
        return;
    }
    if (!/^[0-9]{8}[a-zA-Z]$/.test(dni)) {
        alert("Por favor, introduce un DNI válido (8 números seguidos por una letra).");
        return;
    }
    
    // Resto del código para procesar el formulario
    alert("Formulario enviado correctamente");

    let resultadoDiv = document.querySelector("#resultado");
    resultadoDiv.innerHTML = "Nombre: " + nombre + " - Apellido: " + apellido + " - DNI: " + dni + " - Teléfono: " + telefono;

                // Agregar usuario a la lista ordenada
                let listaUsuarios = document.getElementById("listaUsuarios");
                let nuevoUsuario = document.createElement("li");
                nuevoUsuario.textContent = `Nombre: ${nombre} - Apellido: ${apellido} - DNI: ${dni} - Teléfono: ${telefono}`;
                listaUsuarios.appendChild(nuevoUsuario);
    
                // Limpiar los campos del formulario
                document.getElementById("nombre").value = "";
                document.getElementById("apellido").value = "";
                document.getElementById("telefono").value = "";
                document.getElementById("dni").value = "";
            }

