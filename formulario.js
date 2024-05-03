document.getElementById('contact-form').addEventListener('submit', function (event) {
    var nombre = document.getElementById('nombre');
    var correo = document.getElementById('correo');
    var mensaje = document.getElementById('mensaje');
    var isValid = true;
    if (nombre.value.trim() === '') {
        isValid = false;
        showErrorMessage(nombre, 'Por favor ingrese su nombre.');
    } else {
        hideErrorMessage(nombre);
    }
    if (correo.value.trim() === '' || !isValidEmail(correo.value)) {
        isValid = false;
        showErrorMessage(correo, 'Por favor ingrese un correo electrónico válido.');
    } else {
        hideErrorMessage(correo);
    }
    if (mensaje.value.trim() === '') {
        isValid = false;
        showErrorMessage(mensaje, 'Por favor ingrese un mensaje.');
    } else {
        hideErrorMessage(mensaje);
    }

    if (!isValid) {
        event.preventDefault();
    } else {
        document.querySelector('.form-status').innerText = 'Enviando...';
    }
});
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
function showErrorMessage(input, message) {
    var errorMessage = input.nextElementSibling;
    errorMessage.innerText = message;
    errorMessage.style.display = 'block';
}
function hideErrorMessage(input) {
    var errorMessage = input.nextElementSibling;
    errorMessage.innerText = '';
    errorMessage.style.display = 'none';
}