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