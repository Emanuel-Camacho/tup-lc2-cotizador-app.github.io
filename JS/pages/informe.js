// Obtener elementos del DOM
var btnCompartir = document.getElementById('btnCompartir');
var nombreInput = document.getElementById('nombre');
var emailInput = document.getElementById('email');
var formularioCompartir = document.getElementById('formularioCompartir');
var closeModal = document.getElementById('closeModal');
var modal = document.getElementById('myModal');

const LISTA_FAV_INFO = JSON.parse(localStorage.getItem('FAVORITOS'));
const body_INFO = document.querySelector('.body_INFO');

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

console.log(LISTA_FAV_INFO)


for (let i = 0; i < LISTA_FAV_INFO.length; i++) {
    const trFila = document.createElement('tr');

    const tdNombre = document.createElement('td');
    tdNombre.classList.add('bor');
    tdNombre.innerHTML = LISTA_FAV_INFO[i].nombre

    const tdFecha = document.createElement('td');
    tdFecha.classList.add('bor');
    tdFecha.innerHTML = LISTA_FAV_INFO[i].fechaActualizacion

    const tdCompra = document.createElement('td');
    tdCompra.classList.add('bor');
    tdCompra.innerHTML = '$' + LISTA_FAV_INFO[i].compra

    const tdVenta = document.createElement('td');
    tdVenta.classList.add('bor');
    tdVenta.innerHTML = '$' + LISTA_FAV_INFO[i].venta

    const tdVariacion = document.createElement('td');
    tdVariacion.classList.add('bor');
    tdVariacion.innerHTML = `<a href="#"><i class="fa-solid fa-arrow-down" style="color: red;"></i></a> <a href="#"><i class="fa-solid fa-arrow-up" style="color: green;"></i></a>`

    trFila.appendChild(tdNombre);
    trFila.appendChild(tdFecha);
    trFila.appendChild(tdCompra);
    trFila.appendChild(tdVenta);
    trFila.appendChild(tdVariacion);

    body_INFO.appendChild(trFila);
}



const ctx = document.getElementById("miGrafica").getContext("2d");
const boton_select = document.querySelector('.boton_info');

let grafico_cargado;

function graficar() {
    const select_Monedas = document.getElementById('options').value;
    let monedaSeleccionada = null;

    if (select_Monedas == 'TODAS') {
        graficar_selec_todas();
    }
    else {
        for (let i = 0; i < LISTA_FAV_INFO.length; i++) {
            if (LISTA_FAV_INFO[i].nombre === select_Monedas) {
                monedaSeleccionada = LISTA_FAV_INFO[i];
                break;
            }
            else if (i == (LISTA_FAV_INFO.length - 1)) {
                console.log('Moneda no seleccionada o no encontrada.');
                showAlert('Esa moneda no se encuentra en favoritos', 'error')
            }
        }
    }

    if (monedaSeleccionada != null) {
        const ejeX = [monedaSeleccionada.fechaActualizacion];
        const compra = [monedaSeleccionada.compra];
        const venta = [monedaSeleccionada.venta];


        if (grafico_cargado) {
            grafico_cargado.destroy();
        }

        /* const ctx = document.getElementById("miGrafica").getContext("2d"); */
        grafico_cargado = new Chart(ctx, {
            type: "line",
            data: {
                labels: ejeX,
                datasets: [
                    {
                        label: `Compra ${select_Monedas}`,
                        data: compra,
                        borderColor: "green",
                        fill: false,
                    },
                    {
                        label: `Venta ${select_Monedas}`,
                        data: venta,
                        borderColor: "red",
                        fill: false,
                    },
                ],
            },
        });
    }
}

boton_select.addEventListener('click', () => {
    graficar();
});


function graficar_selec_todas() {
    const etiquetas = [];
    const datasets = [];

    const diccionario_monedas = {};

    LISTA_FAV_INFO.forEach((elemento) => {
        if (!etiquetas.includes(elemento.fechaActualizacion)) {
            etiquetas.push(elemento.fechaActualizacion);
        }

        if (!diccionario_monedas[elemento.nombre]) {
            diccionario_monedas[elemento.nombre] = { compra: [], venta: [] };
        }

        diccionario_monedas[elemento.nombre].compra.push(elemento.compra);
        diccionario_monedas[elemento.nombre].venta.push(elemento.venta);
    });

    console.log(etiquetas);

    Object.keys(diccionario_monedas).forEach((valor, index) => {
        datasets.push({
            label: `Compra ${valor}`,
            data: diccionario_monedas[valor].compra,
            borderColor: getRandomColor(),
            backgroundColor: getRandomColor(),
            borderWidth: 1,
            fill: false,
        });
    });

    if (grafico_cargado) {
        grafico_cargado.destroy();
    }

    /* const ctx = document.getElementById("miGrafica").getContext("2d"); */
    grafico_cargado = new Chart(ctx, {
        type: "line",
        data: {
            labels: etiquetas, // eje x
            datasets: datasets,
        },
    });
}


function showAlert(message, type) {
    const alertBox = document.getElementById('alert-message');
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

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}
