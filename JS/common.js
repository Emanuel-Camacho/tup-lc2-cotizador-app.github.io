// Inicializa FAVORITOS con los datos de localStorage si existen
let FAVORITOS = JSON.parse(localStorage.getItem('FAVORITOS')) || [];

const LISTA_NUBE = new Array();
let LISTA = new Array();

let USD = new Array();
let OTRA = new Array();
// Función para actualizar la fecha en el HTML
function actualizarFecha() {
    const fechaElemento = document.querySelector('.dia');
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const año = fechaActual.getFullYear();
    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const fechaTexto = `Datos Actualizados al ${dia}/${mes}/${año} ${horas}:${minutos < 10 ? '0' + minutos : minutos}hs`;
    fechaElemento.textContent = fechaTexto;
}

// Actualizar la fecha al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    actualizarFecha(); // Actualizar al inicio
    setInterval(actualizarFecha, 5 * 60 * 1000); // Actualizar cada 5 minutos
});

// Fetch de los datos de dólares y cotizaciones
fetch("https://dolarapi.com/v1/dolares")
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            LISTA_NUBE.push(...data);
            actualizarFecha(); // Actualizar la fecha después de cada fetch
            localStorage.setItem('MONEDAS', JSON.stringify(LISTA_NUBE));
        } else {
            console.log("No se encontraron datos de dólares.");
        }
    });

fetch("https://dolarapi.com/v1/cotizaciones")
    .then(response => response.json())
    .then(data => {
        if (data.length > 0) {
            LISTA_NUBE.push(...data);
            actualizarFecha(); // Actualizar la fecha después de cada fetch
            LISTA_NUBE.splice(7, 1);
            localStorage.setItem('MONEDAS', JSON.stringify(LISTA_NUBE));
        } else {
            console.log("No se encontraron cotizaciones.");
        }
    });


LISTA = JSON.parse(localStorage.getItem('MONEDAS'));

if (LISTA.length > 0) {
    const cotizaciones = document.getElementById("cotizaciones");

    for (let i = 0; i < LISTA.length; i++) {
        const tarjeta = document.createElement("div")
        tarjeta.classList.add("tarjeta");

        if (i < 7) {
            tarjeta.innerHTML = `
            <div class="moneda">
                <h3>Dolar ${LISTA[i].nombre}</h3>
                <div class="precio">
                    <div class="compra">
                        <h3>COMPRA</h3>
                        <p>$${LISTA[i].compra}</p>
                    </div>
                    <div class="venta">
                        <h3>VENTA</h3>
                        <p>$${LISTA[i].venta}</p>
                    </div>
                </div>
            </div>
            <button class="boton_repetido" data-id="${i}" data-state="off"><i class="fa-solid fa-star"></i></button>
        `;
        } else {
            tarjeta.innerHTML = `
                <div class="moneda">
                    <h3>${LISTA[i].nombre}</h3>
                    <div class="precio">
                        <div class="compra">
                            <h3>COMPRA</h3>
                            <p>$${LISTA[i].compra}</p>
                        </div>
                        <div class="venta">
                            <h3>VENTA</h3>
                            <p>$${LISTA[i].venta}</p>
                        </div>
                    </div>
                </div>
                <button class="boton_repetido" data-id="${i}" data-state="off"><i class="fa-solid fa-star"></i></button>
            `;
        }
        cotizaciones.appendChild(tarjeta);
    }
} else {
    console.log("No se encontraron monedas en la lista.");
}


function agregar_favoritos(event) {
    const boton = event.currentTarget;
    const id = boton.getAttribute('data-id');
    let monedaRepetida = false;

    // Verificar si la moneda ya está en favoritos
    for (let i = 0; i < FAVORITOS.length; i++) {
        if (FAVORITOS[i].nombre === LISTA[id].nombre) {
            monedaRepetida = true;
            break;
        }
    }

    if (!monedaRepetida) {
        FAVORITOS.push(LISTA[id]);
        localStorage.setItem('FAVORITOS', JSON.stringify(FAVORITOS));

        // Cambiar el color del icono a amarillo
        const iconoEstrella = boton.querySelector('i.fa-solid');
        iconoEstrella.style.color = 'gold';

        // Agregar clase para indicar estado de favorito
        boton.classList.add('favorito');
    }

    console.log(FAVORITOS);
}

// Cargar favoritos desde localStorage al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    FAVORITOS = JSON.parse(localStorage.getItem('FAVORITOS')) || [];

    // Marcar como favoritos los botones correspondientes
    const botones = document.querySelectorAll('.boton_repetido');
    botones.forEach(boton => {
        const id = boton.getAttribute('data-id');
        const esFavorito = FAVORITOS.some(m => m.nombre === LISTA[id].nombre);
        if (esFavorito) {
            const iconoEstrella = boton.querySelector('i.fa-solid');
            iconoEstrella.style.color = 'gold';
            boton.classList.add('favorito');
        }
    });
});

document.querySelectorAll('.boton_repetido').forEach((boton) => {
    boton.addEventListener('click', agregar_favoritos);
});

