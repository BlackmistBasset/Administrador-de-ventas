// ------------------------------ E L E M E N T O S G E N E R A L E S ------------------------------
const contenedorSupremo = document.getElementById('contenedor-supremo') // Contenedor de toda la aplicación

// ------------------------------ Datos de las modales ---------------------------------------------

// Vendedoras
const listaVendedoras = document.getElementById('vendedoras') // Select vendedora modal nueva venta
const listaVendedorasEdit = document.getElementById('vendedoras-edit') // Select vendedora modal editar venta
const cargarVendedoras = () => {
    const { vendedoras } = local
    vendedoras.forEach( vendedora => {
        const optionVendedora = document.createElement('option') 
        optionVendedora.innerText = `${vendedora}`
        listaVendedoras.appendChild(optionVendedora)

        const optionVendedoraEdit = document.createElement('option')
        optionVendedoraEdit.innerText = `${vendedora}`
        listaVendedorasEdit.appendChild(optionVendedoraEdit)
    })
}

cargarVendedoras();


//Componentes
const listaComponentes = document.getElementById('componentes') // Select componentes modal nueva venta
const listaComponentesEdit = document.getElementById('componentes-edit') // Select componentes editar venta
const cargarComponentes = () => {
    const { precios } = local
    precios.forEach( ({ componente }) => {
        const optionComponente = document.createElement('option')
        optionComponente.setAttribute('value', componente)
        optionComponente.classList.add('option-componente')
        optionComponente.innerText = `${componente}`
        listaComponentes.appendChild(optionComponente)
        
        const optionComponenteEdit = document.createElement('option');
        optionComponenteEdit.setAttribute('value', componente);
        optionComponenteEdit.classList.add('option-componente')
        optionComponenteEdit.innerText = `${componente}`;
        listaComponentesEdit.appendChild(optionComponenteEdit);
    })
}

cargarComponentes();

//Sucursales
const listaSucursales = document.getElementById('sucursales') // Select sucursal modal nueva venta
const listaSucursalesEdit = document.getElementById('sucursales-edit') // Select sucursal editar venta

const cargarSucursales = () => {
    const { sucursales } = local
    sucursales.forEach( sucursal => {
        const optionSucursal = document.createElement('option')
        optionSucursal.innerText = `${sucursal}`
        listaSucursales.appendChild(optionSucursal)

        const optionSucursalEdit = document.createElement('option')
        optionSucursalEdit.innerText = `${sucursal}`
        listaSucursalesEdit.appendChild(optionSucursalEdit)
    })
}

cargarSucursales();

// ------------------------------ Apertura y cierre de ventanas modal ------------------------------

//NUEVA VENTA
const nuevaVenta = document.getElementById('nueva-venta') // Botón 'Nueva Venta'
const ventanaModalVenta = document.getElementById('background-modal-venta') // Fondo de la ventana modal

nuevaVenta.addEventListener('click', () => {
    ventanaModalVenta.classList.remove('ocultar-modal')
    contenedorSupremo.style.filter = 'blur(5px)'
})

//Aceptar nueva venta
const aceptarNuevaVenta = document.getElementById('nueva-venta-aceptar') // Botón Aceptar 

aceptarNuevaVenta.addEventListener('click', (e) => {
    e.preventDefault();
    ventanaModalVenta.classList.add('ocultar-modal')
    contenedorSupremo.style.filter = 'none'
})

//Cancelar nueva venta
const cancelarNuevaVenta = document.getElementById('nueva-venta-cancelar') // Botón Cancelar 

cancelarNuevaVenta.addEventListener('click', (e) => {
    e.preventDefault();
    ventanaModalVenta.classList.add('ocultar-modal')
    contenedorSupremo.style.filter = 'none' 
})


//EDITAR VENTA
const ventanaModalEditar = document.getElementById('background-modal-editar') // Fondo de la ventana modal
const btnEditar = document.querySelectorAll('.boton-editar'); // Todos los íconos "edit"

const editarVentas = () => {
    for (let i=0; i < btnEditar.length; i++) {
        btnEditar[i].onclick = () => {
            let pedacitoID = parseInt(btnEditar[i].id.slice(7)); 
            console.log(pedacitoID)
            ventanaModalEditar.classList.remove('ocultar-modal')
            contenedorSupremo.style.filter = 'blur(5px)'; 
        }
    }
}

//Aceptar editar venta
const aceptarEditarVenta = document.getElementById('editar-venta-aceptar') // Botón Aceptar

aceptarEditarVenta.addEventListener('click', (e) => {
    e.preventDefault();
    ventanaModalEditar.classList.add('ocultar-modal');
    contenedorSupremo.style.filter = 'none'; 
})

//Cancelar editar venta
const cancelarEditarVenta = document.getElementById('editar-venta-cancelar') // Botón Cancelar

cancelarEditarVenta.addEventListener('click', (e) => {
    e.preventDefault();
    ventanaModalEditar.classList.add('ocultar-modal');
    contenedorSupremo.style.filter = 'none'; 
})


// ELIMINAR VENTA 

const btnEliminar = document.querySelectorAll('.boton-eliminar'); // Todos los íconos "delete"
const ventanaModalEliminar = document.getElementById('background-modal-eliminar') // Fondo de la ventana modal

const eliminarVenta = () => {
    for (let i=0; i < btnEliminar.length; i++) {
        btnEliminar[i].addEventListener('click', () => {
            ventanaModalEliminar.classList.remove('ocultar-modal');
            blurContenedor.style.filter = 'blur(5px)'; 
            let pedacitoID = parseInt(btnEliminar[i].id.slice(9)); 
            aceptarEliminarVenta.setAttribute("deleteID", pedacitoID); 
        })
    } 
    actualizarTabla()
}

//Eliminar venta
const aceptarEliminarVenta = document.getElementById('eliminar-venta-aceptar') // Botón aceptar

aceptarEliminarVenta.addEventListener('click', () => {
    ventanaModalEliminar.classList.add('ocultar-modal');
    blurContenedor.style.filter = 'none'; 
    ventas.forEach((venta, index) => {
        console.log(venta[0] === parseInt(aceptarEliminarVenta.getAttribute('deleteID')))
        console.log("id modal: ", parseInt(aceptarEliminarVenta.getAttribute('deleteID')))
        console.log("id venta: ", venta[0])
        if (venta[0] === parseInt(aceptarEliminarVenta.getAttribute('deleteID'))) {
            ventas.splice(index, 1);
            console.log(ventas)
            actualizarTabla();
        }
    })
})

//Cancelar eliminar venta
const cancelarEliminarVenta = document.getElementById('eliminar-venta-cancelar') // Botón cancelar

cancelarEliminarVenta.addEventListener('click', () => {
    ventanaModalEliminar.classList.add('ocultar-modal');
    blurContenedor.style.filter = 'none'; 
 })
 
 
 