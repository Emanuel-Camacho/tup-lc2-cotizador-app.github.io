// FECHA Y HORA DE ACTUALIZACION CADA 5 MINUTOS

let LISTA_NUBE = {};

function imprimirMensaje() {
    // pedimos monedas DOLAR
    fetch("https://dolarapi.com/v1/dolares")
        .then(response => response.json())
        .then(data => {
            /*  localStorage.setItem('DOLARES', JSON.stringify(data));
             console.log(data); */

            data.forEach((valor, indice) => {
                LISTA_NUBE[`moneda${indice}`] = valor;
            });
            localStorage.setItem('LISTA_NUBE', JSON.stringify(LISTA_NUBE));
        })
        .catch((error) => {
            showAlert('error', 'ERROR: Ha ocurrido un problema.');
        });

    // pedimos EU, BR, CH, UY
    fetch("https://dolarapi.com/v1/cotizaciones")
        .then(response => response.json())
        .then(data => {
            /* localStorage.setItem('OTRAS_MONEDAS', JSON.stringify(data)); */

            data.forEach((valor, indice) => {
                LISTA_NUBE[`otro${indice}`] = valor;
            });
            delete LISTA_NUBE.otro0;
            localStorage.setItem('LISTA_NUBE', JSON.stringify(LISTA_NUBE));
        });

    // obtener el elemento de fecha y hora
    fecha_hora = document.querySelector('.container .dia');

    // crear un objeto Date a partir de la fecha de actualización
    fecha = new Date();

    // formatear la fecha y la hora por separado hecho con chatGPT porque no tenemos ni idea de como arreglarlo
    opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
    opcionesHora = { hour: '2-digit', minute: '2-digit' };

    fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
    horaFormateada = fecha.toLocaleTimeString('es-ES', opcionesHora);

    fecha_hora.textContent = `Datos Actualizados al ${fechaFormateada} a las ${horaFormateada}`;

    setTimeout(imprimirMensaje, 5 * 60 * 1000); // Llamar a imprimirMensaje nuevamente después de 5 minutos
}

// Llamar a imprimirMensaje por primera vez
imprimirMensaje();


// ----------------------------------------------------------------------------


// llamamos y guardamos el arreglo con todas las monedas y sus datos
MONEDAS = JSON.parse(localStorage.getItem('DOLARES'));
OTRAS_MONEDAS = JSON.parse(localStorage.getItem('OTRAS_MONEDAS'));
const LISTA = JSON.parse(localStorage.getItem('LISTA_NUBE'));

var moneda_H; // moneda_H - cambia el h3
var moneda_C; // moneda_C - cambia la compra
var moneda_V; // moneda_V - cambia la venta

// dolar oficial
moneda_H = document.querySelector('.moneda-0 h3');
moneda_H.innerHTML = "Dolar " + LISTA.moneda0.nombre;

moneda_C = document.querySelector('.moneda-0 .compra .monto');
moneda_C.textContent = "$" + LISTA.moneda0.compra;

moneda_V = document.querySelector('.moneda-0 .venta .monto');
moneda_V.innerHTML = "$" + LISTA.moneda0.venta;

// dolar blue
moneda_H = document.querySelector('.moneda-1 h3');
moneda_H.innerHTML = "Dolar " + LISTA.moneda1.nombre;

moneda_C = document.querySelector('.moneda-1 .compra .monto');
moneda_C.textContent = "$" + LISTA.moneda1.compra;

moneda_V = document.querySelector('.moneda-1 .venta .monto');
moneda_V.innerHTML = "$" + LISTA.moneda1.venta;

// dolar bolsa
moneda_H = document.querySelector('.moneda-2 h3');
moneda_H.innerHTML = "Dolar " + LISTA.moneda2.nombre;

moneda_C = document.querySelector('.moneda-2 .compra .monto');
moneda_C.textContent = "$" + LISTA.moneda2.compra;

moneda_V = document.querySelector('.moneda-2 .venta .monto');
moneda_V.innerHTML = "$" + LISTA.moneda2.venta;

// dolar contado con liquidacion
moneda_H = document.querySelector('.moneda-3 h3');
moneda_H.innerHTML = "Dolar " + LISTA.moneda3.nombre;

moneda_C = document.querySelector('.moneda-3 .compra .monto');
moneda_C.textContent = "$" + LISTA.moneda3.compra;

moneda_V = document.querySelector('.moneda-3 .venta .monto');
moneda_V.innerHTML = "$" + LISTA.moneda3.venta;

