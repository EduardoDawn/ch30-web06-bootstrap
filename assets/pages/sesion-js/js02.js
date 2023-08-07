console.log("Sesión JS02 Uso de funciones");

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions

Función: Es un conjunto de instrucciones que realiza una tareo o calcula
un valor. Es un código reutilizable. 

-------- Funciones declaradas -------------
    (function declaration, function statement)
Una característica de las funciones declaradas es que tienen hoisting.

hoisting: comportamiento en JS que permite que la declaración de variables (var)
o funciones se eleve al comienzo de su ámbito antes de que se ejecute el código.

sintaxis:
    function nombreFuncionCamelCase( parámetros ){
        //cuerpo de la función
        instrucciones;
    }

*/

console.log(multiplica(3,4));

function multiplica(a,b){
    return a*b;
}


/*
---------Funciones expresadas----------
        (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas (no tienen nombre).
Las funciones expresadas no tiene hoisting, porque no se carga
en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros) {
        instrucciones;
    };

*/

const sum = function (a,b){ return a + b;};

console.log(`El resultado de 4+2 : ${sum(4,2)}`);

let saludo;//
const localidad = "buenos aires";

if(localidad == "buenos aires"){
    saludo = function(name){return `Holis ${name}`};
}
else{
    saludo = function(name){return `Buenos días ${name}`};
}

console.log(saludo("Lalo"));
console.log(saludo("David"));


/*
-----------------------Fuciones autoinvocadas ------------------
                (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sitaxis:
    (function ( ){} )();

*/ 

(function(name){
    console.log(`Me llamo ${name} y me autoinvoco`);
})("ChatGPT");

/*
-----------------------Fuciones flecha ------------------
                       (arrow functions)
Funciones similares a las funciones expresadas, pero:
- No requieren la palabra reservada function
- Si tiene una sola instrucción no requiere las llaves {}
- Si la instruccion es el mismo retorno, no requiere la palabra return

sitaxis:
    const nombreVariable = (parámetros) => instrucción;
    
    const nombreVariable = (parámetros) => {
        instrucción;
        return expresión;
    }

*/ 

const areaRectangulo = (base,altura) => base*altura;

console.log(`El área es: ${areaRectangulo(3,9)} m2`);

/*
-----------------------Parámetros default ------------------
                       (default parameters)
Inicializa un parámetro de la función, si no se envía el arguemnto cuando se invoca

*/ 

/**
 * Calcula el área de un triángulo
 * @param {number} base del trinángulo
 * @param {number} altura del triángulo
 * @returns {number} base*altura / 2
 */
const areaTriangulo = (a=3,b=4) => (a*b)*0.5;

console.log(`El área del triángulo es ${areaTriangulo(5,7)} m2.`);

console.log((1000).toString()); //conversión base 10 -> 1000
console.log((1000).toString(2));//conversión base 10 -> 1111101000
console.log((1000).toString(16));//conversión base 10 -> 3e8


/*
-----------------------Parámetros rest ------------------
                       (rest parameters)
Permite representar una serie de valores indefinidos en los argumentos
Esta serie de valores se presentan como un array.
Rest parameters debe estar al final de la lista de párametros.

sintaxis:
    ...nombreParametros


*/ 

const sumatoriaMultiplesNumeros = (a=0,b=0,...rest) => {
    let suma = a + b;
    for (const arg of rest ){
        suma += arg;
    }
    return suma;
} 

console.log(`Sumatoria de múltiples números: ${sumatoriaMultiplesNumeros(2,5)}`);
console.log(`Sumatoria de múltiples números: ${sumatoriaMultiplesNumeros(2,5,10,9,20,10)}`);

console.log(`Sumatoria de múltiples números: ${sumatoriaMultiplesNumeros(2)}`);

