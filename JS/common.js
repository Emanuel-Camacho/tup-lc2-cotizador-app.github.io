fetch("https://dolarapi.com/v1/dolares")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        localStorage.setItem('DOLARES', JSON.stringify(data))
    });
    
    moneda_0 = JSON.parse(localStorage.getItem('DOLARES'));
    
    // dolar oficial
    dolar_H_0 = document.querySelector('.moneda-0 h3');
    dolar_H_0.innerHTML = "Dolar " + moneda_0[0].nombre;

    dolar_C_0 = document.querySelector('.moneda-0 .compra .plata');
    dolar_C_0.textContent = moneda_0[0].compra;

    dolar_V_0 = document.querySelector('.moneda-0 .venta .plata');
    dolar_V_0.innerHTML = moneda_0[0].venta;
    
    // dolar blue
    dolar_H_1 = document.querySelector('.moneda-1 h3');
    dolar_H_1.innerHTML = "Dolar " + moneda_0[1].nombre;

    dolar_C_1 = document.querySelector('.moneda-1 .compra .plata');
    dolar_C_1.textContent = moneda_0[1].compra;

    dolar_V_1 = document.querySelector('.moneda-1 .venta .plata');
    dolar_V_1.innerHTML = moneda_0[1].venta;

    // dolar bolsa
    dolar_H_2 = document.querySelector('.moneda-2 h3');
    dolar_H_2.innerHTML = "Dolar " + moneda_0[2].nombre;

    dolar_C_2 = document.querySelector('.moneda-2 .compra .plata');
    dolar_C_2.textContent = moneda_0[2].compra;

    dolar_V_2 = document.querySelector('.moneda-2 .venta .plata');
    dolar_V_2.innerHTML = moneda_0[2].venta;

    // dolar contado con liquidacion
    dolar_H_3 = document.querySelector('.moneda-3 h3');
    dolar_H_3.innerHTML = "Dolar " + moneda_0[3].nombre;

    dolar_C_3 = document.querySelector('.moneda-3 .compra .plata');
    dolar_C_3.textContent = moneda_0[3].compra;

    dolar_V_3 = document.querySelector('.moneda-3 .venta .plata');
    dolar_V_3.innerHTML = moneda_0[3].venta;

    // dolar mayorista
    dolar_H_4 = document.querySelector('.moneda-4 h3');
    dolar_H_4.innerHTML = "Dolar " + moneda_0[4].nombre;

    dolar_C_4 = document.querySelector('.moneda-4 .compra .plata');
    dolar_C_4.textContent = moneda_0[4].compra;

    dolar_V_4 = document.querySelector('.moneda-4 .venta .plata');
    dolar_V_4.innerHTML = moneda_0[4].venta;

    // dolar cryto
    dolar_H_5 = document.querySelector('.moneda-5 h3');
    dolar_H_5.innerHTML = "Dolar " + moneda_0[5].nombre;

    dolar_C_5 = document.querySelector('.moneda-5 .compra .plata');
    dolar_C_5.textContent = moneda_0[5].compra;

    dolar_V_5 = document.querySelector('.moneda-5 .venta .plata');
    dolar_V_5.innerHTML = moneda_0[5].venta;

    // dolar tarjeta
    dolar_H_6 = document.querySelector('.moneda-6 h3');
    dolar_H_6.innerHTML = "Dolar " + moneda_0[6].nombre;

    dolar_C_6 = document.querySelector('.moneda-6 .compra .plata');
    dolar_C_6.textContent = moneda_0[6].compra;

    dolar_V_6 = document.querySelector('.moneda-6 .venta .plata');
    dolar_V_6.innerHTML = moneda_0[6].venta;