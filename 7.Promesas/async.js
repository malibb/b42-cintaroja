const axios = require('axios');

const funcionNormal = () =>{
    axios.get('https://rickandmortyapi.com/api/character/82')
    .then(({ data }) => {
        console.log(data);
    })
    .catch(({response}) => {
        console.log(response.data);
    })
};
// async await
// Tarea: Refactorizar el googdreads Aaron con async await 
const funcionConContextoAsincrono = async () =>{
    try {
        const { data } = await axios.get('https://rickandmortyapi.com/api/character/8244444');
        console.log(data);
    } catch(e) {
        console.log(e.response.data);
    }
};
// funcionNormal();
funcionConContextoAsincrono();
