function sonIguales(x, y) {
    // Retorna true si "x" e "y" son iguales.
    // De lo contrario, retorna false.
    // Tu código:
    if (x === y){
        return true;
    } else {
        return false;
    }

}

function tienenMismaLongitud(str1, str2) {
    // Retorna true si los dos strings tienen la misma longitud.
    // De lo contrario, retorna false.
    // Tu código:
    if (str1.length === str2.length){
        return true
    } else {
        return false
    }
}

function mayoriaDeEdad(edad) {
    // Determinar si la persona puede ingresar al evento según su edad.
    // Si tiene 18 años ó más debe retornar el string: "Allowed".
    // Caso contrario: "Not allowed".
    // Tu código:
    if (edad >= 18){
        return 'Allowed'
    } else {
        return 'Not allowed'
    }
}

console.log(mayoriaDeEdad(23))
console.log(mayoriaDeEdad(16))


function conbinarNombres(nombre, apellido){
    return nombre + ' ' + apellido
}

console.log(conbinarNombres("Robby", "Baggio"))

function obtenerSaludo(nombre) {
    return 'Hola ' + nombre + '!'
}

console.log(obtenerSaludo('Grabois'))

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
    if (letra.length !== 1) {
      return "Dato incorrecto";
    } else {
      let vocal = letra.toLowerCase();
      if (vocal === "a" || vocal === "e" || vocal === "i" || vocal === "o" || vocal === "u") {
        return "Es vocal";
      } else {
        return "Dato incorrecto";
      }
    }
}
console.log(esVocal("L"))
console.log(esVocal("I"))
console.log(esVocal("o"))

function saludo(idioma) {
    // Retornar un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!".
    // Si "idioma" es "mandarin", devuelve "Ni Hao!".
    // Si "idioma" es "ingles", devuelve "Hello!".
    // Si "idioma" no es ninguno de los anteriores o es `undefined` devuelve "Hola!".
    // Tu código:

     if(idioma === 'aleman'){
        return "Guten Tag!";
     } else if(idioma === 'mandarin'){
        return "Ni Hao"
     } else if(idioma === 'ingles'){
        return "Hello"
     } else {
        return "Hola!"
     }
     
}

console.log(saludo(undefined))

function colors(color) {
    // La función recibe un color. Retornar el string correspondiente:
    // En caso que el color recibido sea "blue"   --> "This is blue".
    // En caso que el color recibido sea "red"    --> "This is red".
    // En caso que el color recibido sea "green"  --> "This is green".
    // En caso que el color recibido sea "orange" --> "This is orange".
    // Si no es ninguno de esos colores           --> "Color not found".
    // IMPORTANTE: utilizar el statement SWITCH.
    // Tu código:

    switch (color) {
        case 'blue':
            return 'this is blue';
        case 'red':
            return "this is red";
        case "green":
            return 'this is green';
        case 'orange':
            return "This is orange";    
        default: 
            return 'Color not found';
    }
}

// let num = 2;

// switch (num) {
//     case 1:
//         console.log("Es uno");
//         break;
//     case 2:
//         console.log("Es dos");
//         break;
//     case 3:
//         console.log("Es tres");
//         break;
//     default:
//         console.log("No es ni uno, dos ni tres");
// }

function esEntero(num) {
    // Retornar true si "num" es un entero, ya sea positivo, negativo o cero.
    // Ejemplo: 0.8   ---> false
    // Ejemplo: 1     ---> true
    // Ejemplo: (-10) ---> true
    // De lo contrario, retorna false.
    // Tu código:
    if (Number.isInteger(num) || num === 0) {
       return true;
     } else {
       return false;
 }
 }

 function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    } else if (num % 3 === 0) {
        return "fizz";
    } else if (num % 5 === 0) {
        return "buzz";
    } else {
        return false;
    }
}

console.log(fizzBuzz(9));
console.log(fizzBuzz(45));

function operadoresLogicos(num1, num2, num3) {
    // La función recibe tres números distintos.
    // Si num1 es mayor a num2 y a num3, y además es positivo, retornar ---> "Numero 1 es mayor y positivo".
    // Si alguno de los tres números es negativo, retornar ---> "Hay negativos".
    // Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    // Si todos los argumentos son cero, retornar ---> "Error".
    // Si no se cumple ninguna de las condiciones anteriores, retornar false.
    // Tu código:

    if(num1 > num2 && num1 > num3 && num1 > 0){
        return "Numero 1 es mayor y positivo";
    }
    else if(num1 < 0 || num2 < 0 || num3 < 0){
        return "hay negativos"
    }
    else if(num3 > num1 && num3 > num2){
        return num3 + 1;
    }
    else if(num1 === 0 && num2 === 0 && num3 === 0){
       return "error";
    }
    else {
        return false
    }

} 

function esPrimo(num) {
    // Retornar true si "num" es primo.
    // De lo contrario retorna false.
    // [Pista 1]: un número primo sólo es divisible por sí mismo y por 1.
    // [Pista 2]: puedes resolverlo utilizando un `bucle for`.
    // [Nota]: los números negativos, 0 y 1 NO son números primos.
    // Tu código:
    if (num <= 1) {
       return false;
     }
     for (let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
     }
     return true;
    }

    console.log(esPrimo(9))
    console.log(esPrimo(7))
    console.log(esPrimo(46))
    console.log(esPrimo(5))
