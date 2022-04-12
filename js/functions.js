// const local = {
//     vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
//     sucursales: ["Centro", "Caballito"],
  
//     ventas: [
//       // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
//       { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
//       { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"  },
//       { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"  },
//       { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"  },
//       { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"  },
//       { fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
//       { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
//       { fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard MZI", "RAM Quinston Fury"], sucursal: "Centro"},
//       { fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
//       { fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
//       { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
//       { fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "RAM Quinston"], sucursal: "Centro"},
//       { fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
//       { fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
//       { fecha: new Date(2019, 1, 27), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
//       { fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
//       { fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
//       { fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "HDD Wezter Dishital"], sucursal: "Centro"},
//       { fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
//       { fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
//     ],
  
//     precios: [
//       { componente: "Monitor GPRS 3000", precio: 200 },
//       { componente: "Motherboard ASUS 1500", precio: 120 },
//       { componente: "Monitor ASC 543", precio: 250 },
//       { componente: "Motherboard ASUS 1200", precio: 100 },
//       { componente: "Motherboard MZI", precio: 30 },
//       { componente: "HDD Toyiva", precio: 90 },
//       { componente: "HDD Wezter Dishital", precio: 75 },
//       { componente: "RAM Quinston", precio: 110 },
//       { componente: "RAM Quinston Fury", precio: 230 }
//     ]
//   }

 // 1) precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.
 
const { precios, ventas, vendedoras, sucursales } = local 


//Función Auxiliar
const precioComponente = (componente) => precios.find(item => item.componente === componente).precio 


const precioMaquina = (arrayDeComponentes) => {
    let precioComponentes = 0   
    arrayDeComponentes.forEach(componente => precioComponentes += precioComponente(componente))
    return precioComponentes 
 }

 //console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500']))


 // 2) cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. 

const cantidadVentasComponente = (componente) => {
    let contadorVentasComponente = 0; 
    ventas.forEach(({ componentes }) => componentes.forEach(componenteVendido => 
        componenteVendido === componente && contadorVentasComponente++)) 
    return contadorVentasComponente
} 

//console.log(cantidadVentasComponente('Monitor GPRS 3000'))


// Función auxiliar 
const ventasPorFecha = (mes, año) => ventas.filter(({ fecha }) => fecha.getMonth()+1 === mes && fecha.getFullYear() === año)

//console.log(ventasPorFecha(1, 2019))


// 3) vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).


const vendedoraDelMes = (mes, año) => { 
    let listaVendedoras = {} 
    vendedoras.forEach( vendedora => listaVendedoras[vendedora] = 0 )
    
    let ventasAFiltrar = ventasPorFecha(mes, año)  
    
    ventasAFiltrar.forEach( venta => { 
        for (cadaVendedora in listaVendedoras) {  
            if( venta.nombreVendedora === cadaVendedora ) {
                listaVendedoras[cadaVendedora] += precioMaquina(venta.componentes) 
            }
        }
    })

    let resultadoVendedora = ''
    let ventaXVendedora = 0 

    for (cadaVendedora in listaVendedoras) {
        if(listaVendedoras[cadaVendedora] > ventaXVendedora){ 
            ventaXVendedora = listaVendedoras[cadaVendedora]
            resultadoVendedora = cadaVendedora 
        }
    }
    
    return resultadoVendedora
}

//console.log('resultado de vendedoraDelMes:', vendedoraDelMes(1, 2019))


// 4) ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const ventasMes = (mes, año) => {
    let montoVentas = 0  
    ventasPorFecha(mes, año).forEach( ({ componentes }) => montoVentas += precioMaquina(componentes) )
    return montoVentas
}

 // console.log(ventasMes(2, 2019)); 


// 5) ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha

const ventasVendedora = (nombre) => {
    let contadorDeVentas = 0
    let ventasDeEstaVendedora = ventas.filter( venta => venta.nombreVendedora === nombre ) 

    ventasDeEstaVendedora.forEach( venta => contadorDeVentas += precioMaquina(venta.componentes) )

    return contadorDeVentas
}

console.log(ventasVendedora('Grace'))


