const { Cine } = require('./Cine');
const { Documental } = require('./Documental');
const { Pelicula } = require('./Pelicula');

const cinemex = new Cine('Cinemex Reforma');
// reproducir el documental Cosmos
const documental = new Documental();
// reproducir debe recibir un largometraje

cinemex.reproducir(documental);

// reproducir su película Favorita
const pelicula = new Pelicula();

cinemex.reproducir(pelicula);
