// ------------------------------ Creación de tablas ------------------------------
// Funcion ventasSucursal():
// const ventasSucursal = (sucursal) => {
//     const { ventas } = local
//     let contadorDeVentas = 0
//     let ventasDeEstaSucursal = ventas.filter( venta => venta.sucursal === sucursal ) 

//     ventasDeEstaSucursal.forEach( ({ componentes }) => contadorDeVentas += precioMaquina(componentes) ) 

//     return contadorDeVentas
// }

//  Tabla de ventas por Sucursal --------------------------------------------------
const sucursalesMasVentas = document.getElementById('tabla-estadisticas');

const crearTablaEstdisticas = () => {
    const { sucursales } = local
    sucursales.forEach( sucursal => {
        const ventasEnSucursal = document.createElement('tr');
        sucursalesMasVentas.appendChild(ventasEnSucursal);
        ventasEnSucursal.innerHTML = `<td>${sucursal}</td> <td>$ ${ventasSucursal(sucursal)}</td>`;
    })
}
crearTablaEstdisticas();

// Tabla principal de ventas -------------------------------------------------------

const tablaVentas = document.getElementById('tabla-ventas'); // T-body de mi tabla "ventas"

const cargarVentas = () => {
    const { ventas } = local
    ordenarVentasPorFecha() // Ordena las ventas por fecha
    ventas.forEach(venta => { 
        const { fecha, nombreVendedora, sucursal, componentes } = venta
        let itemVenta = document.createElement('tr');
        itemVenta.innerHTML = `
            <td>${fecha.toLocaleDateString('es-ES', {day: 'numeric', month: 'numeric', year: 'numeric'})}</td>
            <td>${nombreVendedora}</td>
            <td>${sucursal}</td>
            <td>${componentes}</td>
            <td>$ ${precioMaquina(componentes)}</td>
            <td><i class="far fa-edit boton-editar" id="editar-"></i> 
                <i class="far fa-trash-alt boton-eliminar" id="eliminar-"></i>
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