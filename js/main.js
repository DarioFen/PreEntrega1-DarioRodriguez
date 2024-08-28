/**
 * FUNCIONES
 */

function calcular (salario, solicitado, cuotas, sucursal) {
    const limitePorcentajeValorCuota = 20;
    let tasaPorcentaje;
    if(solicitado <= 100000) {
        tasaPorcentaje = 9
    } else {
        tasaPorcentaje = 7.5
    }
    
    const deudaTotal = solicitado + ((tasaPorcentaje * solicitado) / 100)
    const valorCuota = (deudaTotal / cuotas);
    const maximoPermitidoValorCuota = (limitePorcentajeValorCuota * salario) / 100;

    if(valorCuota > maximoPermitidoValorCuota) {
        return console.log("El valor de la cuota supera el 20% de su salario, lamentamos no poder confirmar su solicitud")
    }
    console.log("Valor solicitado: $" + solicitado);
    console.log("Cantidad de cuotas: " + cuotas);
    console.log("valor de la cuota: $" + valorCuota.toFixed(2));
    console.log("Tasa de interes: " + tasaPorcentaje + "%");
    sucursales(sucursal);
    console.log("Gracias por confiar en nosotros!");
  }

  function sucursales(ubicacion) {
    switch(ubicacion) {
        case 1:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: Magallanes 1322, Montevideo");
        break;
        case 2:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: Bvar Artigas 101, frente a la plaza, Canelones");
        break;
        case 3:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: Av. Gorlero 123, Maldonado");
        break;
        case 4:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: 18 de Julio 456, Rocha");
        break;
        case 5:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: Rincón 789, Treinta y Tres");
        break;
        case 6:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: Calle de los Inmuebles 321, Lavalleja");
        break;
        case 7:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: 25 de Mayo 654, Florida");
        break;
        case 8:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: Artigas 987, Durazno");
        break;
        case 9:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: Av. Herrera 222, Cerro Largo");
        break;
        case 10:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: Calle de la Libertad 333, Tacuarembó");
        break;
        case 11:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: Rivera 444, Rivera");
        break;
        case 12:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: Gral. Flores 555, Artigas");
        break;
        case 13:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: Uruguay 666, Salto");
        break;
        case 14:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: Colón 777, Paysandú");
        break;
        case 15:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: Batlle y Ordóñez 888, Río Negro");
        break;
        case 16:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: Sarandí 999, Soriano");
        break;
        case 17:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: Av. Artigas 1010, Colonia");
        break;
        case 18:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: 18 de Julio 1111, San José");
        break;
        case 19:
            console.log("Puede gestionar su préstamo en su sucursal mas cercana: Avenidas 1212, Flores");
        break;
        default:
            console.log("Número de departamento no válido. Por favor, ingrese un número del 1 al 19.");
    }
}



/**
 * CODIGO
 */
const bienvenida = alert("Bienvenido a superBank!")
const nombre = prompt("Ingrese su nombre");

alert("Bienvenido " + nombre + " a nuestro calculador de prestamos, a continuacion le pediremos algunos datos relevantes para poder pasarle un detalle de su solicitud");


// Validacion de ubicacion
let ubicacion = parseInt(prompt("Ingrese el numero correspondiente a su departamento de residencia: \n1 - Montevideo \n2 - Canelones\n3 - Maldonado\n4 - Rocha\n5 - Treinta y Tres\n6 - Lavalleja\n7 - Florida\n8 - Durazno\n9 - Cerro Largo\n10 - Tacuarembó\n11 - Rivera\n12 - Artigas\n13 - Salto\n14 - Paysandú\n15 - Río Negro\n16 - Soriano\n17 - Colonia\n18 - San José\n19 - Flores"));

while(ubicacion > 19) {
    ubicacion = parseInt(prompt("Valor incorrecto, debe ingresar un numero entre 1 y 19: \n1 - Montevideo \n2 - Canelones\n3 - Maldonado\n4 - Rocha\n5 - Treinta y Tres\n6 - Lavalleja\n7 - Florida\n8 - Durazno\n9 - Cerro Largo\n10 - Tacuarembó\n11 - Rivera\n12 - Artigas\n13 - Salto\n14 - Paysandú\n15 - Río Negro\n16 - Soriano\n17 - Colonia\n18 - San José\n19 - Flores"));
}

const salario = parseInt(prompt("Ingrese su salario liquido"));
const dineroSolicitado = parseInt(prompt("Cuanto dinero necesitas?"));

let cantidadCuotas = parseInt(prompt("En cuantas cuotas? puede solicitar hasta 24 cuotas"));
while(cantidadCuotas > 24) {
    cantidadCuotas = parseInt(prompt("Valor incorrecto, solo puede solicitar hasta 24 cuotas"))
}

calcular(salario,dineroSolicitado,cantidadCuotas,ubicacion);


