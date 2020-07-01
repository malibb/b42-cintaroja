const request = require('request');

function getOneCivilization(error, response, body) {
    // JSON.stringify() // de JSON a Cadena
    // JSON.parse() // cadena a JSON
    // console.log(JSON.parse(body).unique_unit);
    const newBody = JSON.parse(body);
    console.log(newBody.unique_unit);
    const [url] = newBody.unique_unit;
    // cierre de paréntesis :v
    console.log(response.statusCode);
    // request()
    request(url, getOneUnit);
    // ¿Cómo le haría para traer la siguiente oración por medio de peticiones?
}
/*
// recibe 3 los elementos, y su nombre de grupo
// devolver un arreglo y el numero de elementos en un arreglo [arreglo de Objetos, numero de Elementos]
function crearArreglo();

const [arreglo, numero] = crearArreglo('Mali','B42 de roja','Al batch de gera con gera');
const [arregloDeFrutas, noDeFrutas] = crearArreglo('Pera','manzana','melon');

// Destructuración de arreglos.
    const arreglo = ['helado','natilla','papas'];
    // forma común
    const numero1 = arreglo[1];
    // forma nice
    const [,n1,] = arreglo;
    console.log(n1);
*/



function getOneUnit(error, response, body) {
    const newBody = JSON.parse(body);
    if(response.statusCode === 200) {
        console.log(`Es la unidad ${newBody.name} que se describe como ${newBody.description}`);
    }
    // ¿Cómo le haría para traer la siguiente oración por medio de peticiones?
}

request('https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/4', getOneCivilization);