// Clase Operacion: crea objetos con los datos de cada operación realizada
export class Operacion {
    constructor(numero1, numero2, operacion, resultado) {
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.operacion = operacion;
        this.resultado = resultado;
    }
}

// Función para validar los números que ingrese el usuario
export function validarNumero(input) {
    const numero = parseFloat(input);
    if (isNaN(numero)) {
        alert("Entrada inválida. Por favor ingrese un número válido.");
        return null;
    }
    return numero;
}

// Función para validar el tipo de operación
export function validarOperacion(operacion) {
    const operacionesValidas = ["+", "-", "*", "/"];
    if (!operacionesValidas.includes(operacion.toLowerCase())) {
        alert("Operación inválida. Operaciones válidas: suma (+), resta (-), multiplicación (*), división (/).");
        return null;
    }
    return operacion.toLowerCase();
}

// Función para mostrar el historial de operaciones al aplicarle el filtro
export function mostrarHistorialFiltrado(historial) {
    if (historial.length === 0) {
        alert("El historial está vacío.");
        return;
    }

    let continuar = true; // Controla si se sigue mostrando el filtro

    while (continuar) {
        const criterio = prompt(
            "Ingrese el criterio para filtrar el historial:\n" +
            "+ : Sumar\n" +
            "- : Restar\n" +
            "* : Multiplicar\n" +
            "/ : Dividir\n" +
            "= : Mostrar todas las operaciones"
        ).toLowerCase();

        if (criterio === "=") {
            let mensaje = "Historial completo de operaciones:\n";
            historial.forEach((op, index) => {
                mensaje += `${index + 1}.   ${op.numero1} ${op.operacion} ${op.numero2} = ${op.resultado}\n`;
            });
            alert(mensaje);
            continuar = false; // termina el bucle
        } else if (["+","-","*","/"].includes(criterio)) {
            const operacionesFiltradas = historial.filter(op => op.operacion === criterio);
            if (operacionesFiltradas.length === 0) {
                alert(`No hay operaciones registradas para el criterio: ${criterio}`);
            } else {
                let mensaje = `Operaciones filtradas por '${criterio}':\n`;
                operacionesFiltradas.forEach((op, index) => {
                    mensaje += `${index + 1}.   ${op.numero1} ${op.operacion} ${op.numero2} = ${op.resultado}\n`;
                });
                alert(mensaje);
            }
        } else {
            alert("Criterio inválido. Por favor ingrese una opción válida.");
        }
    }
}
