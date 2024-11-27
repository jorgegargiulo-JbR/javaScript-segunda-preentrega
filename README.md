# JAVASCRIPT – SEGUNDA PREENTREGA
## SIMULADOR DE OPERACIONES MATEMÁTICAS BÁSICAS

### Solicitado por la Cátedra:
- comision 63330 
- Estructura de la carpeta — acomodado
- Variables en js
- Arrays de objeto
- Al objeto lo construyen con un constructor (CLASS / CONSTRUCTOR)
- Metodos de arrays (map, foreach, filter, find)
- Functions (nombre acorde) (o arrow function, anónimas o comun)
- Al user el meted map, find, filter ,foreach ya estan usando una funcion de orden superior, así que al usar este método YA SE CONSIDERA QUE ESTAN USANDO UNA FUNCION!!!!
- Pueden crear si quieren varias
console.logs
- Si pueden metan programación defensiva ( no baja puntos ) 
- No hace falta el date ni el math
- Gente SI O SI GITHUB sino se baja 1 punto
- Enviar el link del repository, no del page<br><br><br>

  
### Cumplimiento de las Premisas:<br>


#### Estructura de Carpetas
•	Fue creada la carpeta helpers.js para organizar el código y encapsular funcionalidades reutilizables, evitando duplicación y manteniendo el código principal (app.js) más limpio y fácil de leer. Actúa como un módulo que contiene clases, funciones auxiliares y lógica común que el simulador necesita para operar.<br><br>


#### Variables en JS
Ejemplo de una variable utilizada:
```javascript
const historialOperaciones = [];
```
`historialOperaciones` es un array que almacena todas las operaciones realizadas.<br><br>


#### Arrays de Objeto
Ejemplo de cómo se añaden objetos al array:
```javascript
historialOperaciones.push(nuevaOperacion);
```
Cada operación realizada se guarda como un objeto de la clase `Operacion` en el array `historialOperaciones`.<br><br>


#### Objeto Construido con un Constructor (CLASS / CONSTRUCTOR)
Ejemplo de la clase `Operacion`:
```javascript
export class Operacion {
    constructor(numero1, numero2, operacion, resultado) {
        this.numero1 = numero1;
        this.numero2 = numero2;
        this.operacion = operacion;
        this.resultado = resultado;
    }
}
```
La clase `Operacion` utiliza un constructor para inicializar las propiedades de cada operación.<br><br>


#### Métodos de Arrays (map, foreach, filter, find)
##### forEach
Usado para recorrer y mostrar el historial completo o filtrado:
```javascript
historial.forEach((op, index) => {
    mensaje += `${index + 1}. ${op.numero1} ${op.operacion} ${op.numero2} = ${op.resultado}\n`;
});
```
##### filter
Usado para filtrar operaciones por un tipo específico:
```javascript
const operacionesFiltradas = historial.filter(op => op.operacion === criterio);
```
<br>


#### Funciones (nombre acorde)
Ejemplos de funciones con nombres descriptivos:
```javascript
function validarNumero(input) {
    // Verifica si la entrada del usuario es válida.
}

function validarOperacion(operador) {
    // Asegura que el operador sea válido.
}

function mostrarHistorialFiltrado(criterio) {
    // Muestra el historial completo o filtrado según el criterio.
}

function iniciarSimulador() {
    // Controla el flujo principal del simulador.
}
```
<br>

#### Uso de Funciones de Orden Superior
Se detalla en “Métodos de Arrays” el uso de `forEach` y `filter`.
<br><br>

#### Console.logs
Ejemplo de cómo se usan los `console.log` para imprimir resultados:
```javascript
console.log(`Resultado: ${resultado}`);
```
<br>

#### Programación Defensiva
Ejemplos de validaciones y manejo de errores:
```javascript
// Validación de división por cero
if (numero2 === 0) {
    alert("No se puede dividir entre cero.");
    continue;
}

// Validación de criterios inválidos en el filtro
if (!["+", "-", "*", "/", "todas"].includes(criterio)) {
    alert("Criterio inválido. Por favor ingrese una opción válida.");
    continue;
}

// Evitar historial vacío
if (historialOperaciones.length === 0) {
    alert("El historial está vacío.");
    return;
}
```

