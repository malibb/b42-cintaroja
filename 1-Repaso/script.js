/*
Tipos de datos
Tipado débil

Tipos 

string: Cadena de carácteres / palabra '' "" ``
number: Número (float, integer) 
boolean: Booleanos true false 
*** truthy falsy
object : Objeto {}
object : Arreglo []

undefined
nan
Infinity
null

*/

/* Hoisting */
/* ECMA Script 5 */

console.log(typeof numero);

// Contexto global : scope
var numero = 1;

console.log(typeof numero);

gritar();

function gritar() {
    console.log('Aaaaaaaah!', this);
}

/* ECMA Script 6 */

/* Actualizar y reasignar (cambiar tipo de dato) */
let nombreL = '';
nombreL = 'Mali'
nombreL = {};

/* No te permite reasignar */
const persona = {
    nombre: 'Mali'
};

persona.nombre = 'Edwin';

console.log(persona, nombreL);

const mascotas = ['Rayas', 'Mocka', 'Cosa'];

mascotas.push('Paloma');
console.log(mascotas);

function nombreFuncion() {
   return 'Mensaje';
}

console.log(nombreFuncion());
// Definición de una función
const nombreArrowFunction = () => {
    // todo el archivo this
    console.log(variableLet);
}

let variableLet = 'valor';

// ejecución de la función
nombreArrowFunction();


/* Estructuras de control */
/*
for
for each
while do
if else
switch
*/
const a = 1;
if( a === '1' ){
    // bloque de lineas de código dentro del if
} else if( a === '2' ){
    // bloque de lineas de código dentro del if
} else if( a === '3' ){
    // bloque de lineas de código dentro del if
} else {
    // ejectuo
}

switch (a) {
    case '1':
        // lineas de código del switch 1
        break;
    case '2':
        // lineas de código del switch 1
        break;
    case '3':
        // lineas de código del switch 1
        break;
    default:
        // lineas de código que se ejecutan cuando ninguno de los casos de arriba se cumplio
        break;
}


const devolverValores = () => {
    let contador = 0;
    while(true) {
        // contador = contador + 1;
        // contador += 1;
        contador++;
        if( contador === 4){
            break;
        }
    }
    contador = contador >4 ? contador + 3 : contador--;
    return `La cantidad de veces que se contó es ${contador}`;
}

devolverValores();

console.log(1/0);
console.log(0/0);

/**Arrow function */
const nombreArrow4 = () => {
}
const nombreArrow5 = parametro => {}

const nombreArrow3 = parametro => {
    return 'Algo';
}

const nombreArrow2 = parametro => 'Algo';

const nombreArrow1 = (parametro1, parametro2)=> {}

const nombreArrow = (parametro1, parametro2)=> {
    return 'Algo';
};

const variableNueva = nombreArrow3(1);


/** Agrupar información por funcionalidades */

const devolverTiposDeDatos = () => {
    nombreAmigo
}