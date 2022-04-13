// ------------------------------ Creación de tablas ------------------------------

//  Tabla de ventas por Sucursal --------------------------------------------------
const sucursalesMasVentas = document.getElementById('tabla-estadisticas')

const crearTablaEstdisticas = () => {
    const { sucursales } = local
    sucursales.forEach( sucursal => {
        const ventasEnSucursal = document.createElement('tr')
        ventasEnSucursal.innerHTML = `<td>${sucursal}</td> <td>$ ${ventasSucursal(sucursal)}</td>`
        sucursalesMasVentas.appendChild(ventasEnSucursal);
    })
}
crearTablaEstdisticas();

// Tabla principal de ventas -------------------------------------------------------

const tablaVentas = document.getElementById('tabla-ventas') // T-body de mi tabla "ventas"

const cargarVentas = () => {
    const { ventas } = local
    ordenarVentasPorFecha() // Ordena las ventas por fecha
    ventas.forEach((venta, index) => { 
        const { fecha, nombreVendedora, sucursal, componentes } = venta
        let itemVenta = document.createElement('tr')
        itemVenta.innerHTML = `
            <td>${fecha.toLocaleDateString('es-ES', {day: 'numeric', month: 'numeric', year: 'numeric'})}</td>
            <td>${nombreVendedora}</td>
            <td>${sucursal}</td>
            <td>${componentes}</td>
            <td>$ ${precioMaquina(componentes)}</td>
            <td><i class="far fa-edit boton-editar" id="editar-${index}"></i> 
                <i class="far fa-trash-alt boton-eliminar" id="eliminar-${index}"></i>
            </td>
        `
        tablaVentas.appendChild(itemVenta)        
    });
}
cargarVentas();

// Producto estrella y vendedora con más ventas

const productoEstrella = document.getElementById('producto-estrella')
const mejorVendedora = document.getElementById('mejor-vendedora')

const estadisticasVentas = () => {
    productoEstrella.innerText = `${componenteMasVendido()}`
    mejorVendedora.innerText = `${vendedoraQueMasVendio()}`
}

estadisticasVentas()