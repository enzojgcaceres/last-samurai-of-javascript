function sumaNumerosPares(arr) {
    let suma = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            suma += arr[i];
        }
    }
    return suma;
}

const arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(sumaNumerosPares(arreglo));
