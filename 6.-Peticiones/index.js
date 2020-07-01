const request = require('request');

function getOneCivilization(error, response, body) {
    // JSON.stringify() // de JSON a Cadena
    // JSON.parse() // cadena a JSON
    // console.log(JSON.parse(body).unique_unit);
    const newBody = JSON.parse(body);
    console.log(newBody.unique_unit);
    console.log(response.statusCode);
    // ¿Cómo le haría para traer la siguiente oración por medio de peticiones?
    console.log('Es la unidad Jaguar Warrior que se describe como Aztec unique unit. Attack bonus vs. other infantry');
}

request('https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/1', getOneCivilization);