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
