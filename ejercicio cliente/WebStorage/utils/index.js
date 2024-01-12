document.addEventListener('DOMContentLoaded', function () {
    // Función para agregar par en Local Storage
    window.agregarLocalStorage = function () {
        const clave = document.getElementById('localClave').value;
        const valor = document.getElementById('localValor').value;
        localStorage.setItem(clave, valor);
        actualizarClaves('local');
    };

    // Función para agregar objeto en Local Storage
    window.agregarObjetoLocalStorage = function () {
        const nombre = document.getElementById('localNombre').value;
        const apellido = document.getElementById('localApellido').value;
        const tel = document.getElementById('localTel').value;
        const disponibilidad = document.getElementById('localBtncheck1').checked;

        const objeto = {
            nombre: nombre,
            apellido: apellido,
            tel: tel,
            disponibilidad: disponibilidad
        };

        localStorage.setItem('objeto', JSON.stringify(objeto));
        actualizarClaves('local');
    };

    // Función para borrar objeto en Local Storage
    window.borrarObjetoLocalStorage = function () {
        const clave = document.getElementById('localSelclave').value;
        localStorage.removeItem(clave);
        actualizarClaves('local');
    };

    // Función para agregar par en Session Storage
    window.agregarSessionStorage = function () {
        const clave = document.getElementById('sessionClave').value;
        const valor = document.getElementById('sessionValor').value;
        sessionStorage.setItem(clave, valor);
        actualizarClaves('session');
    };

    // Función para agregar objeto en Session Storage
    window.agregarObjetoSessionStorage = function () {
        const nombre = document.getElementById('sessionNombre').value;
        const apellido = document.getElementById('sessionApellido').value;
        const tel = document.getElementById('sessionTel').value;
        const disponibilidad = document.getElementById('sessionBtncheck1').checked;

        const objeto = {
            nombre: nombre,
            apellido: apellido,
            tel: tel,
            disponibilidad: disponibilidad
        };

        sessionStorage.setItem('objeto', JSON.stringify(objeto));
        actualizarClaves('session');
    };

    // Función para borrar objeto en Session Storage
    window.borrarObjetoSessionStorage = function () {
        const clave = document.getElementById('sessionSelclave').value;
        sessionStorage.removeItem(clave);
        actualizarClaves('session');
    };

    window.agregarCookie = function () {
        const clave = document.getElementById('cookiesClave').value;
        const valor = document.getElementById('cookiesValor').value;
        const expiracion = document.getElementById('cookiesExp').value;
    
        // Crear la cadena de la cookie con la clave, valor y expiración
        let cookieString = `${clave}=${valor}`;
    
        // Si se proporciona una expiración, agregarla a la cadena
        if (expiracion) {
            // Aquí puedes agregar lógica adicional si es necesario validar el formato de fecha
            cookieString += `; expires=${expiracion}`;
        }
    
        document.cookie = cookieString;
    
        // Actualizar la lista de claves y valores
        actualizarClaves('cookies');
    };;

    // Función para borrar cookie
    window.borrarCookie = function () {
        const clave = document.getElementById('cookiesSelcookie').value;
        document.cookie = `${clave}=; expires=Thu, 01 Jan 1970 00:00:00 UTC`;

        // Actualizar la lista de claves y valores
        actualizarClaves('cookies');
    };

    // Función para actualizar las claves en la parte inferior
    function actualizarClaves(almacenamiento) {
        const selectElement = document.getElementById(`${almacenamiento}Selclave`);
        selectElement.innerHTML = '';

        const resultListElement = document.getElementById(`resultList${almacenamiento.charAt(0).toUpperCase() + almacenamiento.slice(1)}`);
        resultListElement.innerHTML = '';

        let storage;
        if (almacenamiento === 'local') {
            storage = localStorage;
        } else if (almacenamiento === 'session') {
            storage = sessionStorage;
        } else if (almacenamiento === 'cookies') {
            const cookies = document.cookie.split(';');
            cookies.forEach(function (cookie) {
                const parts = cookie.split('=');
                const clave = parts[0].trim();
                const option = document.createElement('option');
                option.value = clave;
                option.text = clave;
                selectElement.add(option);

                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.textContent = clave;
                resultListElement.appendChild(listItem);
            });
            return;
        }

        for (let i = 0; i < storage.length; i++) {
            const option = document.createElement('option');
            option.value = storage.key(i);
            option.text = storage.key(i);
            selectElement.add(option);

            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';
            listItem.textContent = storage.key(i);
            resultListElement.appendChild(listItem);
        }
    }

    // Llamada inicial para mostrar las claves en Local Storage, Session Storage y Cookies
    actualizarClaves('local');
    actualizarClaves('session');
    actualizarClaves('cookies');
});
