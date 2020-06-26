// Objeto literal
const carro = {
    color:'rojo',
    velocidad: 30,
    ruedas: 4,
    motor: 'V6',
    arranca() {
        console.log('run run');
    },
    frena() {
        console.log('iiiiiii');
    },
    doblar() {
        console.log('el carro está doblando');
    }
}

/* 

Clase 

- Es la plantilla para hacer objetos.
- Utiliza la palabra reservada 'class'.

El siguiente ejemplo es la definición de la clase
Carro y el uso de sus propiedades y atributos.

*/
class Carro {
/* 
    El método constructor es necesario
    para agregar propiedades a las clases.
*/
    constructor(duenio, color, velocidad, ruedas, motor, tipoRueda) {
        // Inicializar variables
        this.duenio = duenio;
        this.color = color;
        this.velocidad = velocidad;
        this.ruedas = ruedas;
        this.motor = motor;
        this.tipoRueda = tipoRueda;
        this.vendido = false;
    };
    /*
    Los métodos deben estar dentro de la clase, sin embargo a diferencia del
    objeto literal, estos no están separador por , puesto que son funciones.
    */
    arranca() {
        // evaluando que this.vendido sea igual con true
        if(this.vendido) {
            console.log(`El carro de ${this.duenio} hace run run`);
        } else {
            console.log(`El carro de ${this.duenio} no
            puede hacer run run porque no esta pagado >.<`);
        }
        return true;
    };

    frena() {
        console.log('iiiiiii');
        return true;
    };

    doblar() {
        console.log('el carro está doblando');
        return true;
    };
}
// Clase rueda.
class Rueda {
    constructor(rin, rodada) {
        // inicializar variables
        this.rin = rin;
        this.rodada = rodada;
    };
}

/*

En las siguientes lineas crearemos objetos de las clases arriba mencionadas,
recordemos:

 instancia de la clase === objeto de tipo (inserte nombre de la clase)

 Para la clase Carro: 
    carro1 => (instancia de la clase === objeto de tipo Carro)
    new Carro() => nos devuelve un objeto

*/


// Carro.constructor();
// opcion 1 para crear un carro con tipo de rueda
const carro1 = new Carro('César','rojo', 30, 4, 'V4', new Rueda('aluminio', 34));
// opcion 2 para crear un carro con tipo de rueda
const tipoRueda = new Rueda('alumino', 32);
const carro2 = new Carro('Daniel', 'rojo', 30, 4, 'V4', tipoRueda);

// snake-case => Snake case
// camelCase => Camel case

// console.log(carro);
// console.log(carro1);
console.log(carro1.tipoRueda.rodada);
console.log(carro2.tipoRueda.rodada);
carro2.precio = 200000;
carro1.arranca();
carro2.vendido = true;
carro2.arranca();

const arreglo = ['1','2','3'];
 // '2'
const nombre = 'Malinali Becerril Bernal'
const arregloPalabras = nombre.split(' '); // ['Malinali','Becerril','Bernal'];
// console.log(carro1.arranca());
console.log(`${arregloPalabras[1].charAt(0).toUpperCase()}${arregloPalabras[1].charAt(1).toUpperCase()}`);
