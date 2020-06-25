
function farenheitToCelsius(gradosF) {
    const resta = gradosF - 32;
    const fraccion = 5/9;
    const multiplicacion = resta * fraccion;
    return multiplicacion;
}
let grados = 25;

/* Arrow */
const farenheitToCelsius2 = grados => (grados - 32) * (5/9) ;

const resultado = farenheitToCelsius(grados);
const resultado2 = farenheitToCelsius2(grados);
console.log(resultado);
console.log(resultado2);

console.log(farenheitToCelsius(89));
console.log(farenheitToCelsius2(89));