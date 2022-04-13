//------------------------------- ACTUALIZAR   TABLA ------------------------------------


//----------------------------- N U E V A    V E N T A ----------------------------------

const formNuevaVenta = document.getElementById('form-nueva-venta')
const fechaNuevaVenta = document.getElementById('fecha-nueva-venta')

const agregarVenta = () => {
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

aceptarNuevaVenta.addEventListener('click', agregarVenta)

//----------------------------- E D I T A R  V E N T A ----------------------------------





