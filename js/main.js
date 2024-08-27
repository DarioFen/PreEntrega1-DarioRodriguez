let nombre = prompt("Ingrese su nombre");

alert("Bienvenido " + nombre + " a nuestro calculador de prestamos, a continuacion le pediremos algunos datos relevantes para poder pasarle un detalle de su solicitud");


// Validacion de ubicacion
let ubicacion = parseInt(prompt("Ingrese el numero correspondiente a su departamento de residencia: \n1 - Montevideo \n2 - Canelones\n3 - Maldonado\n4 - Rocha\n5 - Treinta y Tres\n6 - Lavalleja\n7 - Florida\n8 - Durazno\n9 - Cerro Largo\n10 - Tacuarembó\n11 - Rivera\n12 - Artigas\n13 - Salto\n14 - Paysandú\n15 - Río Negro\n16 - Soriano\n17 - Colonia\n18 - San José\n19 - Flores"));

while(ubicacion > 19) {
    ubicacion = parseInt(prompt("Valor incorrecto, debe ingresar un numero entre 1 y 19: \n1 - Montevideo \n2 - Canelones\n3 - Maldonado\n4 - Rocha\n5 - Treinta y Tres\n6 - Lavalleja\n7 - Florida\n8 - Durazno\n9 - Cerro Largo\n10 - Tacuarembó\n11 - Rivera\n12 - Artigas\n13 - Salto\n14 - Paysandú\n15 - Río Negro\n16 - Soriano\n17 - Colonia\n18 - San José\n19 - Flores"));
}

let salario = parseInt(prompt("Ingrese su salario liquido"));


