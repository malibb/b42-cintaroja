const request = require('request');
const star_date = '2020-06-22';
const end_date = '2020-06-29';
const API_KEY = 'krHLnbGXz8b43TZ1fQLi2TBtVDkonxWchzFKkAYU';

request(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${star_date}&end_date=${end_date}&api_key=${API_KEY}`, (error, response, body ) => {
    if (response.statusCode === 200) {
        const nearObjs = JSON.parse(body).near_earth_objects;
        /*const a = { 
            23:[], 
            24:[], 
            25:[]
           }*/ 
        const arreglo = Object.values(nearObjs) // nos devuelve un arreglo de los objetos de cada fecha
        /*

        const a = [
            [{id:23},{id:23},{id:23}], 
            [{id:23}], 
            [{id:23},{id:23}]
        ]

        */
        .map((listaPorFecha) => { // ir revisando cada fecha
             /* [{id:23},{id:23},{id:23}]*/
            const arregloDeAsteriodesPorFecha = listaPorFecha.map((asteroide) => {// iterar por asteroide
                /* {id:23} */
                return {
                    nombreAsteroide: asteroide.id,
                    peligroso: asteroide.is_potentially_hazardous_asteroid ? true: false,
                }
            });
            /* arregloDeAsteriodesPorFecha = [{nombreAsteroide:23},{nombreAsteroide:23},{nombreAsteroide:23}] */ 
            return arregloDeAsteriodesPorFecha;
        });
        /* arreglo = [
            [{nombreAsteroide:23},{nombreAsteroide:23},{nombreAsteroide:23}],
            [{nombreAsteroide:23}],
            [{nombreAsteroide:23},{nombreAsteroide:23},]
        ] */
       // Siguiente nivel de programación funciona : reduce 
       const filtro = arreglo.reduce((acumulador, valorActual) => [
                ...acumulador,
                ...valorActual
        ], []) // [{}, {}]
        // asteriode { nombreAsteroide, peligroso }
        .map(({ nombreAsteroide, peligroso })=> {
            return `El asteriode ${nombreAsteroide} ${ peligroso ? 'es PELIGROSO' : 'no es peligroso'}`;
        });

        console.log(filtro);
        /*
        ... => spread Operator deshacer un objeto en sus partes
        const array1 = [
            [{a:1}],
            [{b:1}],
            [{c:1}, {d:1}]
            ];
        let  acumulador = [ ];
        let valorActual = [{a:1}];
        (acumulador, valorActual) => {
            const nuevoAcumulador = [
                ...acumulador, // sacaramos todos los elementos del acumulador y los agregamos al nuevo arreglo
                ...valorActual // sacaramos todos los elementos del valorActual y los agregamos al nuevo arreglo
            ];
            return nuevoAcumulador; // [ {a:1} ];
        }
        acumulador = [{a:1}];
        valorActual = [{b:1}];
        (acumulador, valorActual) => {
            const nuevoAcumulador = [
                ...acumulador, // sacaramos todos los elementos del acumulador y los agregamos al nuevo arreglo
                ...valorActual // sacaramos todos los elementos del valorActual y los agregamos al nuevo arreglo
            ];
            return nuevoAcumulador; // [ {a:1}, {b:1}];
        }

        acumulador = [{a:1}, {b:1}];
        valorActual = [{c:1}, {d:1}];
        (acumulador, valorActual) => {
            const nuevoAcumulador = [
                ...acumulador, // sacaramos todos los elementos del acumulador y los agregamos al nuevo arreglo
                ...valorActual // sacaramos todos los elementos del valorActual y los agregamos al nuevo arreglo
            ];
            return nuevoAcumulador; // [ {a:1}, {b:1}, {c:1}, {d:1}];
        }

        */
    } 

});