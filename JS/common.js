fetch("https://dolarapi.com/v1/dolares")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        localStorage.setItem('DOLARES', JSON.stringify(data))

    });
    
    // dolar oficial
    moneda_0 = JSON.parse(localStorage.getItem('DOLARES'));

    dolar_H_0 = document.querySelector('.moneda-0 h3');
    dolar_H_0.innerHTML = "Dolar " + moneda_0[0].nombre;

    dolar_C_0 = document.querySelector('.moneda-0 .compra .plata');
    dolar_C_0.textContent = moneda_0[0].compra;

    dolar_V_0 = document.querySelector('.moneda-0 .venta .plata');
    dolar_V_0.innerHTML = moneda_0[0].venta;
    
    // dolar blue
