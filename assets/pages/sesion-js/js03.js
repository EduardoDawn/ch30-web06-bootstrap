console.log("Sesion JS03 Control de flujo");
console.log("No olvidaremos el reto a Ed");

/* 
-------------------Declaración de bloque de código ---------------
Sintaxis:
    {

    }
Las variables declaradas con let y const solo tendrán alcance(scope)
dentro del bloque o bloques anidados.

Si la variable en el bloque, tiene el mismo nombre que una variable
fuera del bloque, se le da prioridad a la variable dentro del 
bloque

*/

let firstname = "Sergio";
const lastname = "Torres";
var age = "39";

//let y const no se pueden redeclarar
/* let firstname = "Sergio";
const lastname = "Torres"; */
//var age = "32";  //var se puede redeclarar
{
    let firstname = "Mau";
    const lastname = "Peniche";
    var age = "26";
    const colorFavorito = "azul";
    var comidaFavorita = "pozole";


    console.log(`${firstname} ${lastname}`);
    console.log(age);
    console.log(comidaFavorita);
    console.log(colorFavorito);
    {
        const colorFavorito = "morado";
        console.log(colorFavorito);
        console.log(firstname);
        {
            console.log(colorFavorito);
            console.log(firstname);

        }
    }
}

console.log(`${firstname} ${lastname}`);
console.log(age);
console.log(comidaFavorita);
// console.log(colorFavorito); //colorFavorito no está definido

//------------------------------- Condicional if-else ---------------
/* 
Ejecuta una sentencia si una condición expecífica es evaluada
como verdadera.

Sintaxis:
    if (condición) sentencia;

    if (condición) {
        sentencias;
    }

    if (condición) sentencia;
    else sentencia_si_condicion_es_falsa;

    if (conición){
        sentencias;
    }
    else{
        sentencias;
    }
    if(condición) sentencia;
    else if (condición 2) setencia2;
    else if (condición 3) sentencia3;
    else sentencia_si_condicion3_es_falsa;

*/

const temperatura = 30;
let mensaje = "Temperatura de ";

if (temperatura === 22){
    mensaje += `${temperatura} grados centigrados es ideal`;
}
else if(temperatura >= 15  && temperatura <= 21){
    mensaje += `${temperatura} grados centigrados es fría`;
}
else if(temperatura >= 23  && temperatura <= 30){
    mensaje += `${temperatura} grados centigrados es calurosa`;    
}
else {
    mensaje = `${temperatura} grados centigrados no es ideal =(`;
}
console.log(mensaje);


//-----------Condicional Switch ------------
/* 
La condicional switch evalua una expresion y se compara
con el valor de cada istancia en 'case' y se ejecuta las
setencias asociadas a ese 'case' hasta encontrar la
setencia 'break' o se finalicen todas las sentencias
de la condicional switch.

Sintaxis:
    switch(expresion){
        case valor1:
            setencia;
            break;
        case valor2;
            stencia;
            break;
        default:
            setencias;
            break;
        case valor n:
            setencia;
            break;
    }


*/

/**
 * Establece la velocidad de un ventilador
 * @param {number} velocidad del ventilador
 * @return {number} mensaje de la velocidad establecida del ventilador
 */
const setVelocidadVentilador = (velocidad = 0) => {
    let mensaje;

    // la condiciona switch utiliza la comparación estricta (===)
    switch (parseInt(velocidad)){
        case 0:
            mensaje = "apagado";
            break;
        case 1:
            mensaje = "velocidad baja";
            break;
        case 2:
            mensaje = "velocidad media";
            break;
        default:
            mensaje = "el nivel no existe";
            break;
    }
    return mensaje;
}

console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(1)}`);
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(8)}`);
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador("2")}`);
console.log(`La velocidad del ventilador está en ${setVelocidadVentilador()}`);

//console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(prompt("Velococidad",1))}`);


/*   
----------Ejercicio Estaciones del año ------------------
Preguntar por el número de mes (prompt o DOM), del 1 al 12
Desplegar de acuerdo al mes un Alert(mostrarlo en el DOM) la estación del año.
 mes 12,1,2 = invierno.
 mes 3,4,5 = primavera.
 mes 6,7,8 = verano.
 mes 9,10,11 = otoño.

 Realizar una versión con if-else-elseif  y otra con switch
*/

const estacionMesIf = (mes)=>{
    let mensaje;
    if (mes >= 3 && mes <= 5){
        mensaje = "primavera"; 
    }
    else if (mes >= 6 && mes <= 8){
        mensaje = "verano"; 
    }
    else if (mes >= 9 && mes <= 11){
        mensaje = "otoño"; 
    }
    else if (mes == 1 || mes == 12 || mes == 2){
        mensaje = "invierno"; 
    }
    else{
        mensaje = "¡¡No es un mes!!"; 
    }
    return mensaje;
}

const estacionMesSwitch = (mes) =>{
    let mensaje;
    switch(parseInt(mes)){
        case 12:
        case 1:
        case 2:
            mensaje = "invierno";
            break;
        case 3:
        case 4:
        case 5:
            mensaje = "primavera";
            break;
        case 6:
        case 7:
        case 8:
            mensaje = "verano";
            break;
        case 9:
        case 10:
        case 11:
            mensaje = "otoño";
            break;
        default:
            mensaje = "¡¡No es un mes!!";
            break;
    }
 return mensaje;
}

//alert(estacionMesIf(prompt("Escribe el número del mes",1)));

//alert(estacionMesSwitch(prompt("Escribe el número del mes",2)));

// ------------------- Operador ternario ----------------------
/* 
Es el único operador de JavaScript que tiene 3 operandos
Generalmente se utiliza como opción a la setencia if-else

Sintaxis:
    condición ? expresiónSiCondicionEsVerdadera : expresionSiCondicionEsFalsa;
*/
/* let msj;
const pagoTarjetaCredito = true;
if (pagoTarjetaCredito === true) msj = "a realizado el pago de su TC";
else "no ha realizado el pago de su TC";  */

const pagoTarjetaCredito = true;
const msj = pagoTarjetaCredito ? "a realizado el pago de su TC" :  "no ha realizado el pago de su TC";

console.log(`El usuario ${msj}`);

/*
--------------------mini ejercicio -------------

Preguntar con prompt la edad del usuario: 20
si es >= 18 indicar en la consola "El usuario es mayor de edad";
Si no cumple con la condición "El usuario no es mayor de edad"
*/

//const userAge = parseInt(prompt("Escribe tu edad: ",18));
const userAge = 18;
const mayorEdad = userAge >= 18 ? "" : " no";
console.log(`El usuario${mayorEdad} es mayor de edad`);


/* let edad = prompt("Ingresa la edad");
//const confirmacion = edad >= 18 ? "El usuario es mayor de edad" : "El usuario no es mayor de edad";
//alert(confirmacion);
alert(edad >= 18 ? "El usuario es mayor de edad" : "El usuario no es mayor de edad"); */

function factorialRecursivo(numero){
    return numero == 0 ? 1 : factorialRecursivo(numero-1)*numero ;
}
const num = 0;
console.log(`El factorial de ${num} es: ${factorialRecursivo(num)}`); 

