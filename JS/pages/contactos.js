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
        const templateID = 'template_cy4vr6b';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Enviar';
                alert('Enviado!');
            }, (err) => {
                btn.value = 'Enviar';
                alert(JSON.stringify(err));
            });
    });
