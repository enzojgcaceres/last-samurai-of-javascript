//function calcularCalificacion(nota1, nota2, nota3, peso1, peso2, peso3) {
//    let calificacion 
    
//    calificacion = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3)
//    return calificacion 

//}

//console.log(calcularCalificacion(90, 85, 80, 0.3, 0.3, 0.4)); 
//console.log(calcularCalificacion(70, 60, 85, 0.2, 0.3, 0.5)); 
//console.log(calcularCalificacion(100, 95, 100, 0.4, 0.4, 0.2));  

function calcularCalificacion(nota1, nota2, nota3, peso1, peso2, peso3) {
    let calificacion;

    calificacion = (nota1 * peso1) + (nota2 * peso2) + (nota3 * peso3);
    return calificacion;
}

console.log(calcularCalificacion(90, 85, 80, 0.3, 0.3, 0.4)); // Debería retornar 84.5
console.log(calcularCalificacion(70, 60, 85, 0.2, 0.3, 0.5)); // Debería retornar 77.5
console.log(calcularCalificacion(100, 95, 100, 0.4, 0.4, 0.2)); // Debería retornar 97.0



// Debería retornar 84.5
// Debería retornar 77.5
// Debería retornar 97.0