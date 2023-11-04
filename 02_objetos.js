//OBJETOS

/**
 * Un objeto es una estructura de que se utiliza para representar y organizar informacion
 * 
 * Los objetos en JS, son una coleccion de pares, clave-valor(key-value)
 * 
 * Cada clave (key) es una CADENA (STR), actua como IDENTIFICADOR UNICO, para acceder al valor asociado.
 * 
 * Los valores (VALUE) pueden ser de cualquier tipo de datos, incluyendo numeros, cadena, funciones, etc.
 */

/**
 * SINTAXIS{
 *  key1:value1,
 *  key2:value2,
 *  key3:value3,
 * }
 */


const persona = {
  nombre: 'Yure',
  apellido: 'Mancilla',
  pais: 'Mexico',
  social: [{ instagram: 'yure2023' }, { email: 'yure@gmail.com' }]
}


//acceder a un objeto con la notacion del punto.
console.log(persona.pais); //Mexico
console.log(persona.social[0].instagram); //yure2023

//notacion del corchete
const pais = 'pais'
console.log(persona[pais]);//mexico
console.log(persona['nombre']);//Yure


const juan = 'nombre'
console.log(persona[juan]); //Yure

const email = 'email'

console.log(persona['social'][1][email]); //yure@gmail.com


//operador in: el operador in me retornara true o false. En caso de que exista le key  que indico, me retornara ture, y caso contrario false

console.log('--operardor in');

console.log('age' in persona);
console.log('nombre' in persona);


//for in
console.log('--for in--');

//recorrer key del objeto
for (const key in persona) {
  console.log(key); //nos da la key
}

//recorrer los valores del objeto

for (const key in persona) {
  console.log(persona[key]);
}