// ------------------------------ E L E M E N T O S G E N E R A L E S ------------------------------
const contenedorSupremo = document.getElementById('contenedor-supremo') // Contenedor de toda la aplicación

// ------------------------------ Carga de datos de las modales ------------------------------------

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
        optionComponenteEdit.classList.add('option-componente-edit')
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




// ------------------------------ Apertura de ventanas modal ------------------------------

//NUEVA VENTA
const nuevaVenta = document.getElementById('nueva-venta') // Botón 'Nueva Venta'
const ventanaModalVenta = document.getElementById('background-modal-venta') // Fondo de la ventana modal

nuevaVenta.addEventListener('click', () => { // Éste evento abre la modal "nueva venta"
    ventanaModalVenta.classList.remove('ocultar-modal')
    contenedorSupremo.style.filter = 'blur(5px)'
})


//EDITAR VENTA
const ventanaModalEditar = document.getElementById('background-modal-editar') // Fondo de la ventana modal
const aceptarEditarVenta = document.getElementById('editar-venta-aceptar') // Botón Aceptar

const editarVenta = () => {
    const btnEditar = document.querySelectorAll('.boton-editar'); // Todos los íconos "edit"
    btnEditar.forEach ( button => {
        button.addEventListener('click', () => {
            ventanaModalEditar.classList.remove('ocultar-modal')
            contenedorSupremo.style.filter = 'blur(5px)'; 
        })
    })
}
editarVenta()


// ELIMINAR VENTA 
const ventanaModalEliminar = document.getElementById('background-modal-eliminar') // Fondo de la ventana modal

const eliminarVenta = () => { // Esta funcion solo abre la modal de "eliminar"
    const btnEliminar = document.querySelectorAll('.boton-eliminar'); // Todos los íconos "delete"
    btnEliminar.forEach (button => {
        button.addEventListener('click', () => { //el evento que se ejecuta cuando se toca un icono
            ventanaModalEliminar.classList.remove('ocultar-modal')
            contenedorSupremo.style.filter = 'blur(5px)'
        })
    })
}
eliminarVenta()


 
 
 