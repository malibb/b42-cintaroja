function funcionCualquiera(callback) {
    let texto = ' por primera vez'
    console.log(callback(texto));

    setTimeout(()=> {
        console.log('Se ejecutó el setTimeOut')
    },3000);

    texto = ' por segunda vez';
    console.log(callback(texto));
};
// por primera vez
// por segunda vez
// se ejecutó el setTimeOut

funcionCualquiera(texto => {
   return 'me estoy ejecutando' + texto;
});

const escribir = (mensaje) => {
    console.table(mensaje);
}

const ordenSuperior = (mensaje, callback) => {
    callback(mensaje);
}

ordenSuperior('Hola Mundo', escribir);

const compararHoras = (arreglo) => {
    return nuevoArreglo;
}

const mayorQueDosHoras = (arreglo, callback) => {
    return arregloFinal;
} 
const arreglo = [200,300,100,60];

mayorQueDosHoras(arreglo, compararHoras);