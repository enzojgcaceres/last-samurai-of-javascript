function combinarArraysEnObjeto(keys, values) {
    let arrayCombinado = {}
    for(let i = 0; i < keys.length; i++){
        arrayCombinado[keys[i]] = values[i]
    }
    return arrayCombinado;

}
const nombres = ["Farid", 30, "Ciudad de Mejico"]
const datos = ["nombre", "edad", "ciudad"]
const resultado = combinarArraysEnObjeto(datos, nombres)
console.log(resultado);