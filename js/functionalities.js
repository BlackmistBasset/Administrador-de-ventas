//------------------------------- ACTUALIZAR   TABLA ------------------------------------

const actualizarTabla = () => {
    tablaVentas.innerHTML = ''
    sucursalesMasVentas.innerHTML = ''
    crearTablaEstdisticas() // Ventas por sucursal
    estadisticasVentas() // Producto estrella y vendedora con mas ventas
    cargarVentas() // Ventas de la tabla principal
    eliminarVenta() // Abre la modal "eliminar venta"
    btnEliminarVenta() // Genera los id en los botones de eliminar
    editarVenta() // Abre la modal "editar venta"
    btnEditarVenta() // Genera los id en los botones de editar
    setModal() // Carga los datos por default en la modal de editar venta
    unSetModal() // Quita los atributos "selected" de los componentes 
}


//----------------------------- N U E V A    V E N T A ----------------------------------

const formNuevaVenta = document.getElementById('form-nueva-venta')
const fechaNuevaVenta = document.getElementById('fecha-nueva-venta')

const agregarVenta = () => { // Esta función se ejecuta al apretar el botón "aceptar"
    let componentesSeleccionados = []
    const listaDeComponentes = document.querySelectorAll('.option-componente')
    listaDeComponentes.forEach ( componente => 
        componente.selected && componentesSeleccionados.push(componente.value))

    let nuevaVenta = {
        fecha: new Date(fechaNuevaVenta.value),
        nombreVendedora: listaVendedoras.value,
        componentes: componentesSeleccionados,
        sucursal: listaSucursales.value
    }
    
    ventas.push(nuevaVenta)
    actualizarTabla();
}


//Aceptar nueva venta
const aceptarNuevaVenta = document.getElementById('nueva-venta-aceptar') 

aceptarNuevaVenta.addEventListener('click', (e) => {
    e.preventDefault();
    ventanaModalVenta.classList.add('ocultar-modal')
    contenedorSupremo.style.filter = 'none'
    agregarVenta()
})


//Cancelar nueva venta
const cancelarNuevaVenta = document.getElementById('nueva-venta-cancelar') 

cancelarNuevaVenta.addEventListener('click', (e) => {
    e.preventDefault();
    ventanaModalVenta.classList.add('ocultar-modal')
    contenedorSupremo.style.filter = 'none' 
})


//----------------------------- E D I T A R  V E N T A ----------------------------------

let fechaEditarVenta = document.getElementById('fecha-editar-venta')
const listaDeComponentes = document.querySelectorAll('.option-componente-edit')

const setModal = () => { // Setea por defecto los componentes de la venta a editar 
    let componentesSeleccionados = []
    listaDeComponentes.forEach ( componente => 
    componente.selected && componentesSeleccionados.push(componente.value))

    ventas.forEach((venta, index) => {
        if (index === parseInt(aceptarEditarVenta.getAttribute('editID'))) {
            fechaEditarVenta.value = venta.fecha.toLocaleDateString('en-CA', {day: 'numeric', month: 'numeric', year: 'numeric'})
            listaVendedorasEdit.value = venta.nombreVendedora
            listaSucursalesEdit.value = venta.sucursal
            venta.componentes.forEach(componente => {
                listaDeComponentes.forEach ( componenteSelect => {
                    if (componente === componenteSelect.value) {
                        componenteSelect.setAttribute('selected', '')
                    }
                })
            })
        }
    })
}

const unSetModal = () => listaDeComponentes.forEach( componente => 
    componente.removeAttribute('selected', '') )

//EDITAR VENTA

const btnEditarVenta = () => {
    const btnEditar = document.querySelectorAll('.boton-editar'); // Todos los íconos "edit"
    btnEditar.forEach ( button => {
        button.addEventListener('click', () => {
            let getID = parseInt(button.id.slice(7))
            aceptarEditarVenta.setAttribute('editID', getID)
            setModal()
        })
    })
}
btnEditarVenta()

//Aceptar editar venta

aceptarEditarVenta.addEventListener('click', (e) => {
    e.preventDefault();
    ventanaModalEditar.classList.add('ocultar-modal')
    contenedorSupremo.style.filter = 'none'

    let componentesSeleccionados = []
    const listaDeComponentes = document.querySelectorAll('.option-componente-edit')
    listaDeComponentes.forEach ( componente => 
    componente.selected && componentesSeleccionados.push(componente.value))
    ventas.forEach((venta, index) => {

        if (index === parseInt(aceptarEditarVenta.getAttribute('editID'))) {
            venta.fecha = new Date(fechaEditarVenta.value)
            venta.nombreVendedora = listaVendedorasEdit.value
            venta.componentes = componentesSeleccionados
            venta.sucursal = listaSucursalesEdit.value

            actualizarTabla()
            unSetModal()
        }
    })
})


//Cancelar editar venta
const cancelarEditarVenta = document.getElementById('editar-venta-cancelar') // Botón Cancelar

cancelarEditarVenta.addEventListener('click', (e) => {
    e.preventDefault();
    ventanaModalEditar.classList.add('ocultar-modal');
    contenedorSupremo.style.filter = 'none'; 
    unSetModal()
})


//----------------------------- E L I M I N A R  V E N T A ------------------------------
const aceptarEliminarVenta = document.getElementById('eliminar-venta-aceptar') // Botón aceptar
const cancelarEliminarVenta = document.getElementById('eliminar-venta-cancelar') // Botón cancelar


const btnEliminarVenta = () => { // Ésta función asigna el id dinámico al boton de aceptar eliminar
    const btnEliminar = document.querySelectorAll('.boton-eliminar'); // Todos los íconos "delete"
    btnEliminar.forEach (button => {
        button.addEventListener('click', () => { //el evento que se ejecuta cuando se toca un icono
            let getID = parseInt(button.id.slice(9))
            aceptarEliminarVenta.setAttribute("deleteID", getID) 
        })
    })
}

btnEliminarVenta()     


//Eliminar venta

const confirmarEliminar = () => { //funcion que se ejecuta al aceptar eliminar una venta
    const { ventas } = local
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



