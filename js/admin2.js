const local = {
    vendedoras: ["Ada", "Grace", "Hedy", "Sheryl"],
    sucursales: ["Centro", "Caballito"],
  
    ventas: [
      // tener en cuenta que Date guarda los meses del 0 (enero) al 11 (diciembre)
      { fecha: new Date(2019, 1, 4), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro" },
      { fecha: new Date(2019, 0, 1), nombreVendedora: "Ada", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1500"], sucursal: "Centro"  },
      { fecha: new Date(2019, 0, 2), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "Motherboard MZI"], sucursal: "Centro"  },
      { fecha: new Date(2019, 0, 10), nombreVendedora: "Ada", componentes: ["Monitor ASC 543", "Motherboard ASUS 1200"], sucursal: "Centro"  },
      { fecha: new Date(2019, 0, 12), nombreVendedora: "Grace", componentes: ["Monitor GPRS 3000", "Motherboard ASUS 1200"], sucursal: "Centro"  },
      { fecha: new Date(2019, 1, 24), nombreVendedora: "Sheryl", componentes: ["Motherboard ASUS 1500", "HDD Wezter Dishital"], sucursal: "Caballito"},
      { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Monitor GPRS 3000", "HDD Toyiva"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 1), nombreVendedora: "Ada", componentes: ["Motherboard MZI", "RAM Quinston Fury"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 11), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "RAM Quinston"], sucursal: "Caballito"},
      { fecha: new Date(2019, 1, 15), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "RAM Quinston Fury"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 12), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1500", "HDD Toyiva"], sucursal: "Caballito"},
      { fecha: new Date(2019, 1, 21), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "RAM Quinston"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 8), nombreVendedora: "Sheryl", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 16), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston Fury"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 27), nombreVendedora: "Hedy", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Caballito"},
      { fecha: new Date(2019, 1, 22), nombreVendedora: "Grace", componentes: ["Monitor ASC 543", "HDD Wezter Dishital"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 5), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1500", "RAM Quinston"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 1), nombreVendedora: "Grace", componentes: ["Motherboard MZI", "HDD Wezter Dishital"], sucursal: "Centro"},
      { fecha: new Date(2019, 1, 7), nombreVendedora: "Sheryl", componentes: ["Monitor GPRS 3000", "RAM Quinston"], sucursal: "Caballito"},
      { fecha: new Date(2019, 1, 14), nombreVendedora: "Ada", componentes: ["Motherboard ASUS 1200", "HDD Toyiva"], sucursal: "Centro"}
    ],
  
    precios: [
      { componente: "Monitor GPRS 3000", precio: 200 },
      { componente: "Motherboard ASUS 1500", precio: 120 },
      { componente: "Monitor ASC 543", precio: 250 },
      { componente: "Motherboard ASUS 1200", precio: 100 },
      { componente: "Motherboard MZI", precio: 30 },
      { componente: "HDD Toyiva", precio: 90 },
      { componente: "HDD Wezter Dishital", precio: 75 },
      { componente: "RAM Quinston", precio: 110 },
      { componente: "RAM Quinston Fury", precio: 230 }
    ]
  };

 //1) precioMaquina(componentes): recibe un array de componentes y devuelve el precio de la máquina que se puede armar con esos componentes, que es la suma de los precios de cada componente incluido.
 
const { precios, ventas, vendedoras, sucursales } = local  // Acá se desestructura todo el array

const precioComponente = (componente) => precios.find(item => item.componente === componente).precio   // Busca el componente por su nombre. Retorna el precio

const precioMaquina = (arrayDeComponentes) => {
    let precioComponentes = 0   // Acá se van sumando los precios de cada componente
    arrayDeComponentes.forEach(componente => {  // Acá se itera el array de componentes 
        precioComponentes += precioComponente(componente)  // Acá se aplica la función anterior a cada componente y lo suma al contador
    })
    return precioComponentes 
 }

 //console.log(precioMaquina(['Monitor GPRS 3000', 'Motherboard ASUS 1500'])); // 320 ($200 del monitor + $120 del motherboard)

 // 2) cantidadVentasComponente(componente): recibe un componente y devuelve la cantidad de veces que fue vendido, o sea que formó parte de una máquina que se vendió. 

const cantidadVentasComponente = (componente) => {
    let contadorVentasComponente = 0; // Cuantas veces se vendió éste componente
    ventas.forEach(({ componentes }) => { // Por cada venta del array, accedo a su array de componentes vendidos 
        componentes.forEach(componenteVendido => componenteVendido === componente && contadorVentasComponente++) 
        // Por cada componente del array, busco si figura mi componente y de ser así aumento el contador
    }) 
    return contadorVentasComponente
} 

//console.log(cantidadVentasComponente('Monitor GPRS 3000'))


// Función auxiliar reutilizable que me retorna un array de ventas de una determinada fecha 
const ventasPorFecha = (mes, año) => {
    return ventas.filter(({ fecha }) => fecha.getMonth()+1 === mes && fecha.getFullYear() === año)  //Acá filtro las ventas que se hicieron en esa fecha 
}

//console.log(ventasPorFecha(1, 2019))

// 3) vendedoraDelMes(mes, anio), se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la vendedora que más vendió en plata en el mes. O sea no cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).


const vendedoraDelMes = (mes, año) => {  // Retorna quién hizo más ventas en éste período
    let cuantoVendioCadaVendedora = {}  // El objeto donde voy a cargar mis vendedoras y cuanto vendió cada una 
    vendedoras.forEach( vendedora => {
        cuantoVendioCadaVendedora[vendedora] = 0  // Creo mi objeto con los nombres de las vendedoras y a cada propiedad le asigno 0 como valor inicial
    })
    
    let ventasAFiltrar = ventasPorFecha(mes, año)  // Separo con mi función auxiliar las ventas exclusivas de la fecha pasada como parámetro
    
    ventasAFiltrar.forEach( venta => {  // Itero solo por las ventas filtradas 
        for (propVendedora in cuantoVendioCadaVendedora) {  // Itero por las propiedades de mi objeto 
            if( venta.nombreVendedora === propVendedora ) { //Igualo el nombre de la vendedora que figura en cada venta con la propiedad de mi objeto
                cuantoVendioCadaVendedora[propVendedora] += precioMaquina(venta.componentes) //Voy sumando a cada vendedora el precio de las compus que fue vendiendo
            }
        }
    })


    let resultadoVendedora = ''  // El nombre de la vendedora que quiero que retorne mi función 
    let ventaXVendedora = 0   // El contador donde voy a comparar cuanto vendió cada una 
    for (propVendedora in cuantoVendioCadaVendedora) {
        if(cuantoVendioCadaVendedora[propVendedora] > ventaXVendedora){ //Comparo entre los montos que vendió cada vendedora  
            ventaXVendedora = cuantoVendioCadaVendedora[propVendedora] // Asigno si cuanto vendió es mayor al monto anterior
            resultadoVendedora = propVendedora //Guardo acá el nombre de quien haya vendido el mayor monto
        }
    }
    console.log(cuantoVendioCadaVendedora)
    console.log(resultadoVendedora)
    return resultadoVendedora
}

console.log('resultado de vendedoraDelMes:', vendedoraDelMes(1, 2019))

// 4) ventasMes(mes, anio): Obtener las ventas de un mes. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const ventasMes = (mes, año) => {
    let montoVentas = 0  // Acá voy a guardar el total recaudado de las ventas de determinada fecha
    ventasPorFecha(mes, año).forEach(({componentes}) => {
        montoVentas += precioMaquina(componentes) // Acá sumo los precios de todas las máquinas vendidas en esa fecha
    })
    return montoVentas
}