// dolar mayorista
moneda_H = document.querySelector('.moneda-4 h3');
moneda_H.innerHTML = "Dolar " + LISTA.moneda4.nombre;

moneda_C = document.querySelector('.moneda-4 .compra .monto');
moneda_C.textContent = "$" + LISTA.moneda4.compra;

moneda_V = document.querySelector('.moneda-4 .venta .monto');
moneda_V.innerHTML = "$" + LISTA.moneda4.venta;

// dolar cryto
moneda_H = document.querySelector('.moneda-5 h3');
moneda_H.innerHTML = "Dolar " + LISTA.moneda5.nombre;

moneda_C = document.querySelector('.moneda-5 .compra .monto');
moneda_C.textContent = "$" + LISTA.moneda5.compra;

moneda_V = document.querySelector('.moneda-5 .venta .monto');
moneda_V.innerHTML = "$" + LISTA.moneda5.venta;

// dolar tarjeta
moneda_H = document.querySelector('.moneda-6 h3');
moneda_H.innerHTML = "Dolar " + LISTA.moneda6.nombre;

moneda_C = document.querySelector('.moneda-6 .compra .monto');
moneda_C.textContent = "$" + LISTA.moneda6.compra;

moneda_V = document.querySelector('.moneda-6 .venta .monto');
moneda_V.innerHTML = "$" + LISTA.moneda6.venta;

// euro
moneda_H = document.querySelector('.moneda-7 h3');
moneda_H.innerHTML = LISTA.otro1.nombre;

moneda_C = document.querySelector('.moneda-7 .compra .monto');
moneda_C.textContent = "$" + LISTA.otro1.compra;

moneda_V = document.querySelector('.moneda-7 .venta .monto');
moneda_V.innerHTML = "$" + LISTA.otro1.venta;

// real brasileño
moneda_H = document.querySelector('.moneda-8 h3');
moneda_H.innerHTML = LISTA.otro2.nombre;

moneda_C = document.querySelector('.moneda-8 .compra .monto');
moneda_C.textContent = "$" + LISTA.otro2.compra;

moneda_V = document.querySelector('.moneda-8 .venta .monto');
moneda_V.innerHTML = "$" + LISTA.otro2.venta;

// chile
moneda_H = document.querySelector('.moneda-9 h3');
moneda_H.innerHTML = LISTA.otro3.nombre;

moneda_C = document.querySelector('.moneda-9 .compra .monto');
moneda_C.textContent = "$" + LISTA.otro3.compra;

moneda_V = document.querySelector('.moneda-9 .venta .monto');
moneda_V.innerHTML = "$" + LISTA.otro3.venta;

// uruguay
moneda_H = document.querySelector('.moneda-10 h3');
moneda_H.innerHTML = LISTA.otro4.nombre;

moneda_C = document.querySelector('.moneda-10 .compra .monto');
moneda_C.textContent = "$" + LISTA.otro4.compra;

moneda_V = document.querySelector('.moneda-10 .venta .monto');
moneda_V.innerHTML = "$" + LISTA.otro4.venta;


// ----------------------------------------------------------------------------


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


// ----------------------------------------------------------------------------


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
        if (FAVORITOS.OTRA1) {
            boton_bool = document.getElementById('button7');
            boton_bool.style.color = 'gold';
            boton_bool.dataset.state = 'on';
        }
        if (FAVORITOS.OTRA2) {
            boton_bool = document.getElementById('button8');
            boton_bool.style.color = 'gold';
            boton_bool.dataset.state = 'on';
        }
        if (FAVORITOS.OTRA3) {
            boton_bool = document.getElementById('button9');
            boton_bool.style.color = 'gold';
            boton_bool.dataset.state = 'on';
        }
        if (FAVORITOS.OTRA4) {
            boton_bool = document.getElementById('button10');
            boton_bool.style.color = 'gold';
            boton_bool.dataset.state = 'on';
        }

    }
});


// ----------------------------------------------------------------------------


// funciones para que al tocar un boton se guarde en favoritos / localstorage la moneda
var boton_fav; // varaible que se usa en todos los case para modificar el color y data-state

