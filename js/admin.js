// ------------------------------ E L E M E N T O S ------------------------------
// ------------------------------ MODAL NUEVA VENTA ------------------------------
const ventanaModalVenta = document.getElementById('ocultar-modal-nueva-venta');
const nuevaVenta = document.getElementById('nueva-venta');
const listaVendedoras = document.getElementById('vendedoras');
const listaComponentes = document.getElementById('componentes');
const listaSucursales = document.getElementById('sucursales');
const aceptarNuevaVenta = document.getElementById('nueva-venta-aceptar');
const cancelarNuevaVenta = document.getElementById('nueva-venta-cancelar');

// ------------------------------ MODAL EDITAR VENTA ------------------------------
const ventanaModalEditar = document.getElementById('ocultar-modal-editar-venta');
const listaVendedorasEdit = document.getElementById('vendedoras-edit');
const listaComponentesEdit = document.getElementById('componentes-edit');
const listaSucursalesEdit = document.getElementById('sucursales-edit');
const aceptarEditarVenta = document.getElementById('editar-venta-aceptar');
const cancelarEditarVenta = document.getElementById('editar-venta-cancelar');

// ------------------------------ MODAL ELIMINAR VENTA ------------------------------
const ventanaModalEliminar = document.getElementById('ocultar-modal-eliminar-venta');
const aceptarEliminarVenta = document.getElementById('eliminar-venta-aceptar');
const cancelarEliminarVenta = document.getElementById('eliminar-venta-cancelar');

// ------------------------------ A R R A Y S ------------------------------
const vendedoras = ["Ada", "Grace", "Hedy", "Sheryl"];

const ventas = [[1, new Date(2019, 1, 4), "Grace", "Centro", ["Monitor GPRS 3000", "Motherboard ASUS 1500"]], [2, new Date(2019, 0, 1), "Ada", "Centro", ["Monitor GPRS 3000", "Motherboard ASUS 1500"]], [3, new Date(2019, 0, 2), "Grace", "Caballito", ["Monitor ASC 543", "Motherboard MZI"]], [4, new Date(2019, 0, 10), "Ada", "Centro", ["Monitor ASC 543", "Motherboard ASUS 1200"]], [5, new Date(2019, 0, 12), "Grace", "Caballito", ["Monitor GPRS 3000", "Motherboard ASUS 1200"]]];

const precios = [["Monitor GPRS 3000", 200], ["Motherboard ASUS 1500", 120], ["Monitor ASC 543", 250], ["Motherboard ASUS 1200", 100], ["Motherboard MZI", 30], ["HDD Toyiva", 90], ["HDD Wezter Dishital", 75], ["RAM Quinston", 110], ["RAM Quinston Fury", 230]];

const sucursales = ["Centro", "Caballito"];

// ------------------------------ L O G I C A ------------------------------

// ------------------------------ Creación de tablas ------------------------------

const sucursalesMasVentas = document.getElementById('tabla-estadisticas');

const crearTablaEstdisticas = () => {
    for (let sucursal of sucursales) {
        const filaEstadisticaSucursal = document.createElement('tr');
        sucursalesMasVentas.appendChild(filaEstadisticaSucursal);
        filaEstadisticaSucursal.innerHTML = `<td>${sucursal}</td> <td>totalVentasSucursal</td>`;
    }
}
crearTablaEstdisticas();

//Dar formato a la fecha
const format = (date, locale, options) => new Intl.DateTimeFormat(locale, options).format(date); 


const tablaVentas = document.getElementById('tabla-ventas');
const crearTablaVentas = () => {
    for (let i=0; i<ventas.length; i++ ) {
        const crearFilaVentas = document.createElement('tr');
        tablaVentas.appendChild(crearFilaVentas);
            for (let z=0; z<ventas[i].length; z++) {
                crearFilaVentas.innerHTML = `
                <td>${format(ventas[i][1], 'es')}</td>
                <td>${ventas[i][2]}</td>
                <td>${ventas[i][3]}</td> 
                <td>${ventas[i][4]}</td>
                <td>Precio Total</td>
                <td class="iconos-edit"><i class="far fa-edit boton-editar" id="editar-${i}"></i> <i class="far fa-trash-alt boton-eliminar" id="eliminar-${i}"></i></td>` 
        }
    }
}
crearTablaVentas();

// ------------------------------ Desplegables del form de la modal Nueva Venta ------------------------------

const sumarVendedoras = () => {
    for (let i=0; i < vendedoras.length; i++){
        const optionVendedora = document.createElement('option');
        listaVendedoras.appendChild(optionVendedora);
        optionVendedora.innerText = `${vendedoras[i]}`;
    }
}
sumarVendedoras();
    
