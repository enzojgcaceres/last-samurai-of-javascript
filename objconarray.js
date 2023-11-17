const objetoConArray = {
    nombre: "objeto con array",
    arr: ['abeja', 'banana', 'camion', 'dado'],
};

// con for each

 objetoConArray.arr.forEach(elemento => {
     console.log(elemento + " test");
 });

// ==================

// con for 
// como la sintaxis queda muy sucia con 'for' entonces 
// podemos guardar el array aparte.

// arrayAparte = objetoConArray.arr;

// for (let i = 0; i < arrayAparte.length; i++) {
//     console.log(arrayAparte[i] + " jajaj");
// }; 