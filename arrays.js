// los arrays en javaScript son objetos y los objetos 

// la sintaxis de punto es la forma de acceder  a las propiedades de los objetos, 
// los metodos son como funciones pero relacionados a objetos.
// es decir que en los arrays sera de la misma manera
// ejem: 

const miArray = ['Osvaldo', 'Martin', 'Pepe'];
const cant = miArray.length;

var nombre = miArray[0];
console.log(nombre);

miArray.push('Carlos');
console.log(miArray)

miArray.unshift('Richar');
console.log(miArray);

let final = miArray.pop();
console.log(miArray);

console.log(final);