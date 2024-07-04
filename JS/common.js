fetch("https://dolarapi.com/v1/cotizaciones/uyu")
    .then(response => response.json())
    .then(data => console.log(data));

fetch("https://dolarapi.com/v1/dolares/oficial")
    .then(response => response.json())
    .then(data => console.log(data));


localStorage.setItem('cotizaciones', JSON.stringify(cotizaciones));
const cotizacionesGuardadas = JSON.parse(localStorage.getItem('cotizaciones'));

const ctx = document.getElementById("miGrafica").getContext("2d");
new Chart(ctx, {
    type: "line",
    data: {
    labels: ["Enero", "Febrero", "Marzo"],
    datasets: [{
        label: "Ventas por mes",
        data: [100, 150, 120],
        borderColor: "blue",
        fill: false
    }]
    }
});
