const arr = [2, 4, 6, 10];

// const dobles = arr.map(function (x) {
//    return x * 2;
// })
// console.log(dobles);

const raiz = arr.map(function(num){
    return Math.sqrt(num);
})

console.log(raiz);