const sumarComponentes = () => {
    for (let i = 0; i < precios.length; i++) {
        const optionComponente = document.createElement('option');
        //optionComponente.setAttribute('id', 'seleccion-componente');
        listaComponentes.appendChild(optionComponente);
        optionComponente.innerText = `${precios[i][0]}`;
    }
}
sumarComponentes();

const sumarSucursales = () => {
    for (let i=0; i < sucursales.length; i++){
            const optionSucursal = document.createElement('option');
            listaSucursales.appendChild(optionSucursal);
            optionSucursal.innerText = `${sucursales[i]}`;
    }
}
sumarSucursales();

// ------------------------------ Desplegables del form de la modal Editar Venta ------------------------------


const sumarVendedorasEdit = () => {
    for (let i=0; i < vendedoras.length; i++){
        const optionVendedora = document.createElement('option');
        listaVendedorasEdit.appendChild(optionVendedora);
        optionVendedora.innerText = `${vendedoras[i]}`;
    }
}
sumarVendedorasEdit();
    
const sumarComponentesEdit = () => {
    for (let i = 0; i < precios.length; i++) {
        const optionComponente = document.createElement('option');
        optionComponente.setAttribute('id', 'seleccion-componente');
        listaComponentesEdit.appendChild(optionComponente);
        optionComponente.innerText = `${precios[i][0]}`;
    }
}
sumarComponentesEdit();

const sumarSucursalesEdit = () => {
    for (let i=0; i < sucursales.length; i++){
            const optionSucursal = document.createElement('option');
            listaSucursalesEdit.appendChild(optionSucursal);
            optionSucursal.innerText = `${sucursales[i]}`;
    }
}
sumarSucursalesEdit();

// ------------------------------ Apertura y cierre de ventanas modal ------------------------------

//NUEVA VENTA

const blurContenedor = document.getElementById('contenedor-supremo');

nuevaVenta.addEventListener('click', () => {
    ventanaModalVenta.classList.remove('ocultar-modal');
    blurContenedor.style.filter = 'blur(5px)'; 
})

//Botón aceptar
aceptarNuevaVenta.addEventListener('click', (e) => {
    e.preventDefault();
    ventanaModalVenta.classList.add('ocultar-modal');
    blurContenedor.style.filter = 'none'; 
})

//Botón cancelar
cancelarNuevaVenta.addEventListener('click', (e) => {
    e.preventDefault();
    ventanaModalVenta.classList.add('ocultar-modal');
    blurContenedor.style.filter = 'none'; 
})


//EDITAR VENTA
const btnEditar = document.querySelectorAll('.boton-editar');
const editarVentas = () => {
    for (let i=0; i < btnEditar.length; i++) {
        btnEditar[i].onclick = () => {
            let pedacitoID = parseInt(btnEditar[i].id.slice(7)); 
            ventanaModalEditar.classList.remove('ocultar-modal')
            blurContenedor.style.filter = 'blur(5px)'; 
        }
    }
}
editarVentas();

//Botón aceptar
aceptarEditarVenta.addEventListener('click', (e) => {
    e.preventDefault();
    ventanaModalEditar.classList.add('ocultar-modal');
    blurContenedor.style.filter = 'none'; 
})

//Botón cancelar
cancelarEditarVenta.addEventListener('click', (e) => {
    e.preventDefault();
    ventanaModalEditar.classList.add('ocultar-modal');
    blurContenedor.style.filter = 'none'; 
})

//Cargar datos form
const formNuevaVenta = document.getElementById('form-nueva-venta');
const formEditarVenta = document.getElementById('form-editar-venta');

const fechaNuevaVenta = document.getElementById('fecha-nueva-venta');
const fechaEditarVenta = document.getElementById('fecha-editar-venta');


// //ELIMINAR VENTA 
const btnEliminar = document.querySelectorAll('.boton-eliminar');
const eliminarVentas = () => {
    for (let i=0; i < btnEliminar.length; i++) {
        btnEliminar[i].onclick = () => {
            let pedacitoID = parseInt(btnEliminar[i].id.slice(7)); 
            ventanaModalEliminar.classList.remove('ocultar-modal');
            blurContenedor.style.filter = 'blur(5px)'; 
        }
    }
}
eliminarVentas();

//Botón Eliminar
 aceptarEliminarVenta.addEventListener('click', () => {
     ventanaModalEliminar.classList.add('ocultar-modal');
     blurContenedor.style.filter = 'none'; 
 })

 //Botón Cancelar
 cancelarEliminarVenta.addEventListener('click', () => {
    ventanaModalEliminar.classList.add('ocultar-modal');
    blurContenedor.style.filter = 'none'; 
 })