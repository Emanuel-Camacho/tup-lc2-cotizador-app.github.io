fetch("https://dolarapi.com/v1/dolares")
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        localStorage.setItem('DOLARES', JSON.stringify(data))
    })
    .catch((error) => {
        showAlert('error', 'ERROR: Ha ocurrido un problema.')
    });

// llamamos y guardamos el arreglo con todas las monedas y sus datos
MONEDAS = JSON.parse(localStorage.getItem('DOLARES'));

// dolar oficial
dolar_H_0 = document.querySelector('.moneda-0 h3');
dolar_H_0.innerHTML = "Dolar " + MONEDAS[0].nombre;

dolar_C_0 = document.querySelector('.moneda-0 .compra .plata');
dolar_C_0.textContent = "$" + MONEDAS[0].compra;

dolar_V_0 = document.querySelector('.moneda-0 .venta .plata');
dolar_V_0.innerHTML = "$" + MONEDAS[0].venta;

// dolar blue
dolar_H_1 = document.querySelector('.moneda-1 h3');
dolar_H_1.innerHTML = "Dolar " + MONEDAS[1].nombre;

dolar_C_1 = document.querySelector('.moneda-1 .compra .plata');
dolar_C_1.textContent = "$" + MONEDAS[1].compra;

dolar_V_1 = document.querySelector('.moneda-1 .venta .plata');
dolar_V_1.innerHTML = "$" + MONEDAS[1].venta;

// dolar bolsa
dolar_H_2 = document.querySelector('.moneda-2 h3');
dolar_H_2.innerHTML = "Dolar " + MONEDAS[2].nombre;

dolar_C_2 = document.querySelector('.moneda-2 .compra .plata');
dolar_C_2.textContent = "$" + MONEDAS[2].compra;

dolar_V_2 = document.querySelector('.moneda-2 .venta .plata');
dolar_V_2.innerHTML = "$" + MONEDAS[2].venta;

// dolar contado con liquidacion
dolar_H_3 = document.querySelector('.moneda-3 h3');
dolar_H_3.innerHTML = "Dolar " + MONEDAS[3].nombre;

dolar_C_3 = document.querySelector('.moneda-3 .compra .plata');
dolar_C_3.textContent = "$" + MONEDAS[3].compra;

dolar_V_3 = document.querySelector('.moneda-3 .venta .plata');
dolar_V_3.innerHTML = "$" + MONEDAS[3].venta;

// dolar mayorista
dolar_H_4 = document.querySelector('.moneda-4 h3');
dolar_H_4.innerHTML = "Dolar " + MONEDAS[4].nombre;

dolar_C_4 = document.querySelector('.moneda-4 .compra .plata');
dolar_C_4.textContent = "$" + MONEDAS[4].compra;

dolar_V_4 = document.querySelector('.moneda-4 .venta .plata');
dolar_V_4.innerHTML = "$" + MONEDAS[4].venta;

// dolar cryto
dolar_H_5 = document.querySelector('.moneda-5 h3');
dolar_H_5.innerHTML = "Dolar " + MONEDAS[5].nombre;

dolar_C_5 = document.querySelector('.moneda-5 .compra .plata');
dolar_C_5.textContent = "$" + MONEDAS[5].compra;

dolar_V_5 = document.querySelector('.moneda-5 .venta .plata');
dolar_V_5.innerHTML = "$" + MONEDAS[5].venta;

// dolar tarjeta
dolar_H_6 = document.querySelector('.moneda-6 h3');
dolar_H_6.innerHTML = "Dolar " + MONEDAS[6].nombre;

dolar_C_6 = document.querySelector('.moneda-6 .compra .plata');
dolar_C_6.textContent = "$" + MONEDAS[6].compra;

dolar_V_6 = document.querySelector('.moneda-6 .venta .plata');
dolar_V_6.innerHTML = "$" + MONEDAS[6].venta;

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
    }, 1700);
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
}, 300000);

