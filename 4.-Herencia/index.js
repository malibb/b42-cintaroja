class Animal {
    constructor(ojos, boca, extremidades) {
        this.ojos = ojos;
        this.boca = boca;
        this.extremidades = extremidades;
    }
    respirar() {
        console.log('snif');
    }
}

class Persona {
    constructor(ojos, boca, extremidades,idioma) {
        this.ojos = ojos;
        this.boca = boca;
        this.extremidades = extremidades;
        this.idioma = idioma;
    }
    respirar() {
        console.log('snif');
    }
    pensar() {
        console.log('Estoy pensando')
    }
    hablar() {
        console.log('Bla bla bla, palabras, palabras, palabras')
    }
}
// mascotas (perro y gato)
class Mascota {
    constructor(ojos, boca, extremidades, duenio) {
        this.ojos = ojos;
        this.boca = boca;
        this.extremidades = extremidades;
        this.duenio = duenio;
        this.estaDomesticado = true;
    }
    respirar() {
        console.log('snif');
    }
}

const persona = new Persona(2, 1, 4, 'español');
console.log(persona);