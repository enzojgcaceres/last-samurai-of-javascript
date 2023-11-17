function reversaCadena(cadena) {
    let cadenaAarray = cadena.split("").reverse().join("")
    // console.log(cadenaAarray);
    return cadenaAarray;
}

let primerCadena = "Metete";
var segundaCadena = "Sal de aqui, bichito, bichito..."
console.log(reversaCadena(primerCadena));
console.log(reversaCadena(segundaCadena));