function agregar_fav(buttonId) {
    switch (buttonId) {
        case 'boton0':
            boton_fav = document.getElementById('button0');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.dolar0 = LISTA.moneda0;
                boton_fav.dataset.state = 'on';
            } else {
                // ??? continuar luego con index / mi archivo
                showAlert('warning', 'CUIDADO - Esa moneda ya esta agregada a su archivo');
                boton_fav.style.color = 'black';
                delete FAVORITOS.dolar0;
                boton_fav.dataset.state = 'off';
            }
            break;

        case 'boton1':
            boton_fav = document.getElementById('button1');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.dolar1 = LISTA.moneda1;
                boton_fav.dataset.state = 'on';
            } else {
                boton_fav.style.color = 'black';
                showAlert('success', 'Eliminado de favoritos con exito');
                delete FAVORITOS.dolar1;
                boton_fav.dataset.state = 'off';
            }
            break;

        case 'boton2':
            boton_fav = document.getElementById('button2');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.dolar2 = LISTA.moneda2;
                boton_fav.dataset.state = 'on';
            } else {
                boton_fav.style.color = 'black';
                showAlert('success', 'Eliminado de favoritos con exito');
                delete FAVORITOS.dolar2;
                boton_fav.dataset.state = 'off';
            }
            break;

        case 'boton3':
            boton_fav = document.getElementById('button3');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.dolar3 = LISTA.moneda3;
                boton_fav.dataset.state = 'on';
            } else {
                boton_fav.style.color = 'black';
                showAlert('success', 'Eliminado de favoritos con exito');
                delete FAVORITOS.dolar3;
                boton_fav.dataset.state = 'off';
            }
            break;

        case 'boton4':
            boton_fav = document.getElementById('button4');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.dolar4 = LISTA.moneda4;
                boton_fav.dataset.state = 'on';
            } else {
                boton_fav.style.color = 'black';
                showAlert('success', 'Eliminado de favoritos con exito');
                delete FAVORITOS.dolar4;
                boton_fav.dataset.state = 'off';
            }
            break;

        case 'boton5':
            boton_fav = document.getElementById('button5');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.dolar5 = LISTA.moneda5;
                boton_fav.dataset.state = 'on';
            } else {
                boton_fav.style.color = 'black';
                showAlert('success', 'Eliminado de favoritos con exito');
                delete FAVORITOS.dolar5;
                boton_fav.dataset.state = 'off';
            }
            break;

        case 'boton6':
            boton_fav = document.getElementById('button6');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.dolar6 = LISTA.moneda6;
                boton_fav.dataset.state = 'on';
            } else {
                boton_fav.style.color = 'black';
                showAlert('success', 'Eliminado de favoritos con exito');
                delete FAVORITOS.dolar6;
                boton_fav.dataset.state = 'off';
            }
            break;

        case 'boton7':
            boton_fav = document.getElementById('button7');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.OTRA1 = LISTA.otro1;
                boton_fav.dataset.state = 'on';
            } else {
                boton_fav.style.color = 'black';
                showAlert('success', 'Eliminado de favoritos con exito');
                delete FAVORITOS.OTRA1;
                boton_fav.dataset.state = 'off';
            }
            break;

        case 'boton8':
            boton_fav = document.getElementById('button8');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.OTRA2 = LISTA.otro2;
                boton_fav.dataset.state = 'on';
            } else {
                boton_fav.style.color = 'black';
                showAlert('success', 'Eliminado de favoritos con exito');
                delete FAVORITOS.OTRA2;
                boton_fav.dataset.state = 'off';
            }
            break;

        case 'boton9':
            boton_fav = document.getElementById('button9');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.OTRA3 = LISTA.otro3;
                boton_fav.dataset.state = 'on';
            } else {
                boton_fav.style.color = 'black';
                showAlert('success', 'Eliminado de favoritos con exito');
                delete FAVORITOS.OTRA3;
                boton_fav.dataset.state = 'off';
            }
            break;

        case 'boton10':
            boton_fav = document.getElementById('button10');
            if (boton_fav.dataset.state == 'off') {
                boton_fav.style.color = 'gold';
                showAlert('success', 'Agregado a favoritos con exito');
                FAVORITOS.OTRA4 = LISTA.otro4;
                boton_fav.dataset.state = 'on';
            } else {
                boton_fav.style.color = 'black';
                showAlert('success', 'Eliminado de favoritos con exito');
                delete FAVORITOS.OTRA4;
                boton_fav.dataset.state = 'off';
            }
            break;
    }
    localStorage.setItem('FAVORITOS', JSON.stringify(FAVORITOS));
}


// ----------------------------------------------------------------------------


