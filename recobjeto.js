// como recorer un objeto o iterar sobre el.
// se crea una variable que va a ser temporal por cada propiedad y va
// a guardar el valor de la llave en string.

const persona = {
    nombre: 'Davis',
    numero: 5,
    deporte: 'fulbo',
};

for (let key in persona) {
    
    console.log(key);
    console.log(key, persona[key]);
};