JAVASCRIPT – SEGUNDA PREENTREGA
SIMULADOR DE OPERACIONES MATEMÁTICAS BÁSICAS

Solicitado por la Cátedra:
comision 63330 
Estructura de la carpeta — acomodado
Variables en js
Arrays de objeto
Al objeto lo construyen con un constructor (CLASS / CONSTRUCTOR)
Metodos de arrays (map, foreach, filter, find)
Functions (nombre acorde) (o arrow function, anónimas o comun)
Al user el meted map, find, filter ,foreach ya estan usando una funcion de orden superior, así que al usar este método YA SE CONSIDERA QUE ESTAN USANDO UNA FUNCION!!!!
Pueden crear si quieren varias
console.logs
Si pueden metan programación defensiva ( no baja puntos ) 
No hace falta el date ni el math
Gente SI O SI GITHUB sino se baja 1 punto
Enviar el link del repository, no del page

Cumplimiento de las premisas:
- Estructura de carpetas
•	Fue creada la carpeta helpers.js para organizar el código y encapsular funcionalidades reutilizables, evitando duplicación y manteniendo el código principal (app.js) más limpio y fácil de leer. Actúa como un módulo que contiene clases, funciones auxiliares y lógica común que el simulador necesita para operar.

- Variables en JS
•	Ejemplo:
const historialOperaciones = [];
o	historialOperaciones es una variable que almacena el historial de todas las operaciones realizadas en un array.
- Arrays de objeto
•	Ejemplo:
historialOperaciones.push(nuevaOperacion);
o	Cada operación realizada se guarda como un objeto de la clase Operacion en el array historialOperaciones.
- Objeto construido con un constructor (CLASS / CONSTRUCTOR)
•	Ejemplo:
export class Operacion {
    constructor(numero1, numero2, operacion, resultado) {
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.operacion = operacion;
        this.resultado = resultado;
    }
}
o	La clase Operacion utiliza un constructor para inicializar las propiedades de cada operación (números, tipo de operación, resultado).
- Métodos de arrays (map, foreach, filter, find)
•	forEach:
o	Usado para recorrer y mostrar el historial completo o filtrado.
historial.forEach((op, index) => {
    mensaje += `${index + 1}.   ${op.numero1} ${op.operacion} ${op.numero2} = ${op.resultado}\n`;
});
•	filter:
o	Usado para filtrar operaciones por un tipo específico.
const operacionesFiltradas = historial.filter(op => op.operacion === criterio);
- Functions (nombre acorde)
•	Todas las funciones tienen nombres descriptivos y relacionados con su propósito:
o	validarNumero: Verifica si la entrada del usuario es válida.
o	validarOperacion: Asegura que el operador sea válido.
o	mostrarHistorialFiltrado: Muestra el historial completo o filtrado según el criterio.
o	iniciarSimulador: Controla el flujo principal del simulador.
- Uso de funciones de orden superior
•	Se detalla en “Métodos de Arrays” el uso de forEach y de filter.
- Console.logs
•	Ejemplo:
console.log(`Resultado: ${resultado}`);
o	Los resultados de las operaciones se imprimen en la consola para facilitar el seguimiento.
- Programación defensiva
•	Ejemplo:
o	Validaciones en las entradas del usuario:
if (numero2 === 0) {
    alert("No se puede dividir entre cero.");
    continue;
}
o	Validación de criterios inválidos en el filtro:
if (!["+", "-", "*", "/", "todas"].includes(criterio)) {
    alert("Criterio inválido. Por favor ingrese una opción válida.");
    continue;
}
o	Evitar historial vacio
if (historial.length === 0) {
    alert("El historial está vacío.");
    return;
}


