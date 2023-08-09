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

//console.log(`La velocidad del ventilador está en ${setVelocidadVentilador(prompt("Velocidad",1))}`);


