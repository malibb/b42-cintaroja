// CREATE crear POST
// READ leer GET
// UPDATE actualizar PATCH
// SUBSTITUTE substituir PUT
// DELETE borrar

const axios = require('axios');

const author = {
    "name": "Mali",
    "last_name": "Becerril",
    "nacionalidad": "MX",
    "biography": "hola me llamo mali, me gusta leer",
    "gender": "F",
    "age": 21
};

const pasarMisDatosPorElCRUSD = (author) => {
    axios.post('https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/', author)
    .then(({data, status}) =>  {
        if(status === 201){
            console.log(`Creaste un nuevo usuario con el id ${data.id}`);
        }
    })
}

pasarMisDatosPorElCRUSD(author);