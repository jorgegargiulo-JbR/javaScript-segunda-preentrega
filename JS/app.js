import { Operacion, validarNumero, validarOperacion, mostrarHistorialFiltrado } from "./helpers.js";

// Array para almacenar el historial de operaciones
const historialOperaciones = [];

// Función principal del simulador
function iniciarSimulador() {
    alert("Bienvenido al Simulador de Cálculos JbR");

    while (true) {
        // Captura los números que ingresa el usuario
        const numero1 = validarNumero(prompt("Ingrese el primer número:"));
        if (numero1 === null) {
            alert("Reiniciando operación debido a un error en el ingreso del primer número.");
            continue; // Volver al inicio del bucle
        }

        const numero2 = validarNumero(prompt("Ingrese el segundo número:"));
        if (numero2 === null) {
            alert("Reiniciando operación debido a un error en el ingreso del segundo número.");
            continue; // Volver al inicio del bucle
        }

        // Captura la operación que se desea realizar
        const operacion = validarOperacion(
            prompt(
                "Ingrese la operación a realizar:\n" +
                "+ : Sumar\n" +
                "- : Restar\n" +
                "* : Multiplicar\n" +
                "/ : Dividir\n"
            )
        );
        if (!operacion) {
            alert("Reiniciando operación debido a un error en el ingreso del operador.");
            continue; // Volver al inicio del bucle
        }

        // Resuelve la operación
        let resultado;
        switch (operacion) {
            case "+":
                resultado = (numero1 + numero2).toFixed(2);
                break;
            case "-":
                resultado = (numero1 - numero2).toFixed(2);
                break;
            case "*":
                resultado = (numero1 * numero2).toFixed(2);
                break;
            case "/":
                if (numero2 === 0) {
                    alert("No se puede dividir entre cero.");
                    continue; // Volver al inicio del bucle
                }
                resultado = (numero1 / numero2).toFixed(2);
                break;
            default:
                alert("Operación no válida.");
                continue; // Volver al inicio del bucle
        }

        // Crea y almacena la operación
        const nuevaOperacion = new Operacion(numero1, numero2, operacion, parseFloat(resultado));
        historialOperaciones.push(nuevaOperacion);

        // Muestra el resultado
        alert(`Resultado: ${resultado}`);
        console.log(`Resultado: ${resultado}`);

        // Pregunta si desea continuar
        let continuar;
        do {
            continuar = prompt("¿Desea realizar otra operación? (s: sí / n: no)").toLowerCase();
            if (continuar !== "s" && continuar !== "n") {
                alert("Entrada inválida. Por favor, ingrese 's' para sí o 'n' para no.");
            }
        } while (continuar !== "s" && continuar !== "n");

        // Finaliza el bucle si el usuario ingresa "n"
        if (continuar === "n") break;
    }

    // Muestra el historial filtrado
    mostrarHistorialFiltrado(historialOperaciones);
}

// Ejecuta el simulador
iniciarSimulador();
