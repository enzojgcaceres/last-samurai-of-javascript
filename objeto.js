const persona = {
    nombre: 'Cobus',
    apellido: 'Reinach',
    edad: 28,
    ComidaFavorita: 'Milanesas con pure', 
};

let edad = persona.edad;
console.log(edad);

persona.edad = 25;

console.log(edad);
persona.deporteFavorito = 'Rugby'

console.log(persona);

delete persona.ComidaFavorita;
console.log(persona);