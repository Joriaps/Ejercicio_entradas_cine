/** 
 * Pedir los datos de la persona
 */

let nombreIntroducido = prompt('Introduce tu nombre')
let apellidoIntroducido = prompt('Introduce tu apellido')
let vacunadoIntroducido = prompt('¿Estas vacunado? (Si o No)').toLowerCase()
if(vacunadoIntroducido === 'si' || vacunadoIntroducido === 'sí'){
    console.log('Puedes comprar la entrada ;)')
} else if(vacunadoIntroducido === 'no'){
    console.log('Lamentandolo mucho, no puedes comprar la entrada :(')
} else console.log('No has intrducido un valor correcto')
