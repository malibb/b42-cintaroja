const axios = require('axios');
// endpoint : Ruta de acceso a alguna acción del servidor.
axios.post('https://rickandmortyapi.com/api/location/', {
    id: 1234,
    name: 'Planeta del batch 48'
})
  .then(function ({ data, status }) {
    // handle success
    if(status === 200 ) {
        console.log(data.info);
    }
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })