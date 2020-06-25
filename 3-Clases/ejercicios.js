/**
 1.- Haz una clase llamada Persona que siga las siguientes condiciones:
	 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
	 calcularIMC()
	 esMayorDeEdad()
	 El constructor pide nombre, edad,sexo,peso y altura
     Generar el RFC a partir de el nombre, fechaNacimiento y sexo
*/
class Persona {
    constructor(fechaNacimiento){
        this.fechaNacimiento = fechaNacimiento;
    }
    getAge(){
        this.fechaNacimiento;
        // diferencia de fecha de nacimiento al día de hoy
        /** Ejemplos de cálculos de edad sin terminar
        const birthday = new Date();
        const dia = birthday.getDate();
        let mes = birthday.getMonth();
        const anio = birthday.getFullYear();

        console.log(birthday, dia-9, mes-8, anio-1998);
        if( (mes-8) <0) {
        console.log(birthday, dia-9, mes+12-8, anio-1998-1);
        }

        if(8 > mes){
        console.log('edad', anio-1998 -1);
        } else {
            console.log('edad', anio-1998);
        }
        */
    }
    esMayorDeEdad(){
        // getAge()
    }
}
/*
2.- Crear una clase Cuenta que tenga los siguientes atributos y métodos:
	 -Titular y cantidad, estado 
	 -ingresar(cantidad)
	 -retirar(cantidad)
	 Hacer las validaciones previas
	 Como regla de negocio no debe de tener más de $900 y menos de $10
 */