// Escribe una funcion que permita dividir un arreglo de eneteros en varias partes
// de manera que cada parte tenga, como maximo, una cantidad definida de elementos (recibida por parametro) 
// Ejemplo: 

//  Partir ([1, 2, 3, 4, 5], 2)

//  Deberia retornar 

//  ([1, 2], [3, 4], [5])

//  Descripcion de la funcion 'partir()' 

// debe retornar un arreglo de arreglos, cada sub arreglo sera a su vez un arreglo de enteros

// Recibe como parametro(s):
// . arreglo: un arreglo de enteros
// . cantidad: un numero entero

// Aclaraciones:
// . La funcion debe separar el arreglo recibido por parametro (arreglo) en varios sub-arreglos
// que tengan una longitud maxima igual a la especificada por parametro (cantidad)
// . Todo lo que imprimas con console.log() se vera en la seccion "debug output" cuando corras 
// tu codigo (con el boton "run code") 
// 

function partir(arreglo = [], cantidad = 0) {
    const partes = [];
    while (arreglo.length > 0) {
        const parte = arreglo.splice(0, cantidad);
        partes.push(parte);
    }
    return partes;
}

// ejemplo de uso:

const arregloOriginal = [1, 2, 3, 4, 5, 6, 7];
const cantidadMaxima = 3;
const resultado = partir(arregloOriginal, cantidadMaxima);
console.log(resultado);
