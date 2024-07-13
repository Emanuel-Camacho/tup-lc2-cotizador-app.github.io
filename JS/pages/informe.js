
// Obtener elementos del DOM
var btnCompartir = document.getElementById('btnCompartir');
var modal = document.getElementById('myModal');
var closeModal = document.getElementById('closeModal');
var formularioCompartir = document.getElementById('formularioCompartir');
var nombreInput = document.getElementById('nombre');
var emailInput = document.getElementById('email');

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


const etiquetas = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"];

// Datos para los diferentes datasets
const datos = {
    "Dólar Oficial": [100, 150, 120, 100, 10, 20],
    "Dólar Blue": [80, 120, 140, 180, 0, 50],
    "Dólar Bolsa (MEP)": [88, 100, 140, 200, 20, 0],
    "Dólar Contado con Liqui (CCL)": [90, 110, 130, 150, 30, 10],
    "Dólar Tarjeta": [120, 80, 110, 130, 70, 40],
    "Dólar Mayorista": [110, 130, 150, 170, 50, 20],
    "Dólar Cripto": [70, 90, 120, 140, 80, 30],
    "Euro": [60, 80, 100, 120, 40, 10],
    "Real Brasileño": [50, 70, 90, 110, 30, 5],
    "Peso Chileno": [40, 60, 80, 100, 20, 0],
    "Peso Uruguayo": [30, 50, 70, 90, 10, 0]
};

// Obtener el contexto del canvas
const ctx = document.getElementById("miGrafica").getContext("2d");

// Inicializar el gráfico con datos predeterminados
const myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: etiquetas,
        datasets: []
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Capturar cambio en el select y actualizar el gráfico
const selectMoneda = document.getElementById("options");
selectMoneda.addEventListener("change", function () {

    const boton_info = document.querySelector('.boton_info');
    boton_info.addEventListener('click', function () {
        const monedaSeleccionada = selectMoneda.value;
        if (monedaSeleccionada === "") {
            // Mostrar todas las monedas
            const datasets = Object.keys(datos).map(moneda => ({
                label: moneda,
                data: datos[moneda],
                borderColor: getRandomColor(), // Función para obtener un color aleatorio
                borderWidth: 1,
                fill: false
            }));
            myChart.data.datasets = datasets;
            myChart.options.scales.y.beginAtZero = true; // Asegurar que el eje y empiece en cero
        } else {
            // Mostrar una moneda específica
            myChart.data.datasets = [{
                label: monedaSeleccionada,
                data: datos[monedaSeleccionada],
                borderColor: getRandomColor(), // Función para obtener un color aleatorio
                borderWidth: 1,
                fill: false
            }];
            myChart.options.scales.y.beginAtZero = false; // No forzar que el eje y empiece en cero
        }
        myChart.update(); // Actualizar el gráfico
    });


});

// Función para obtener un color aleatorio
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('options').addEventListener('change', function () {
    const seleccion = this.value;
});

