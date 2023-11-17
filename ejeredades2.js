function personasMayores(nombres, edades, edadMinima) {
    const personasMayores = []; // Aquí almacenaremos los nombres de las personas mayores

    // Iteramos a través de las edades usando el bucle for
    for (let i = 0; i < edades.length; i++) {
        const edad = edades[i]; // Obtenemos la edad actual
        // Verificamos si la edad actual es mayor o igual a la edad mínima
        if (edad >= edadMinima) {
            const nombre = nombres[i]; // Obtenemos el nombre correspondiente
            personasMayores.push(nombre); // Agregamos el nombre al array de personasMayores
        }
    }

    return personasMayores; // Devolvemos el array de nombres de personas mayores
}

const nombres = ["Alice", "Bob", "Charlie", "David"];
const edades = [25, 30, 18, 40];
const edadMinima = 30;

const personasMayoresDeEdadMinima = personasMayores(nombres, edades, edadMinima);
console.log(personasMayoresDeEdadMinima);
