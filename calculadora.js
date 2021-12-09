/* Esta calculadora contiene 4 funciones básicas:
-Suma
-Resta
-Multiplicación
-División
*/

/* let suma = require('./sumar')
let resta = require('./restar');
let multiplicacion= require('./multiplicar'); 
let division = require('./dividir'); */

const sumar = require('./sumar');
const restar = require('./restar');
const multiplicar = require('./multiplicar');
const dividir = require('./dividir');

let process = require('process');

let operacion = process.argv[2].toLowerCase(); //operacion por consola
let numero1 = Number(process.argv[3]); // primer numero
let numero2 = Number(process.argv[4]); //segundo numero

if (operacion == "sumar") {
    console.log("El resultado de la suma es:" + sumar(numero1, numero2));
}
if (operacion == "restar") {
    console.log("El resultado de la resta es:" + restar(numero1, numero2));
}
if (operacion == "multiplicar") {
    console.log("El resultado de la multiplicación es:" + multiplicar(numero1, numero2));
}
if (operacion == "dividir") {
    console.log("El resultado de la división es:" + dividir(numero1, numero2));
}