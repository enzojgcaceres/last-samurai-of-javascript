function actividadesEnComun(arr1 = [], arr2 = [] ) {
    const actividadesComunes = [];
    for (const e of arr1) {
        if (arr2.includes(e)) {
            actividadesComunes.push(e);
        }
    }
    return actividadesComunes;
}

const persona1 = ['dormir','jugar','pasear', 'leer', 'comer']

const persona2 = ['comer', 'dormir', 'futbol']

const actividadesComunes = actividadesEnComun(persona1, persona2);
console.log(actividadesComunes)

