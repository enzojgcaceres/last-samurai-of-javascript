// Crea un programa que recorra un array de números y calcule su suma, promedio y valor máximo.

function arrayDeNum(array){
    
    var suma = 0;

    for(var i = 0; i < array.length; i++) {
        suma += array[i];
    } 
    return suma
}
const numeros = [2, 3, 3, 5, 7, 10];

const resultadoSuma = arrayDeNum(numeros);

console.log(`La suma de los numeros es: ${resultadoSuma}`);

function calcularPromedio(array) {
    const suma = arrayDeNum(array);
    const cantDeElementos = array.length;
    const promedio = suma / cantDeElementos;
    return promedio
}

const promedio = calcularPromedio(numeros);

console.log(`El promedio de los numeros es: ${promedio}`);

function numeroMasGrande(array){
    var maximo = array[0];

    for (var i = 1; i < array.length; i++){
        if(array[i]> maximo){
            maximo = array[i];
        }
    }
    return maximo;
}

const maximo = numeroMasGrande(numeros);
console.log(`el valor maximo de entre los numero es: ${maximo}`);





// Implementa una función que tome un objeto con nombres y edades, y devuelva una lista de las personas mayores de cierta edad.

function personasMayores(nombres, edades, edadMinima) {
    const personasMayoresArray = []; // Aquí almacenaremos los nombres de las personas mayores

    let indice = 0; // Inicializamos el índice

    for (const edad of edades) {
        if (edad >= edadMinima) {
            const nombre = nombres[indice];
            personasMayoresArray.push(nombre); // Agregamos el nombre al array personasMayoresArray
        }
        indice++; // Incrementamos el índice en cada iteración
    }

    return personasMayoresArray;
}

const nombres = ["Alice", "Bob", "Charlie", "David"];
const edades = [25, 30, 18, 40];
const edadMinima = 30;

const personasMayoresDeEdadMinima = personasMayores(nombres, edades, edadMinima);
console.log(personasMayoresDeEdadMinima);




// Crea una función para buscar un elemento en un array y retornar su índice.


// Crea un juego de adivinanza en el que el usuario debe adivinar un número aleatorio.
// Implementa un programa que imprima los números primos en un rango dado.


// Escribe un programa que determine si un año es bisiesto o no.
function esBisiesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
        return 'Es bisiesto';
    } else {
        return 'No es bisiesto';
    }
}

console.log(esBisiesto(2020)); // Debería retornar 'Es bisiesto'
console.log(esBisiesto(2024)); // Debería retornar 'Es bisiesto'
console.log(esBisiesto(1900)); // Debería retornar 'No es bisiesto'
console.log(esBisiesto(2000)); // Debería retornar 'Es bisiesto'
