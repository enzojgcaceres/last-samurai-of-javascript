function calcularPropina(costoComida, nivelServicio) {
    let propina;
    
    if (nivelServicio === "excelente") {
        propina = costoComida * 0.20;
    } else if (nivelServicio === "bueno") {
        propina = costoComida * 0.15;
    } else if (nivelServicio === "regular") {
        propina = costoComida * 0.10;
    } else {
        return "Nivel de servicio inválido";
    }

    return propina;
}

console.log(calcularPropina(100, "excelente")); // Debería retornar 20
console.log(calcularPropina(50, "bueno"));      // Debería retornar 7.5
console.log(calcularPropina(80, "regular"));    // Debería retornar 8
