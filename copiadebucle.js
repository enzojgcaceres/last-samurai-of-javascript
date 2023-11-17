function romper (arreglo = [], cantidad){
    let rotos = [];
    while (arreglo.length > 0){
        const fragmento = arreglo.splice(0, cantidad)
        rotos.push(fragmento);
        
    }
    return rotos;
}
const array = [1, 2, 0, 5, 7, 3, 9, 10, 11, 0, 13, 15, 7];
const cantidad = 4;
console.log(romper(array, cantidad));

console.log(romper([1, 2, 3, 4, 5, 6], 3));