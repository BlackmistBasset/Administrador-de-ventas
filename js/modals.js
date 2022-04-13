// ------------------------------ E L E M E N T O S G E N E R A L E S ------------------------------
const contenedorSupremo = document.getElementById('contenedor-supremo') // Contenedor de toda la aplicación

const actualizarTabla = () => {
    tablaVentas.innerHTML = ''
    sucursalesMasVentas.innerHTML = ''
    crearTablaEstdisticas() // Ventas por sucursal
    estadisticasVentas() // Producto estrella y vendedora con mas ventas
    cargarVentas() // Ventas de la tabla principal
    btnEliminarVenta() // Genera los id en los botones de eliminar
    btnEditarVentas() // Genera los id en los botones de editar
}

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
const aceptarEditarVenta = document.getElementById('editar-venta-aceptar') // Botón Aceptar

const btnEditarVentas = () => {
    const btnEditar = document.querySelectorAll('.boton-editar'); // Todos los íconos "edit"
    btnEditar.forEach ( button => {
        button.onclick = () => {
            ventanaModalEditar.classList.remove('ocultar-modal')
            contenedorSupremo.style.filter = 'blur(5px)'; 
            let getID = parseInt(button.id.slice(7)); 
            aceptarEditarVenta.setAttribute('editID', getID)
        }
    })
}
btnEditarVentas()

//Aceptar editar venta
const fechaEditarVenta = document.getElementById('fecha-editar-venta');
//const formEditarVenta = document.getElementById('form-editar-venta');


aceptarEditarVenta.addEventListener('click', (e) => {
    e.preventDefault();
    ventanaModalEditar.classList.add('ocultar-modal');
    contenedorSupremo.style.filter = 'none'; 
    ventas.forEach((venta, index) => {
        if (index === parseInt(aceptarEditarVenta.getAttribute('editID'))) {
            let componentesSeleccionados = []
            const listaDeComponentes = document.querySelectorAll('.option-componente')
            listaDeComponentes.forEach ( componente => 
            componente.selected && componentesSeleccionados.push(componente.value))

            venta.fecha = new Date(fechaEditarVenta.value)
            venta.nombreVendedora = listaVendedorasEdit.value
            venta.componentes = componentesSeleccionados
            venta.sucursal = listaSucursalesEdit.value

            actualizarTabla()
        }
    })
})

//Cancelar editar venta
const cancelarEditarVenta = document.getElementById('editar-venta-cancelar') // Botón Cancelar

cancelarEditarVenta.addEventListener('click', (e) => {
    e.preventDefault();
    ventanaModalEditar.classList.add('ocultar-modal');
    contenedorSupremo.style.filter = 'none'; 
})


// ELIMINAR VENTA 

const ventanaModalEliminar = document.getElementById('background-modal-eliminar') // Fondo de la ventana modal

const aceptarEliminarVenta = document.getElementById('eliminar-venta-aceptar') // Botón aceptar
const cancelarEliminarVenta = document.getElementById('eliminar-venta-cancelar') // Botón cancelar


const btnEliminarVenta = () => {
    const btnEliminar = document.querySelectorAll('.boton-eliminar'); // Todos los íconos "delete"
    btnEliminar.forEach (button => {
        button.addEventListener('click', () => { //el evento que se ejecuta cuando se toca un icono
            ventanaModalEliminar.classList.remove('ocultar-modal')
            contenedorSupremo.style.filter = 'blur(5px)'
            let getID = parseInt(button.id.slice(9))
            aceptarEliminarVenta.setAttribute("deleteID", getID) //Se asigna el id de este icono al boton aceptar de la modal
        })
    })
}

btnEliminarVenta() 

//Eliminar venta

const confirmarEliminar = () => { //funcion que se ejecuta al aceptar eliminar una venta
    ventanaModalEliminar.classList.add('ocultar-modal')
    contenedorSupremo.style.filter = 'none'
    ventas.forEach((venta, index) => {
        if (index === parseInt(aceptarEliminarVenta.getAttribute('deleteID'))) {
            ventas.splice(index, 1)
            actualizarTabla()
        }
    })
}

aceptarEliminarVenta.addEventListener('click', confirmarEliminar)

//Cancelar eliminar venta

cancelarEliminarVenta.addEventListener('click', () => {
    ventanaModalEliminar.classList.add('ocultar-modal');
    contenedorSupremo.style.filter = 'none'; 
 })
 
 
 