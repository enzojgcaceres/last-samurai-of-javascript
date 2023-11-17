const obj1 = {
    nombre: 'Vincent',
    apellido: 'Lorenzo',
    invitado: true,
    // caso 1
}

const obj2 = {
    nombre: 'Angel',
    invitado: true,
    // caso 2
}

const obj3 = {
    apellido: 'Messi',
    invitado: true,
    // caso 3
}

const obj4 = {
    nombre: 'toti',
    apellido: 'Passman',
    invitado: false,
    // caso 4
}

const obj5 ={
    nombre: 'eduardo'
}// caso 5

/* function bienvenidoSeñor(persona) {
    if (!('invitado' in persona )){
        return 'Disculpe señor, usted no esta invitado a la fiesta'
    }

    if (persona.invitado === false) {
        return 'Disculpe señor, usted no esta invitado a la fiesta'
    }

    if ('nombre' in persona && 'apellido' in persona) {
        return `${persona.nombre} ${persona.apellido}, un gusto tenerlo nuevamente. Bienvenido`; 
    }

    if ('nombre' in persona) {
        return `Hola ${persona.nombre}, tu mesa está lista.`;
    }

    return `Bienvenido Sr. ${persona.apellido}`;

} */

function bienvenidoSeñor(persona) {
    if (!('invitado' in persona)) {
        return 'Disculpe señor, usted no está invitado a la fiesta';
    }
      else if (!persona.invitado) {
        return 'Disculpe señor, usted no está invitado a la fiesta';
    }
      else if ('nombre' in persona && 'apellido' in persona) {
        return `${persona.nombre} ${persona.apellido}, un gusto tenerlo nuevamente. Bienvenido`;
    } else if ('nombre' in persona) {
        return `Hola ${persona.nombre}, tu mesa está lista.`;
    } else if ('apellido' in persona) {
        return `Bienvenido Sr. ${persona.apellido}`;
    } else {
        return 'Disculpe señor, no está invitado a la fiesta.';
    }
}


console.log(bienvenidoSeñor(obj4))