// LABEL SELECT OPTIONS
// ??? codigo muy repetitivo, hacerlo mas compacto
const tarjeta0 = document.querySelector('.cotizaciones .tarjeta0');
const tarjeta1 = document.querySelector('.cotizaciones .tarjeta1');
const tarjeta2 = document.querySelector('.cotizaciones .tarjeta2');
const tarjeta3 = document.querySelector('.cotizaciones .tarjeta3');
const tarjeta4 = document.querySelector('.cotizaciones .tarjeta4');
const tarjeta5 = document.querySelector('.cotizaciones .tarjeta5');
const tarjeta6 = document.querySelector('.cotizaciones .tarjeta6');

const tarjetas = document.querySelectorAll('.cotizaciones .tarjeta');
const USD = document.querySelectorAll('.cotizaciones .USD');
const OTRA = document.querySelectorAll('.cotizaciones .OTRA');

const euro = document.querySelector('.cotizaciones .tarjeta7');
const realBR = document.querySelector('.cotizaciones .tarjeta8');
const pesoCH = document.querySelector('.cotizaciones .tarjeta9');
const pesoUYU = document.querySelector('.cotizaciones .tarjeta10');
const MENSAJE = document.querySelector('.MENSAJE');

document.getElementById('options').addEventListener('change', function () {
    const seleccion = this.value;

    const boton_filtro = document.querySelector('.boton_filtro');
    boton_filtro.addEventListener('click', function () {

        switch (seleccion) {
            case 'TODAS':
                tarjetas.forEach(tarjeta => {
                    tarjeta.style.display = 'flex';
                });
                MENSAJE.style.display = 'none';
                break;

            case 'USD':
                tarjetas.forEach(tarjeta => {
                    tarjeta.style.display = 'none';
                });
                USD.forEach(tarjeta => {
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

            case 'OTRA':
                tarjetas.forEach(tarjeta => {
                    tarjeta.style.display = 'none';
                });
                OTRA.forEach(tarjeta => {
                    tarjeta.style.display = 'flex';
                });
                break;

            case 'Euro':
                tarjetas.forEach(tarjeta => {
                    tarjeta.style.display = 'none';
                });
                euro.style.display = 'flex';
                break;
            case 'PesoBR':
                tarjetas.forEach(tarjeta => {
                    tarjeta.style.display = 'none';
                });
                realBR.style.display = 'flex';
                break;

            case 'PesoChileno':
                tarjetas.forEach(tarjeta => {
                    tarjeta.style.display = 'none';
                });
                pesoCH.style.display = 'flex';
                break;

            case 'PesoUruguayo':
                tarjetas.forEach(tarjeta => {
                    tarjeta.style.display = 'none';
                });
                pesoUYU.style.display = 'flex';
                break;

            case 'FAVORITOS':
                tarjetas.forEach(tarjeta => {
                    tarjeta.style.display = 'none';
                });
                const agregados_favoritos = JSON.parse(localStorage.getItem('FAVORITOS'));
                var bool_favor = false;
                if (agregados_favoritos) {
                    if (agregados_favoritos.dolar0) {
                        tarjeta0.style.display = 'flex';
                        bool_favor = true;
                    }
                    if (agregados_favoritos.dolar1) {
                        tarjeta1.style.display = 'flex';
                        bool_favor = true;
                    }
                    if (agregados_favoritos.dolar2) {
                        tarjeta2.style.display = 'flex';
                        bool_favor = true;
                    }
                    if (agregados_favoritos.dolar3) {
                        tarjeta3.style.display = 'flex';
                        bool_favor = true;
                    }
                    if (agregados_favoritos.dolar4) {
                        tarjeta4.style.display = 'flex';
                        bool_favor = true;
                    }
                    if (agregados_favoritos.dolar5) {
                        tarjeta5.style.display = 'flex';
                        bool_favor = true;
                    }
                    if (agregados_favoritos.dolar6) {
                        tarjeta6.style.display = 'flex';
                        bool_favor = true;
                    }
                    if (agregados_favoritos.OTRA1) {
                        euro.style.display = 'flex';
                        bool_favor = true;
                    }
                    if (agregados_favoritos.OTRA2) {
                        realBR.style.display = 'flex';
                        bool_favor = true;
                    }
                    if (agregados_favoritos.OTRA3) {
                        pesoCH.style.display = 'flex';
                        bool_favor = true;
                    }
                    if (agregados_favoritos.OTRA4) {
                        pesoUYU.style.display = 'flex';
                        bool_favor = true;
                    }

                    if (bool_favor == false) {
                        MENSAJE.style.display = 'flex';
                        MENSAJE.style.minWidth = 'fit-content';
                    }
                    else {
                        MENSAJE.style.display = 'none';
                    }
                }
                break;
            default:
                showAlert('error', 'ERROR: Ha ocurrido un problema.');
        }
    });

});
