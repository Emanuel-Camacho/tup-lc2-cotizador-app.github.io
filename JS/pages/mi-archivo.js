document.addEventListener('DOMContentLoaded', tabla_MIARCHIVO);

function tabla_MIARCHIVO() {

    const LISTA_FAV_MI = JSON.parse(localStorage.getItem('FAVORITOS'));

    const tablaBody = document.querySelector('#body_MI');

    tablaBody.innerHTML = '';

    let fechaHoy = ''

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

    function quitarfavoritos(event) {
        const boton = event.currentTarget;
        const dataID = boton.getAttribute('data-id');

        console.log('Data ID:', dataID);
        LISTA_FAV_MI.splice(dataID, 1);
        console.log(dataID);
        localStorage.setItem('FAVORITOS', JSON.stringify(LISTA_FAV_MI));
        tabla_MIARCHIVO();
    }

    document.querySelectorAll('.boton_MI').forEach((boton) => {
        boton.addEventListener('click', quitarfavoritos);
    });
}



