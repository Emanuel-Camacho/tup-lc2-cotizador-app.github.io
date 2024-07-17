function tabla_MIARCHIVO() {

    const LISTA_FAV_MI = JSON.parse(localStorage.getItem('FAVORITOS'));

    const tablaBody = document.querySelector('#body_MI');

    // LISTA_FAV_MI[].fechaActualizacion = '17/00/0000'

    tablaBody.innerHTML = '';

    let fechaHoy = ''

    if (LISTA_FAV_MI.length == 0) {
        const trVacio = document.createElement('tr');
        const tdVacio = document.createElement('td');
        tdVacio.colSpan = 5;
        tdVacio.innerHTML = "NO HAY NINGUNA MONEDA AGREGADA A FAVORITOS";
        tdVacio.classList.add("tdVacio");
        // mensajeVacio.classList.add("fecha");
        trVacio.appendChild(tdVacio);
        tablaBody.appendChild(trVacio);
    }

    // se carga la tabla con los agregados a favoritos
    for (let i = 0; i < LISTA_FAV_MI.length; i++) {

        if (fechaHoy != LISTA_FAV_MI[i].fechaActualizacion) {
            fechaHoy = LISTA_FAV_MI[i].fechaActualizacion;

            const trGris = document.createElement("tr");
            const tdFecha = document.createElement("td");
            tdFecha.classList.add("fecha")
            tdFecha.colSpan = 5;
            tdFecha.innerHTML = fechaHoy;

            trGris.appendChild(tdFecha);
            tablaBody.appendChild(trGris);
            for (let k = 0; k < LISTA_FAV_MI.length; k++) {
                if (LISTA_FAV_MI[k].fechaActualizacion == fechaHoy) {
                    const trFav = document.createElement('tr');
                    trFav.classList.add('trAbajo')

                    const tdVacio = document.createElement("td");

                    const tdNombre = document.createElement("td");
                    tdNombre.textContent = LISTA_FAV_MI[k].nombre;

                    const tdCompra = document.createElement("td");
                    tdCompra.textContent = '$' + LISTA_FAV_MI[k].compra;

                    const tdVenta = document.createElement("td");
                    tdVenta.textContent = '$' + LISTA_FAV_MI[k].venta;

                    const tdBorrar = document.createElement("td");
                    tdBorrar.innerHTML = `<button class="boton_MI" data-id="${k}" boton_MI${k}"><i style="color: red" class="fa-solid fa-eraser"></i></button>`

                    trFav.appendChild(tdVacio);
                    trFav.appendChild(tdNombre);
                    trFav.appendChild(tdCompra);
                    trFav.appendChild(tdVenta);
                    trFav.appendChild(tdBorrar);
                    tablaBody.appendChild(trFav);
                }
            }
        }
    }

    // funcionalida para quitar de favoritos
    function quitarfavoritos(event) {
        const boton = event.currentTarget;
        const dataID = boton.getAttribute('data-id');

        // console.log('Data ID:', dataID);
        LISTA_FAV_MI.splice(dataID, 1);
        showAlert('Operación exitosa', 'success');
        localStorage.setItem('FAVORITOS', JSON.stringify(LISTA_FAV_MI));
        tabla_MIARCHIVO();
    }

    document.querySelectorAll('.boton_MI').forEach((boton) => {
        boton.addEventListener('click', quitarfavoritos);
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

document.addEventListener('DOMContentLoaded', (event) => {

    tabla_MIARCHIVO();

    const printButton = document.getElementById('print-button');

    printButton.addEventListener('click', (event) => {
        event.preventDefault(); // Previene la acción por defecto del enlace

        // Selecciona el contenedor que deseas imprimir
        const container = document.querySelector('.tabla-container').innerHTML;

        // Crea una nueva ventana para la impresión
        const printWindow = window.open('', '', 'height=600,width=800');

        printWindow.document.write(container);

        printWindow.document.close();
        printWindow.print();
    });
});
