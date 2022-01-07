// ------------------------------ E L E M E N T O S ------------------------------
// ------------------------------ MODAL NUEVA VENTA ------------------------------
const ventanaModal = document.getElementById('ocultar-modal');
const nuevaVenta = document.getElementById('nueva-venta');
const listaVendedoras = document.getElementById('vendedoras');
const listaComponentes = document.getElementById('componentes');
const listaSucursales = document.getElementById('sucursales');
const aceptarNuevaVenta = document.getElementById('nueva-venta-aceptar');
const cancelarNuevaVenta = document.getElementById('nueva-venta-cancelar');


// ------------------------------ A R R A Y S ------------------------------
const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

const ventas = [[1, new Date(2019, 1, 4), "Grace", "Centro", ["Monitor GPRS 3000", "Motherboard ASUS 1500"]], [2, new Date(2019, 0, 1), "Ada", "Centro", ["Monitor GPRS 3000", "Motherboard ASUS 1500"]], [3, new Date(2019, 0, 2), "Grace", "Caballito", ["Monitor ASC 543", "Motherboard MZI"]], [4, new Date(2019, 0, 10), "Ada", "Centro", ["Monitor ASC 543", "Motherboard ASUS 1200"]], [5, new Date(2019, 0, 12), "Grace", "Caballito", ["Monitor GPRS 3000", "Motherboard ASUS 1200"]]];

const precios = [["Monitor GPRS 3000", 200], ["Motherboard ASUS 1500", 120], ["Monitor ASC 543", 250], ["Motherboard ASUS 1200", 100], ["Motherboard MZI", 30], ["HDD Toyiva", 90], ["HDD Wezter Dishital", 75], ["RAM Quinston", 110], ["RAM Quinston Fury", 230]];

const sucursales = ["Centro", "Caballito"];

// ------------------------------ L O G I C A ------------------------------

// ------------------------------ Desplegables del form de la modal ------------------------------

const sumarVendedoras = (e) => {
    for (let i=0; i < vendedoras.length; i++){
        const optionVendedora = document.createElement('option');
        listaVendedoras.appendChild(optionVendedora);
        optionVendedora.innerText = `${vendedoras[i]}`;
    }
    return vendedoras;
    }
    
const sumarComponentes = (e) => {
        for (let i=0; i < precios.length; i++){
            const optionComponente = document.createElement('option');
            optionComponente.setAttribute('id', 'seleccion-componente');
            listaComponentes.appendChild(optionComponente);
            optionComponente.innerText = `${precios[i][0]}`;
    }
    return precios;
    }

    const sumarSucursales = (e) => {
        for (let i=0; i < sucursales.length; i++){
            const optionSucursal = document.createElement('option');
            listaSucursales.appendChild(optionSucursal);
            optionSucursal.innerText = `${sucursales[i]}`;
        }
        return sucursales;
        }

// ------------------------------ Apertura y cierre de ventanas modal ------------------------------
nuevaVenta.addEventListener('click', (e) => {
    ventanaModal.classList.remove('ocultar-modal');
    sumarVendedoras();
    sumarComponentes();
    sumarSucursales();
})

aceptarNuevaVenta.addEventListener('click', () => {
    ventanaModal.classList.add('ocultar-modal');
})

cancelarNuevaVenta.addEventListener('click', () => {
    ventanaModal.classList.add('ocultar-modal');
})

