let FAVORITOS = JSON.parse(localStorage.getItem('FAVORITOS')) || [];

let LISTA_NUBE = new Array(); // recibe los datos del api y los manda al localStorage
let LISTA = new Array(); // utilizamos para modificar los datos del api

let fechaExacta;

// Inicializa FAVORITOS con los datos de localStorage si existen



function cargar_tarjetas() {


    const cotizaciones_borrar = document.getElementById("cotizaciones");
    cotizaciones_borrar.innerHTML = '';
    LISTA_NUBE = [];
    LISTA = [];

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
                tarjeta.classList.add("USD");
                tarjeta.classList.add(`monedita${i}`);
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
                tarjeta.classList.add("OTRA");
                tarjeta.classList.add(`OTRA${i}`);
                tarjeta.classList.add(`monedita${i}`);
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
                    <button class="boton_repetido" data-id="${i}"><i class="fa-solid fa-star"></i></button>
                `;
            }
            cotizaciones.appendChild(tarjeta);
        }
        let mensajeVacio = document.createElement('div');
        mensajeVacio.classList.add("mensajeVacio");
        mensajeVacio.innerHTML = 'NO HAY FAVORITOS AGREGADOS';
        mensajeVacio.style.display = 'none';
        cotizaciones.appendChild(mensajeVacio);
    } else {
        console.log("No se encontraron monedas en la lista.");
    }

    function conseguirFecha() {
        const fechaActual = new Date();
        const dia = fechaActual.getDate();
        const mes = fechaActual.getMonth() + 1;
        const año = fechaActual.getFullYear();
        fechaExacta = `${dia}/${mes}/${año}`;
        return fechaExacta
    }

    function agregar_favoritos(event) {
        const boton = event.currentTarget;
        const id = boton.getAttribute('data-id');
        let monedaRepetida = false;

        // Verificar si la moneda ya está en favoritos
        for (let i = 0; i < FAVORITOS.length; i++) {
            if (FAVORITOS[i].nombre === LISTA[id].nombre) {
                monedaRepetida = true;
                showAlert('Operación incorrecta - Esa moneda ya esta agregada a favoritos.', 'warning');
                break;
            }
        }

        if (!monedaRepetida) {
            showAlert('Operación exitosa', 'success');
            LISTA[id].fechaActualizacion = conseguirFecha()

            // LISTA[id].fechaActualizacion = '23/7/2024' // para poner otras fechas
            FAVORITOS.push(LISTA[id]);
            localStorage.setItem('FAVORITOS', JSON.stringify(FAVORITOS));

            // Cambiar el color del icono a amarillo
            const iconoEstrella = boton.querySelector('i.fa-solid');
            iconoEstrella.style.color = 'gold';

            // Agregar clase para indicar estado de favorito
            boton.classList.add('favorito');
        }
        // console.log(FAVORITOS);
    }

    document.querySelectorAll('.boton_repetido').forEach((boton) => {
        boton.addEventListener('click', agregar_favoritos);
    });

    document.querySelector('.boton_filtro').addEventListener('click', function () {
        const selectedOption = document.getElementById('options').value;
        console.log('Opción seleccionada:', selectedOption);

        let mensajeVacio = document.querySelector('.mensajeVacio')
        mensajeVacio.style.display = 'none';

        switch (selectedOption) {
            case 'TODAS':
                document.querySelectorAll('.tarjeta').forEach(elemento => {
                    elemento.style.display = 'flex';
                });
                break;
            case 'USD':
                document.querySelectorAll('.tarjeta').forEach(elemento => {
                    elemento.style.display = 'none';
                });
                document.querySelectorAll('.USD').forEach(elemento => {
                    elemento.style.display = 'flex';
                });
                break;
            case 'OTRA':
                document.querySelectorAll('.tarjeta').forEach(elemento => {
                    elemento.style.display = 'none';
                });
                document.querySelectorAll('.OTRA').forEach(elemento => {
                    elemento.style.display = 'flex';
                });
                break;
            case 'Euro':
                document.querySelectorAll('.tarjeta').forEach(elemento => {
                    elemento.style.display = 'none';
                });
                document.querySelectorAll('.OTRA7').forEach(elemento => {
                    elemento.style.display = 'flex';
                });
                break;
            case 'PesoBR':
                document.querySelectorAll('.tarjeta').forEach(elemento => {
                    elemento.style.display = 'none';
                });
                document.querySelectorAll('.OTRA8').forEach(elemento => {
                    elemento.style.display = 'flex';
                });
                break;
            case 'PesoChileno':
                document.querySelectorAll('.tarjeta').forEach(elemento => {
                    elemento.style.display = 'none';
                });
                document.querySelectorAll('.OTRA9').forEach(elemento => {
                    elemento.style.display = 'flex';
                });
                break;
            case 'PesoUruguayo':
                document.querySelectorAll('.tarjeta').forEach(elemento => {
                    elemento.style.display = 'none';
                });
                document.querySelectorAll('.OTRA10').forEach(elemento => {
                    elemento.style.display = 'flex';
                });
                break;
            case 'FAVORITOS':

                if (FAVORITOS.length == 0) {
                    document.querySelectorAll('.tarjeta').forEach(elemento => {
                        elemento.style.display = 'none';
                    });
                    mensajeVacio.style.display = 'block';
                }
                else {
                    let seleccionado;
                    console.log(FAVORITOS);
                    document.querySelectorAll('.tarjeta').forEach(elemento => {
                        elemento.style.display = 'none';
                    });
                    for (let i = 0; i < FAVORITOS.length; i++) {
                        switch (FAVORITOS[i].nombre) {
                            case 'Oficial':
                                seleccionado = document.querySelector(`.monedita0`);
                                seleccionado.style.display = 'flex';
                                break;
                            case 'Blue':
                                seleccionado = document.querySelector('.monedita1');
                                seleccionado.style.display = 'flex';
                                break;
                            case 'Bolsa':
                                seleccionado = document.querySelector('.monedita2');
                                seleccionado.style.display = 'flex';
                                break;
                            case 'Contado con liquidación':
                                seleccionado = document.querySelector(`.monedita3`);
                                seleccionado.style.display = 'flex';
                                break;
                            case 'Mayorista':
                                seleccionado = document.querySelector('.monedita4');
                                seleccionado.style.display = 'flex';
                                break;
                            case 'Cripto':
                                seleccionado = document.querySelector('.monedita5');
                                seleccionado.style.display = 'flex';
                                break;
                            case 'Tarjeta':
                                seleccionado = document.querySelector('.monedita6');
                                seleccionado.style.display = 'flex';
                                break;
                            case 'Euro':
                                seleccionado = document.querySelector('.monedita7');
                                seleccionado.style.display = 'flex';
                                break;
                            case 'Real Brasileño':
                                seleccionado = document.querySelector('.monedita8');
                                seleccionado.style.display = 'flex';
                                break;
                            case 'Peso Chileno':
                                seleccionado = document.querySelector('.monedita9');
                                seleccionado.style.display = 'flex';
                                break;
                            case 'Peso Uruguayo':
                                seleccionado = document.querySelector('.monedita10');
                                seleccionado.style.display = 'flex';
                                break;
                        }
                    }
                }
                break;
        }
    });

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

    function showAlert(message, type) {
        let alertBox = document.getElementById('alert-message');
        alertBox.textContent = message;
        alertBox.className = `alert ${type}`;
        alertBox.style.display = 'block';

        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 3000); // Ocultar después de 3 segundos
    }
    /* showAlert('Operación exitosa', 'success');
    
    showAlert('Operación incorrecta', 'warning');
    
    showAlert('Ha ocurrido un error al intentar consultar los datos.', 'error');
    */
}



// Cargar favoritos desde localStorage al iniciar la página
document.addEventListener('DOMContentLoaded', () => {
    // cargas las tarjetas al cargar la pagina
    cargar_tarjetas(); // Actualizar al inicio
    setInterval(cargar_tarjetas, 5000); // Actualizar cada 5 minutos

});
