function addUser() {
    // Obtener valores del formulario
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;

    // Crear un objeto de usuario
    var user = {
      name: name,
      email: email,
      age: age
    };

    // Obtener usuarios existentes de localStorage o inicializar un array vacío
    var users = JSON.parse(localStorage.getItem("users")) || [];

    // Agregar el nuevo usuario al array
    users.push(user);

    // Guardar el array actualizado en localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Actualizar la lista de usuarios en la interfaz
    updateUsersList(users);

    // Limpiar el formulario
    document.getElementById("userForm").reset();
  }

  function updateUsersList(users) {
    var userList = document.getElementById("userList");
    userList.innerHTML = ""; // Limpiar la lista antes de actualizar

    // Crear elementos de lista para cada usuario
    users.forEach(function(user) {
      var listItem = document.createElement("li");
      listItem.className = "list-group-item";
      listItem.textContent = `Nombre: ${user.name}, Correo Electrónico: ${user.email}, Edad: ${user.age}`;
      userList.appendChild(listItem);
    });
  }

  // Cargar usuarios al cargar la página
  document.addEventListener("DOMContentLoaded", function() {
    var users = JSON.parse(localStorage.getItem("users")) || [];
    updateUsersList(users);
  });