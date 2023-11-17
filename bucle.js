function doWhile(num) {
    // Implementar una función que aumente el valor recibido en 5 hasta un límite de 8 veces.
    // Retornar el valor final.
    // Utilizar el bucle Do-While.
    // Tu código:

    let contador = 0;

    do{
        num +=5;
        contador ++;
    } while (contador < 8);

    return num;

}

console.log(doWhile(2));