// Función Auxiliar para el render final
const vendedoraQueMasVendio = () => {
    let mayorVenta = 0
    let vendedoraGanadora = ''
    vendedoras.forEach( vendedora => {
       if(ventasVendedora(vendedora) > mayorVenta) {
           mayorVenta = ventasVendedora(vendedora)
           vendedoraGanadora = vendedora
       }
    })
    return vendedoraGanadora
}

//console.log(vendedoraQueMasVendio())


// 6) componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

const componenteMasVendido = () => {
    let contadorDeVentas = 0
    let componenteGanador = ''
    precios.forEach ( ( {componente} ) => {
        if ( cantidadVentasComponente(componente) > contadorDeVentas ) { 
            contadorDeVentas = cantidadVentasComponente(componente) 
            componenteGanador = componente
        }
    })

    return componenteGanador
}

// console.log(componenteMasVendido())


// 7) huboVentas(mes, anio): Indica si hubo ventas en un mes determinado. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre)

const huboVentas = (mes, anio) => ventasPorFecha(mes, anio).length >= 1  

// console.log(huboVentas(2, 2019))


// 8) ventasSucursal(sucursal): Obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

const ventasSucursal = (sucursal) => {
    let contadorDeVentas = 0
    let ventasDeEstaSucursal = ventas.filter( venta => venta.sucursal === sucursal ) 

    ventasDeEstaSucursal.forEach( ({ componentes }) => contadorDeVentas += precioMaquina(componentes) ) 

    return contadorDeVentas
}

//console.log(ventasSucursal('Centro'))


// 9) sucursalDelMes(mes, anio): Se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const sucursalDelMes = (mes, año) => { 
    let resultadoSucursal = '' 
    let ventaXSucursal = 0 
    let cuantoVendioCadaSucursal = {}  
    sucursales.forEach( sucursal => {
        cuantoVendioCadaSucursal[sucursal] = 0 
    })

    let ventasAFiltrar = ventasPorFecha(mes, año)  

    ventasAFiltrar.forEach( venta => {  
       for (propSucursal in cuantoVendioCadaSucursal) {  
            if( venta.sucursal === propSucursal ) {
                cuantoVendioCadaSucursal[propSucursal] += precioMaquina(venta.componentes)
            }

            if(cuantoVendioCadaSucursal[propSucursal] > ventaXSucursal){ 
                ventaXSucursal = cuantoVendioCadaSucursal[propSucursal] 
                resultadoSucursal = propSucursal
            }
        }
    })

    return resultadoSucursal
}

// console.log('Resultado Enero:', sucursalDelMes(1, 2019))


// Función auxiliar
const ordenarVentasPorFecha = () => {
    return ventas.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime())
}

// console.log(ordenarVentasPorFecha())


// 10) renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año

const renderPorMes = () => {
    
    let dateArray = [] 
    ordenarVentasPorFecha().forEach(({ fecha }) => { 
        if (!dateArray.includes(fecha.toLocaleDateString('es-ES', {month: 'long', year: 'numeric'}))) {
            dateArray.push(fecha.toLocaleDateString('es-ES', {month: 'long', year: 'numeric'})) 
        }
    })

    let renderMes = {}
    dateArray.forEach( date => { 
        const dateParse = new Date(date) 
        renderMes[date] = ventasMes(dateParse.getMonth()+1, dateParse.getFullYear())
    })

    return renderMes
}

//console.log(renderPorMes())


// 12) renderPorSucursal(): Muestra una lista del importe total vendido por cada sucursal

const renderPorSucursal = () => {
    let renderSucursal = {}
    sucursales.forEach( sucursal => renderSucursal[sucursal] = ventasSucursal(sucursal) )

    return renderSucursal
}

//console.log(renderPorSucursal())


// 13) render(): muestra la unión de los dos reportes anteriores, cual fue el producto más vendido y la vendedora que más ingresos generó

const render = () => {
    return {
        'Reporte de ventas por mes:': renderPorMes(),
        'Ventas por sucursal:': renderPorSucursal(),
        'Producto estrella:': componenteMasVendido(),
        'Vendedora que más ingresos generó': vendedoraQueMasVendio(),
    }
}

//console.log(render())