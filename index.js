var obtenerPropiedad = 'altura'
var persona = {
    edad:11,
    altura:145,
    nombre:'Diego',
    apellido:'Rupay'
    , telefono:5
}
persona[obtenerPropiedad] = 150

obtenerPropiedad = 'edad'
persona[obtenerPropiedad] = 15 // persona['edad'] -> 15

var nombre = 'alvaro',
apellido = 'pezantes'
console.log('soy',nombre,apellido)

console.log('soy '+ nombre + ' ' + apellido)

console.log(`soy ${nombre} ${apellido}`)
/*  edad:11,
    altura:145,
    nombre:'Diego',
    apellido:'Rupay'
    , telefono:5 */
// imprimir datos con sentido.
var person =  {
        edad:11,
        altura:146,
        nombre:'Diego',
        apellido: 'Rupay',
        telefono: 726567
    }

    console.log (`Hola soy ${person.nombre} mi apellido
    es ${person.apellido} mido ${person.altura} cm y mi numero de telefono es ${person.telefono}`)

    person['nombre'] =  'Alvaro'

    person.apellido = 'Pezantes'

    console.log (`Hola soy ${person.nombre} mi apellido
    es ${person.apellido} mido ${person.altura} cm y mi numero de telefono es ${person.telefono}`)

    person['nombre'] = 'Elida'
    person['apellido'] = 'Misiyauri'
    person['altura'] = 150
    person['telefono'] = 946568055

    console.log (`Hola soy ${person.nombre} mi apellido
    es ${person.apellido} mido ${person.altura} cm y mi numero de telefono es ${person.telefono}`)

// crear un objeto con propiedades que tenria un perro e
//imprimirlo en consola en un texto que tenga sentido


var perro = {
    nombre: 'Ramon',
    edad: 3,
    altura: 23,
    raza: 'chehwawa',
    caracteristicas: 'no muerde'
}

const imprimirDataPerro = (data) => {
    console.log(`Hola mi hamspter se llama ${data.nombre},
    el tiene ${data.edad} años, el mide ${data.altura} cm,
    pertenece a la raza ${data.raza} y el ${data.caracteristicas}`)
}

var perro1 = {
    nombre: 'Firulais',
    edad: 5,
    altura: 100,
    raza: 'Bull terry',
    caracteristicas: 'muerde'
}

imprimirDataPerro(perro)
imprimirDataPerro(perro1)




