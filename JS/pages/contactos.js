document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const limpiarBtn = document.getElementById("limpiarBtn");
    const enviarBtn = document.getElementById("enviarBtn");

    // Limpiar el formulario
    limpiarBtn.addEventListener("click", function () {
        form.reset();
    });

    // Enviar el formulario
    enviarBtn.addEventListener("click", function (event) {
        event.preventDefault();

        // Validar el formulario
        const nombre = document.getElementById("nombre").value;
        const correo = document.getElementById("correo").value;
        const mensaje = document.getElementById("mensaje").value;

        if (nombre === "" || correo === "") {
            alert("Por favor, complete los campos requeridos.");
            return;
        }

        // Validar formato del correo electrónico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(correo)) {
            alert("Por favor, ingrese un correo electrónico válido.");
            return;
        }

        // Simular envío del formulario
        alert("Formulario enviado correctamente!");

        form.reset();
    });
});
