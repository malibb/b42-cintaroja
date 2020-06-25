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

// Clase 
// va a ser la plantilla para hacer objetos.
// tener la palabra reservada class

class Carro {
    constructor(duenio, color, velocidad, ruedas, motor, tipoRueda) {
        // inicializar variables
        this.duenio = duenio;
        this.color = color;
        this.velocidad = velocidad;
        this.ruedas = ruedas;
        this.motor = motor;
        this.tipoRueda = tipoRueda;
        this.vendido = false;
    };

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
    };

    doblar() {
        console.log('el carro está doblando');
    };
}

class Rueda {
    constructor(rin, rodada) {
        // inicializar variables
        this.rin = rin;
        this.rodada = rodada;
    };
}

// instancia de la clase === objeto de tipo (inserte nombre de la clase)
// Clase Carro
// carro1 => instancia de la clase === objeto de tipo Carro.
// new Carro


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
// console.log(carro1.arranca());