// arreglo para guardar / sacar monedas
let FAVORITOS = {};

// para que al recargar la pagina y quede prendida la estrella y algo con localStorage
// hecho con ayuda externa (amigos de Emanuel)
var boton_bool; // variable que se usa en todos los if de abajo para comprobar si una moneda esta en favoritos o no
document.addEventListener('DOMContentLoaded', () => {
    const favoritosGuardados = JSON.parse(localStorage.getItem('FAVORITOS'));
    if (favoritosGuardados) {
        FAVORITOS = favoritosGuardados;

        if (FAVORITOS.dolar0) {
            boton_bool = document.getElementById('button0');
            boton_bool.style.color = 'gold';
            boton_bool.dataset.state = 'on';
        }
        if (FAVORITOS.dolar1) {
            boton_bool = document.getElementById('button1');
            boton_bool.style.color = 'gold';
            boton_bool.dataset.state = 'on';
        }
        if (FAVORITOS.dolar2) {
            boton_bool = document.getElementById('button2');
            boton_bool.style.color = 'gold';
            boton_bool.dataset.state = 'on';
        }
        if (FAVORITOS.dolar3) {
            boton_bool = document.getElementById('button3');
            boton_bool.style.color = 'gold';
            boton_bool.dataset.state = 'on';
        }
        if (FAVORITOS.dolar4) {
            boton_bool = document.getElementById('button4');
            boton_bool.style.color = 'gold';
            boton_bool.dataset.state = 'on';
        }
        if (FAVORITOS.dolar5) {
            boton_bool = document.getElementById('button5');
            boton_bool.style.color = 'gold';
            boton_bool.dataset.state = 'on';
        }
        if (FAVORITOS.dolar6) {
            boton_bool = document.getElementById('button6');
            boton_bool.style.color = 'gold';
            boton_bool.dataset.state = 'on';
        }
    }
});


// funciones para que al tocar un boton se guarde en favoritos / localstorage la moneda
var boton_fav; // varaible que se usa en todos los case para modificar el color y data-state
function agregar_fav(buttonId) {
    switch (buttonId) {
        case 'boton0':
            boton_fav = document.getElementById('button0');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.dolar0 = MONEDAS[0];
                boton_fav.dataset.state = 'on';
            } else {
                boton_fav.style.color = 'black';
                showAlert('success', 'Eliminado de favoritos con exito');
                delete FAVORITOS.dolar0;
                boton_fav.dataset.state = 'off';
            }
            localStorage.setItem('FAVORITOS', JSON.stringify(FAVORITOS));
            break;
        case 'boton1':
            boton_fav = document.getElementById('button1');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.dolar1 = MONEDAS[1];
                boton_fav.dataset.state = 'on';
            } else {
                boton_fav.style.color = 'black';
                showAlert('success', 'Eliminado de favoritos con exito');
                delete FAVORITOS.dolar1;
                boton_fav.dataset.state = 'off';
            }
            localStorage.setItem('FAVORITOS', JSON.stringify(FAVORITOS));
            break;
        case 'boton2':
            boton_fav = document.getElementById('button2');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.dolar2 = MONEDAS[2];
                boton_fav.dataset.state = 'on';
            } else {
                boton_fav.style.color = 'black';
                showAlert('success', 'Eliminado de favoritos con exito');
                delete FAVORITOS.dolar2;
                boton_fav.dataset.state = 'off';
            }
            localStorage.setItem('FAVORITOS', JSON.stringify(FAVORITOS));
            break;
        case 'boton3':
            boton_fav = document.getElementById('button3');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.dolar3 = MONEDAS[3];
                boton_fav.dataset.state = 'on';
            } else {
                boton_fav.style.color = 'black';
                showAlert('success', 'Eliminado de favoritos con exito');
                delete FAVORITOS.dolar3;
                boton_fav.dataset.state = 'off';
            }
            localStorage.setItem('FAVORITOS', JSON.stringify(FAVORITOS));
            break;
        case 'boton4':
            boton_fav = document.getElementById('button4');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.dolar4 = MONEDAS[4];
                boton_fav.dataset.state = 'on';
            } else {
                boton_fav.style.color = 'black';
                showAlert('success', 'Eliminado de favoritos con exito');
                delete FAVORITOS.dolar4;
                boton_fav.dataset.state = 'off';
            }
            localStorage.setItem('FAVORITOS', JSON.stringify(FAVORITOS));
            break;
        case 'boton5':
            boton_fav = document.getElementById('button5');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.dolar5 = MONEDAS[5];
                boton_fav.dataset.state = 'on';
            } else {
                boton_fav.style.color = 'black';
                showAlert('success', 'Eliminado de favoritos con exito');
                delete FAVORITOS.dolar5;
                boton_fav.dataset.state = 'off';
            }
            localStorage.setItem('FAVORITOS', JSON.stringify(FAVORITOS));
            break;
        case 'boton6':
            boton_fav = document.getElementById('button6');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.dolar6 = MONEDAS[6];
                boton_fav.dataset.state = 'on';
            } else {
                boton_fav.style.color = 'black';
                showAlert('success', 'Eliminado de favoritos con exito');
                delete FAVORITOS.dolar6;
                boton_fav.dataset.state = 'off';
            }
            localStorage.setItem('FAVORITOS', JSON.stringify(FAVORITOS));
            break;
    }
}


