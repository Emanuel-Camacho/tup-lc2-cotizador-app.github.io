


// llamamos y guardamos el arreglo con todas las monedas y sus datos
MONEDAS = JSON.parse(localStorage.getItem('DOLARES'));

// dolar oficial
dolar_H_0 = document.querySelector('.moneda-0 h3');
dolar_H_0.innerHTML = "Dolar " + MONEDAS[0].nombre;

dolar_C_0 = document.querySelector('.moneda-0 .compra .plata');
dolar_C_0.textContent = MONEDAS[0].compra;

dolar_V_0 = document.querySelector('.moneda-0 .venta .plata');
dolar_V_0.innerHTML = MONEDAS[0].venta;

// dolar blue
dolar_H_1 = document.querySelector('.moneda-1 h3');
dolar_H_1.innerHTML = "Dolar " + MONEDAS[1].nombre;

dolar_C_1 = document.querySelector('.moneda-1 .compra .plata');
dolar_C_1.textContent = MONEDAS[1].compra;

dolar_V_1 = document.querySelector('.moneda-1 .venta .plata');
dolar_V_1.innerHTML = MONEDAS[1].venta;

// dolar bolsa
dolar_H_2 = document.querySelector('.moneda-2 h3');
dolar_H_2.innerHTML = "Dolar " + MONEDAS[2].nombre;

dolar_C_2 = document.querySelector('.moneda-2 .compra .plata');
dolar_C_2.textContent = MONEDAS[2].compra;

dolar_V_2 = document.querySelector('.moneda-2 .venta .plata');
dolar_V_2.innerHTML = MONEDAS[2].venta;

// dolar contado con liquidacion
dolar_H_3 = document.querySelector('.moneda-3 h3');
dolar_H_3.innerHTML = "Dolar " + MONEDAS[3].nombre;

dolar_C_3 = document.querySelector('.moneda-3 .compra .plata');
dolar_C_3.textContent = MONEDAS[3].compra;

dolar_V_3 = document.querySelector('.moneda-3 .venta .plata');
dolar_V_3.innerHTML = MONEDAS[3].venta;

// dolar mayorista
dolar_H_4 = document.querySelector('.moneda-4 h3');
dolar_H_4.innerHTML = "Dolar " + MONEDAS[4].nombre;

dolar_C_4 = document.querySelector('.moneda-4 .compra .plata');
dolar_C_4.textContent = MONEDAS[4].compra;

dolar_V_4 = document.querySelector('.moneda-4 .venta .plata');
dolar_V_4.innerHTML = MONEDAS[4].venta;

// dolar cryto
dolar_H_5 = document.querySelector('.moneda-5 h3');
dolar_H_5.innerHTML = "Dolar " + MONEDAS[5].nombre;

dolar_C_5 = document.querySelector('.moneda-5 .compra .plata');
dolar_C_5.textContent = MONEDAS[5].compra;

dolar_V_5 = document.querySelector('.moneda-5 .venta .plata');
dolar_V_5.innerHTML = MONEDAS[5].venta;

// dolar tarjeta
dolar_H_6 = document.querySelector('.moneda-6 h3');
dolar_H_6.innerHTML = "Dolar " + MONEDAS[6].nombre;

dolar_C_6 = document.querySelector('.moneda-6 .compra .plata');
dolar_C_6.textContent = MONEDAS[6].compra;

dolar_V_6 = document.querySelector('.moneda-6 .venta .plata');
dolar_V_6.innerHTML = MONEDAS[6].venta;

// FECHA Y HORA DE ACTUALIZACION

// obtener el elemento de fecha y hora
fecha_hora = document.querySelector('.container .dia');

// obtener la fecha de actualización de MONEDAS
fechaActualizacion = MONEDAS[0].fechaActualizacion;

// crear un objeto Date a partir de la fecha de actualización
fecha = new Date(fechaActualizacion);

// formatear la fecha y la hora por separado hecho con chatGPT porque no tenemos ni idea de como arreglarlo
opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
opcionesHora = { hour: '2-digit', minute: '2-digit' };

fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
horaFormateada = fecha.toLocaleTimeString('es-ES', opcionesHora);

fecha_hora.textContent = `Datos Actualizados al ${fechaFormateada} a las ${horaFormateada}`;



// funcion para mostrar un mensaje de alerta
function showAlert(type, message) {
    // ocultar cualquier alerta visible
    document.querySelectorAll('.alert').forEach(alert => {
        alert.style.display = 'none';
    });

    // seleccionar la alerta segun el tipo y mostrar el mensaje
    const alert = document.getElementById(`alert-${type}`);
    alert.textContent = message;
    alert.style.display = 'block';

    // ocultar la alerta después de 3 segundos
    setTimeout(() => {
        alert.style.display = 'none';
    }, 3000);
}

// se actualiza cada 5 minutos
setTimeout(() => {
    location.reload(true)

    fetch("https://dolarapi.com/v1/dolares")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            localStorage.setItem('DOLARES', JSON.stringify(data))
        })
        .catch((error) => {
            showAlert('error', 'ERROR: Ha ocurrido un problema.')
        });
}, 50000);

let FAVORITOS = new Array();
// variable que funcona como bool
let booleano = true;

// Selecciona el elemento del enlace
const cambio_accion = document.getElementById('cambio_accion');

// Agrega un evento de clic al enlace
cambio_accion.addEventListener('click', function (event) {
    // Previene el comportamiento predeterminado del enlace
    event.preventDefault();

    if (booleano) {
        // Acción para el primer clic
        console.log('Primera acción ejecutada');
        booleano = false;
    } else {
        // Acción para los clics posteriores
        console.log('Segunda acción ejecutada');
        booleano = true;
    }
});


// Agregar un valor al localStorage
localStorage.setItem('fav', FAVORITOS);

// Obtener un valor del localStorage
var nombre = localStorage.getItem('nombre');
//console.log(nombre);  // Esto imprimirá "Juan" en la consola

// Eliminar un valor del localStorage

// Verificar si el valor ha sido eliminado
nombre = localStorage.getItem('nombre');
//console.log(nombre);  // Esto imprimirá "null" en la consola, porque ya no existe el dato