/* 

Estructura básica de creación de una promesa

new Promise((resolve, reject) => {

}); 

resolve: Es un método de promesa que se ejecuta cuando yo lo invoco en la definición de la promesa y este marca el estado de resuelto en una promesa.
reject: Es un método que se ejecuta si la promesa se rechaza (Lo usamos para indicar que no se hizo lo esperado)
*/

/* const miPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Dentro de la promesa')
        if(5 > 1) {
            resolve([1,'me resolvi']);
        } else {
            reject(new Error('algo falló señor :c'));
        }
    }, 1000);
}); */


const ordenPersona = (cliente, orden) => {
     return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(5 > 1) {
                resolve({
                    mensaje: `de ${orden}, muchas gracias ${cliente} por ser nuestro cliente.`,
                    statusPremio: true
                });
            } else {
                reject(new Error(`Algo falló en ordenPersona ${cliente}`));
            }
        }, 1000);
    });
}
// console.log(miPromesa);

ordenPersona('Carla', 'papas, mcflurry')
    .then(({ mensaje, statusPremio }) => {
        console.log(`Te entregaron tu orden ${mensaje}`);
        //return statusPremio;
    })
    .then(respuesta => {
        console.log('respuesta', respuesta)
        console.log(`Te damos un juguete de temporada ${respuesta 
            ? 'Muñeca' 
            : 'Hijoles, ya no hay juguetes xD'}`)
    })
    .catch((error) => {
        console.log(`Hijole, ya no le pudo entregar su comida ${error}`);
    })
    // .finally(() => console.log('Ya se tiene que ir del restaurante'));
