// Definición de objeto literal
const objeto = {
    nombre:'',
    edad: 0,
    metodo () {
        return 22;
    }
}

objeto.nombre;
objeto.edad;
objeto.metodo; //metodo () { return 22; }
objeto.metodo(); // devolver 22
objeto.nuevaPropiedad = 'valor de la nueva propiedad';

console.log(objeto);

const variable = null;
const persona1 = {
    // clave: valor
    name: 'Mali',
    age: 21,
    isHuman: true,
    // ecma 6
    getAge () {
        return this.age;
    },
    // ecma 5
    setAge(newAge) {
        this.age = newAge;
    }
};

persona1.setAge(22);

console.log(`Hola soy ${persona1.name} 
                    tengo ${persona1.getAge()}       🥶
años.`);

/**
 
1.- Elige un pingüino de la lista de pingüinos ficticios de wikipedia 
https://en.wikipedia.org/wiki/List_of_fictional_penguins
    Crea un objeto llamado myPenguin con propiedades que representen
    la información listada en cada columna en esa página de wikipedia
    (por ejemplo: character, origin...)

2.- Imprime el nombre del pingüino en consola, como si fuera un mensaje
    de bienvenida. La salida debe ser algo como:
    "Hola, soy un pingüino y mi nombre es [NOMBRE AQUÍ]"

3.- Escribe otra línea de código que añada una nueva propiedad a tu 
    pingüino llamada puedeVolar y asignalo a falso.
    Nota: No modifiques el código original donde definiste a tu pingüino

4.- Añade un método a tu pingüino llamado 'graznar' que muestre en 
    consola: "kaww kaww!!"
    Nota: Sí, así suenan los pingüinos
    Nota de la Nota: No modifiques el código previo. Hazlo en una
    nueva línea de código.

 */