function incrementarPorUno(array = []) {
    // El arreglo recibido por parámetro contiene números.
    // Retornar un arreglo con los elementos incrementados en +1.
    // Tu código:

    var sumaUno = []

    for (var i = 0; i < array.length; i++){
        sumaUno.push(array[i] +1);
    }

    return sumaUno;

    
}


console.log(incrementarPorUno([1, 2, 3, 4]))