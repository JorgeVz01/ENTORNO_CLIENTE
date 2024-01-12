// // JavaScript para manejar el contador de caracteres
// function tweet() {
//     var tweetInput = document.getElementById('tweetInput');
//     var charCount = document.getElementById('charCount');

//     // Obtener la longitud actual del texto en el input
//     var currentLength = tweetInput.value.length;

//     // Actualizar el contador de caracteres
//     charCount.textContent = currentLength + '/255';

//     // Aquí puedes realizar otras acciones, como enviar el tweet a un servidor, etc.
// }

// // Agregar un evento para actualizar el contador mientras se escribe
// document.getElementById('tweetInput').addEventListener('input', function() {
//     var tweetInput = this;
//     var charCount = document.getElementById('charCount');

//     // Obtener la longitud actual del texto en el input
//     var currentLength = tweetInput.value.length;

//     // Actualizar el contador de caracteres
//     charCount.textContent = currentLength + '/255';
// });

function tweet() {
    var tweetInput = document.getElementById('tweetInput').value;
    console.log('Tweet:', tweetInput);

    // Mostrar alerta
    alert('Tweet enviado correctamente');

    // Vaciar el input
    document.getElementById('tweetInput').value = '';
    // Actualizar el contador de caracteres
    document.getElementById('charCount').textContent = '0/255';
}

function confirmTweet() {
    // Mostrar un cuadro de diálogo de confirmación
    var confirmResult = confirm('¿Quieres enviar el tweet?');

    if (confirmResult) {
        // Si el usuario elige "Sí"
        tweet();
    } else {
        // Si el usuario elige "No"
        alert('Operación cancelada por el usuario');
    }
}

// Agregar un evento para actualizar el contador mientras se escribe
document.getElementById('tweetInput').addEventListener('input', function() {
    var tweetInput = this;
    var charCount = document.getElementById('charCount');

    // Obtener la longitud actual del texto en el input
    var currentLength = tweetInput.value.length;

    // Actualizar el contador de caracteres
    charCount.textContent = currentLength + '/255';
});

// Función para comprobar si la tecla presionada es "Enter" y activar el botón en consecuencia
function checkEnter(event) {
    if (event.key === "Enter" && !event.shiftKey) {
        confirmTweet();
        event.preventDefault(); // Evitar que se agregue un salto de línea en el textarea
    }
}