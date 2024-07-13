
// Obtener elementos del DOM
var btnCompartir = document.getElementById('btnCompartir');
var modal = document.getElementById('myModal');
var closeModal = document.getElementById('closeModal');
var formularioCompartir = document.getElementById('formularioCompartir');
var nombreInput = document.getElementById('nombre');
var emailInput = document.getElementById('email');

modal.style.display = 'none';

// Mostrar modal al hacer clic en "Compartir Información"
btnCompartir.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = 'block';
});

// Cerrar modal al hacer clic en el botón de cerrar
closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Cerrar modal si se hace clic fuera de ella (en el fondo semitransparente)
window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

// Enviar formulario
formularioCompartir.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    // Obtener valores de nombre y email
    let nombre = nombreInput.value;
    let email = emailInput.value;

    // Aquí puedes implementar la lógica para enviar el formulario, por ejemplo usando fetch() o enviándolo a un servidor
    // Por ahora, simplemente lo mostraremos en una alerta
    alert(`Nombre: ${nombre}\nEmail: ${email}`);

    // Resetear el formulario y ocultar la modal después del envío
    formularioCompartir.reset();
    modal.style.display = 'none';
});
