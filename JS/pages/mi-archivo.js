function obtenerFechaActual() {
    // Obtener la fecha actual
    let fecha = new Date();

    // Obtener día, mes y año
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1; // Los meses van de 0 a 11, por eso sumamos 1
    let anio = fecha.getFullYear();

    // Formatear la fecha como DD/MM/AAAA
    let fechaFormateada = `${dia.toString().padStart(2, '0')}/${mes.toString().padStart(2, '0')}/${anio}`;

    console.log(fechaFormateada);
}

// bajar de la nube FAVORITOS