// LABEL SELECT OPTIONS
// ??? codigo muy repetitivo, hacerlo mas compacto
const tarjetas = document.querySelectorAll('.cotizaciones .tarjeta');
const tarjeta0 = document.querySelector('.cotizaciones .tarjeta0');
const tarjeta1 = document.querySelector('.cotizaciones .tarjeta1');
const tarjeta2 = document.querySelector('.cotizaciones .tarjeta2');
const tarjeta3 = document.querySelector('.cotizaciones .tarjeta3');
const tarjeta4 = document.querySelector('.cotizaciones .tarjeta4');
const tarjeta5 = document.querySelector('.cotizaciones .tarjeta5');
const tarjeta6 = document.querySelector('.cotizaciones .tarjeta6');

document.getElementById('options').addEventListener('change', function () {
    const seleccion = this.value;

    switch (seleccion) {
        case 'TODAS':
            tarjetas.forEach(tarjeta => {
                tarjeta.style.display = 'flex';
            });
            break;
        case 'DolarOficial':
            tarjetas.forEach(tarjeta => {
                tarjeta.style.display = 'none';
            });
            tarjeta0.style.display = 'flex';
            break;
        case 'DolarBlue':
            tarjetas.forEach(tarjeta => {
                tarjeta.style.display = 'none';
            });
            tarjeta1.style.display = 'flex';
            break;
        case 'DolarBolsa':
            tarjetas.forEach(tarjeta => {
                tarjeta.style.display = 'none';
            });
            tarjeta2.style.display = 'flex';
            break;
        case 'DolarCCL':
            tarjetas.forEach(tarjeta => {
                tarjeta.style.display = 'none';
            });
            tarjeta3.style.display = 'flex';
            break;
        case 'DolarMayorista':
            tarjetas.forEach(tarjeta => {
                tarjeta.style.display = 'none';
            });
            tarjeta4.style.display = 'flex';
            break;
        case 'DolarCripto':
            tarjetas.forEach(tarjeta => {
                tarjeta.style.display = 'none';
            });
            tarjeta5.style.display = 'flex';
            break;
        case 'DolarTarjeta':
            tarjetas.forEach(tarjeta => {
                tarjeta.style.display = 'none';
            });
            tarjeta6.style.display = 'flex';
            break;
        case 'FAVORITOS':
            tarjetas.forEach(tarjeta => {
                tarjeta.style.display = 'none';
            });
            // favoritos
            break;
        default:
            console.log('Opción no reconocida');
    }
});
