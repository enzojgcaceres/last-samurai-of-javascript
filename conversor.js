function convertirTemperatura(valor, unidad) {
    let temperatura;

    if (unidad === 'C' || unidad === 'c') {
        temperatura = (valor * 9/5) + 32;
        return `${valor}°C es igual a ${temperatura.toFixed(2)}°F`;
    } else if (unidad === 'F' || unidad === 'f') {
        temperatura = (valor - 32) * 5/9;
        return `${valor}°F es igual a ${temperatura.toFixed(2)}°C`;
    } else {
        return "Unidad de temperatura no válida";
    }
}

console.log(convertirTemperatura(0, "C"));   // Debería retornar "0°C es igual a 32°F"
console.log(convertirTemperatura(32, "F"));  // Debería retornar "32°F es igual a 0°C"
console.log(convertirTemperatura(100, "C")); // Debería retornar "100°C es igual a 212°F"