// console.log(ventasMes(1, 2019)); 

// 5) ventasVendedora(nombre): Obtener las ventas totales realizadas por una vendedora sin límite de fecha

const ventasVendedora = (nombre) => {
    let contadorDeVentas = 0
    let ventasDeEstaVendedora = ventas.filter( venta => venta.nombreVendedora === nombre ) // Filtro las ventas por el nombre de la vendedora

    ventasDeEstaVendedora.forEach( venta => contadorDeVentas += precioMaquina(venta.componentes) ) // Calculo el precio de la venta y lo sumo a contadorDeVentas

    return contadorDeVentas
}

// console.log(ventasVendedora('Sheryl'))

// 6) componenteMasVendido(): Devuelve el nombre del componente que más ventas tuvo historicamente. El dato de la cantidad de ventas es el que indica la función cantidadVentasComponente

const componenteMasVendido = () => {
    let contadorDeVentas = 0
    let componenteGanador = ''
    precios.forEach ( ( {componente} ) => { // Itero por los componentes guardados en el array de precios 
        if ( cantidadVentasComponente(componente) > contadorDeVentas ) { //A cada componente le ejecuto mi función que calcula cuantas veces se vendieron
            contadorDeVentas = cantidadVentasComponente(componente)  // Si el resultado es mayor que el guardado, lo modifico con el nuevo valor
            componenteGanador = componente // Asigno el nombre del componente al que le corresponde la mayor cantidad de veces vendido
        }
    })
    return componenteGanador
}

