// esto es un array de objetos.

const arrayDeObjetos = [
    {
        nombre: 'Django',
        edad: 104, 
        comidaFavorita: 'empanada de ñandu',

    },
    {
        nombre: 'Isobel',
        edad: 100,
        comidaFavorita: 'milanesa de guanaco',
    },
    {
        nombre: 'Eulogio',
        edad: 84,
        comidaFavorita: 'arroz con leche',
    },
    {
        nombre: "Usman",
        edad: "77",
        comidaFavorita: "Shawarma",
    }
];

for (let i = 0; i < arrayDeObjetos.length; i++){
    console.log("========================");
    console.log('Nombre: ' + arrayDeObjetos[i].nombre);
    console.log('Edad: ' + arrayDeObjetos[i].edad);
    console.log( 'Comida favorita: ' + arrayDeObjetos[i].comidaFavorita);
};