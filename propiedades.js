// var palabra = 'Henri';
// var palabraSeparada = palabra.split('');
// palabraSeparada.pop();
// palabraSeparada.push('y')
// console.log(palabraSeparada);
// var palabraArreglada = palabraSeparada.join("")
// console.log(palabraArreglada);

var numeros = [1, 6, 3, 4];
// numeros.forEach((num) => console.log(num));

// numeros.forEach((num) => {
//     if (num === 3) {
//          console.log(num)
//         }
//     });

var masUno = numeros.map((num) => { 
    return num + 1;
});
console.log(masUno);