// console.log(componenteMasVendido())

// 7) huboVentas(mes, anio): Indica si hubo ventas en un mes determinado. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre)

const huboVentas = (mes, anio) => ventasPorFecha(mes, anio).length >= 1  // ventasPorFecha es una función auxiliar que retorna un array de ventas por fecha

// console.log(huboVentas(2, 2019))

// 8) ventasSucursal(sucursal): Obtiene las ventas totales realizadas por una sucursal sin límite de fecha.

const ventasSucursal = (sucursal) => {
    let contadorDeVentas = 0
    let ventasDeEstaSucursal = ventas.filter( venta => venta.sucursal === sucursal ) // Filtro las ventas por sucursal
    console.log(ventasDeEstaSucursal)
    ventasDeEstaSucursal.forEach( venta => contadorDeVentas += precioMaquina(venta.componentes) ) // Calculo el precio de la venta y lo sumo a contadorDeVentas

    return contadorDeVentas
}

 console.log(ventasSucursal('Centro'))

// 9) sucursalDelMes(mes, anio): Se le pasa dos parámetros numéricos, (mes, anio) y devuelve el nombre de la sucursal que más vendió en plata en el mes. No cantidad de ventas, sino importe total de las ventas. El importe de una venta es el que indica la función precioMaquina. El mes es un número entero que va desde el 1 (enero) hasta el 12 (diciembre).

const sucursalDelMes = (mes, año) => {  // Retorna qué sucursal hizo más ventas en éste período
    let resultadoSucursal = ''  // La sucursal que quiero que retorne mi función 
    let ventaXSucursal = 0   // El contador donde voy a comparar cuanto vendió cada una 
    let cuantoVendioCadaSucursal = {}  // El objeto donde voy a cargar mis sucursales y cuanto vendió cada una 
    sucursales.forEach( sucursal => {
        cuantoVendioCadaSucursal[sucursal] = 0  // Creo mi objeto con los nombres de las sucursales y a cada propiedad le asigno 0 como valor inicial
    })

    let ventasAFiltrar = ventasPorFecha(mes, año)  // Separo con mi función auxiliar las ventas exclusivas de la fecha pasada como parámetro

    ventasAFiltrar.forEach( venta => {  // Itero solo por las ventas filtradas 
       for (propSucursal in cuantoVendioCadaSucursal) {  // Itero por las propiedades de mi objeto 
            if( venta.sucursal === propSucursal ) { //Igualo el nombre de la sucursal que figura en cada venta con la propiedad de mi objeto
                cuantoVendioCadaSucursal[propSucursal] += precioMaquina(venta.componentes) //Voy sumando a cada sucursal el precio de las compus que fue vendiendo
            }
            if(cuantoVendioCadaSucursal[propSucursal] > ventaXSucursal){ //Comparo entre los montos que vendió cada sucursal 
                ventaXSucursal = cuantoVendioCadaSucursal[propSucursal] // Asigno el valor que vendió la sucursal si es mayor al anterior
                resultadoSucursal = propSucursal //Guardo acá el nombre de la sucursal que haya vendido el mayor monto
            }
        }
    })
    console.log(cuantoVendioCadaSucursal)
    return resultadoSucursal
}

console.log('Resultado Enero:', sucursalDelMes(1, 2019))
console.log('resultado Febrero:', sucursalDelMes(2, 2019))

// 10) renderPorMes(): Muestra una lista ordenada del importe total vendido por cada mes/año

const renderPorMes = () => {
    const ventasCopia = Array.from(ventas)
    console.log(ventas)
    let ventasConMes = ventasCopia.map(sarasa => { // Modifico las fechas de las  ventas para poder crear el objeto
       // sarasa.fecha = 'cambiame solo en la copia aaaa'
        //venta.fecha = new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric' }).format(fecha);
        return sarasa
    })
console.log('copia del array', ventasConMes)
console.log('log de local.ventas', local.ventas)
    
    // let arrayDeFechas = [] 
    // ventasConMes.forEach(({fecha }) => { // Separo cada fecha para convertirla en propiedad de mi objeto
    //     if (!arrayDeFechas.includes(fecha)) {
    //         arrayDeFechas.push(fecha)
    //     }
    // })

    // let listaPorMes = {}
    // arrayDeFechas.forEach( fecha => { // Asigno en mi objeto las distintas fechas como propiedades
    //     listaPorMes[fecha] = 0
    // })
    
    // console.log(local.ventas)
    // return listaPorMes
}

console.log(renderPorMes())

