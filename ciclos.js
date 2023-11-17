// ciclos implementados con "for"

// for(let i = 0; i <= 4; i++){
//     console.log(`iteracion ${i}`);
// }

// console.log('fin del ciclo');

// ciclos alreves 

// for(let i = 4; i >= 1; i--){
//          console.log(`iteracion ${i}`);
//      }
    
// console.log('fin del ciclo');

// ciclos anidados
function ordenadora (){
for (let i = 1; i <= 4; i++){
    console.log(`Comienza la iteracion ${i}`);
    for(let j = 0; j < 4; j++){
        console.log(j);
    }
       
}

return 'Fin de Ciclo'
}
const array = [2, 4, 6, 8, 10, 12]
console.log(ordenadora(array));