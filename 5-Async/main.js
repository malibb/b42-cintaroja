function getUsuarios(callback, exito){
    const usuarios = [
        {
            name: 'Mali'
        },
        {
            name: 'Ernesto'
        },
        {
            name: 'Eusebio'
        },
    ];
    // simular consultar API
    setTimeout(() => {
        // status code
        if(exito){
            callback(usuarios, '200 todo chido');
            /*
            (usuarios, '200 todo chido') => {
                console.log(users, mensaje);
            }
            }*/
        } else {
            callback(usuarios, '404 nada chido :c');
            /*
            (usuarios, '404 nada chido :c') => {
                console.log(users, mensaje);
            }
            }*/
        }
        
    }, 3000);
}

const recibirUsuarios = (users, mensaje) => {
    console.log(users, mensaje);
}

const recibirUsuarios = (users, mensaje) => {
    console.log(users, mensaje);
}

/// getUsuarios(function callback (usuarios, mensaje))
getUsuarios(recibirUsuarios, true);




// Array
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((elementoActual) => {
  	console.log(elementoActual);
	return elementoActual * 2;
});

// console.log(array1);
//console.log(map1);
// String

/*

1.- Muestra un mensaje mediante un callback.

La función de orden superior que escribas debe poder mostrar el mensaje como 
console.warn, console.info, o cualquier método para pintar en consola del objeto console.

2.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
EJEMPLO [120, 80, 200, 100]
    y tomar solo las cantidades

mayores a dos horas (hacer la comparación en horas) 
mediante un callback.


*/