console.log("Condiones y expresiones");

/* 
------------ Opéradores aritméticos ------------
adición +
multiplicación *
substracción -
división /
resto %
exponencial **   // Math.pow(2,3) -> 2**3

*/

/*
---------- Precedencia de operadores ------------------
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/

const operaciones = 5*2 + 3**2 -4;  

console.log(operaciones);
console.log(4%3+2*3/2-1);

//------------ Operadores de asignación -------------------
/*
Asigna un valor a su operador izquierdo basándose en el valor
de su operador derecho
asignación =

Operadores abreviado (compuestos):
op1 += op2  -> op1 = op1 + op2
op1 -= op2  -> op1 = op1 - op2
op1 *= op2  -> op1 = op1 * op2


*/
let asignacion= 3;
console.log(asignacion += 3*3**3 +10);
console.log(asignacion += 3*(3**3) +10);
console.log(2**3**2);

/*---------------------Operadores unarios------------------
Solo actuan sobre un operando
*/
//Negación
let numero = 3;
let dinero = -numero; //-3

// Conversión numérica
let pago = + dinero; //-3
let intereses = + "5.23"; // 5.23 numérico
console.log(typeof(intereses));
intereses = 3;
console.log(intereses += 5 + +"3"); //11

//Operador lógico not
let isActive = !true; //false

//Operador de incremento  y decremento en unidad.
/* 
Operador de pre-incremento y pre-decremento
++ valor
-- valor

Operador  de post-incremento y post-decremento
valor ++
valor --
*/

let number = 10;
++ number;
console.log(number);
number ++;
console.log(number);

number = 20;
console.log(++ number); //21
console.log(number ++); //21
console.log(number);//22

let index = 0;
for(;index<5;index++){
    console.log(index);
}
console.log("Otro valor " + index);//5

let a = 0, b =0;
for ( ; a < 3; b = a++){
    console.log(a,b);
}
 console.log(a,b); // 3 , 2

 let x = 3;
 let y = ++x;  // x = 4  y=4            x, y
 console.log(`x: ${x++} y:${++y}`); // 4 , 5
 console.log(`x: ${x} y:${y}`); //     5 , 5


//--------------Operadores lógicos && y || ------------------
/* 
También son conocidos como operadores de corto circuito  (short-circuit operators).

&& : La evaluación se detiene tan pronto como se encuentra un operador falso.
     Ya no se evalua el segundo operando y se retorna la expresión de op1.
op1 && op2      Si op1 es verdadero, se retorna la expresión de op2.

op1 || op2     Si OP1 es verdadero, se retorna la expresión de op1.


*/

const va = true, vb = false, vc = true; // const va, const vb, const vc
const n1 = n2 = n3 = true;// const n1, var n2m var n3
console.log(va || vb && vc); // true

// Conversión a booleano
// En la conversión de boolean los siguientes valores son false:
// "", 0, null, undefined, NaN

console.log(va && "Holi Crayoli"); //"Holi Crayoli"
console.log(vb && "Holi Crayoli"); //false
console.log(NaN && "Holi Crayoli"); // NaN
console.log("false" && "Holi Crayoli"); // "Holi crayoli"
console.log("" && "Activado"); // ""
console.log("Activado" && ""); // ""
console.log("Activado" || papasFritas); // 

const person = {
    name : "Leo",
    lastname : "Ronaldo",
    age : 25,

};

console.log(`nombre: ${person.name}`);
console.log(`nombre: ${person["name"]}`);

//const occupation = person.occupation; //undefined
const occupation = person.occupation || "Software Enginner"; //Software
//const occupation = person.occupation ?? "Software Enginner"; //operador nullish Coalescing

console.log(`Ocupación: ${occupation}`);




/* ------------------ Comparación Estricta ------------------------

=== Estrictamente igual, se debe comparar el valor y el tipo de dato
!== Estrictamente diferente, debe ser diferente en valor y tipo

*/ 

console.log("23" === 23); //false
console.log("true" === true); // false
console.log("true" == true); // false  --la concatenación solo ocurre con string de números
console.log("45" !== 45); // true


/* ------------- Operador de desestructuración (Destructuring) ------------

Es una expresión en JS que hace posible extraer datos de 
arreglos u objetos y nos ayuda a realizar asignaciones más
complejas.

 */

let dataA = 10;
let dataB = 20;
console.log(`a: ${dataA}, b: ${dataB}`);

//Intercambiar los datos
[dataA, dataB] = [dataB, dataA];
console.log(`a: ${dataA}, b: ${dataB}`);

const car ={
    model: "Vento",
    year: 2023,
    brand: "VW",
    color: "red",
    price: 320_000,
    additionaInfo : {
        bluetooth: true,
        cruiseControl : true,
        gps: false,
    }
}


//const [model, year] = [car.model, car.year];
//const  {year, model:carModel, additionaInfo} = car;
const  {year, model:carModel, additionaInfo :{bluetooth}} = car;



console.log(`Modelo: ${carModel}`);
console.log(`Año: ${year}`);
//console.log(`Tiene bluetooth: ${additionaInfo.bluetooth? "Sí" : "No"}`);
console.log(`Tiene bluetooth: ${bluetooth ? "Sí" : "No"}`);


// ------------------  ejercicio ------------------------
/*
   Hacer una función que realice la división de 2 números
   y entregue (return) en entero el cociente y residuo.

   Llamar a la función y mostrar en la consola el resultado.


*/
function dividiendo(num1, num2) {
       const  cociente= parseInt(num1/num2);
       const  residuo= num1 % num2;
    return {cociente,residuo};
}

const [div1, div2] = [9,4];
const {cociente, residuo} = dividiendo(div1,div2);
console.log(`En ${div1}/${div2} el cociente es ${cociente} y el residuo es ${residuo}`);

//---------------------------------------------
