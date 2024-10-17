// Función para calcular el factorial de un número y mostrar el procedimiento
function calcularFactorialConProcedimiento(numero) {
    if (numero == 0) {
        return "No existe factorial de 0."
    }

    var factorial = 1;
    // Almacena el procedimiento paso a paso
    var procedimiento = "";

    for (var i = 1; i <= numero; i++) {
        factorial *= i;
        // Agregar el paso actual al procedimiento
        if (i == 1) {
            procedimiento +=  i;
        } else {
            procedimiento += " * " +i ;
        }
    }

    return {
        resultado: factorial,
        procedimiento: procedimiento
    };
}

// Solicitar al usuario ingresar un número
const numeroUsuario = parseInt(prompt("Ingrese un número para calcular su factorial:"));

// Validar el numero ingresado ingreso y calcular el factorial
if (isNaN(numeroUsuario)) {
    console.log("Por favor, ingrese un número válido.");
} else {
    var { resultado, procedimiento } = calcularFactorialConProcedimiento(numeroUsuario);
    document.write("El factorial de " +numeroUsuario+ " es " +resultado + "<br>");
    document.write("Procedimiento:" + procedimiento +" = " + resultado);
}
