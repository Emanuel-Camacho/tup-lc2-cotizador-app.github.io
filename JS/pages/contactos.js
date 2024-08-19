document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const limpiarBtn = document.getElementById("limpiarBtn");

    // Limpiar el formulario
    limpiarBtn.addEventListener("click", function () {
        form.reset();
    });


});

const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'service_avqduoe';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar';
                alert('Enviado!');
            }, (err) => {
                btn.value = 'Error!';
                alert(JSON.stringify(err));
            });
    });