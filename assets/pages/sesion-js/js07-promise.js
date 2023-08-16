console.log("JS07 Promise");

/* 
La promesa es un patrón asincrónico que se utiliza
para manejar operaciones asíncronas.

La promesa permite realizar tareas asíncronas y
manejar los resultados (éxito o error) en un momento posterior.

Las promesas tienen 3 estados;
1.- Pending : El estado inicial de una promesa antes de que se resuelva o rechace.
2.- Resolve: La promesa se resuelve con un valor.
3.- Rejected: La promesa se rechaza con una razón.

Resove y reject son funciones de callback.
Para crear una promesa se usa el constructor de la clase Promise

Sintaxis:
    const pinkyPromise = new Promise (fncCallBack );

*/

//const pinkyPromise = new Promise ( ()=>{} );
//const pinkyPromise = new Promise((fncCallBackResolve, fncCallBackReject) => {});
const pinkyPromise = new Promise((fncCallBackResolve, fncCallBackReject) => {
    const menorEdad = false;

    if(menorEdad) 
        fncCallBackResolve("Hay que estar siempre juntos");
    else
        fncCallBackReject({code:404, message:"No te conozco"});
});

//Consumir las promesas
// Se usa los métodos de then, catch y finally*

console.log("----------> Promesas <-----------");
console.log("Antes de consumir la promesa");

//pinkyPromise(); //Esto nos da un error;

/* pinkyPromise
    .then()  //Se ejecuta una función de callback si la promesa fue resuelta
    .catch() //Se ejecuta una función de callback si la promesa fue rechazada
    .finally(); Se ejecuta una función de callback despues de que
                la  promesa fue resuelta o rechazada */


pinkyPromise
    .then((response)=>console.log(`Promesa Resuelta: ${response}`)) 
    .catch((error)=>console.log(`Promesa Rechazada: ${error.message}`)) 
    .finally(()=>console.log("Se ha terminado de resolver la promesa"));
                




console.log("Después de consumir la promesa");


//Haciendo una promesa con parámetros

/**
 *Saludo especial para las personas que su nombre comiece con A.
 *El saludo se genera después de 5 segundos.
 *Saludo para las personas que comiencen con L
 *Retardo de 5 segundos 
 * @param {string} name 
 */
const gretting = (name) =>{
        const myPromise = new Promise ( (resolve,reject) => {
            //if(name.charAt(0) === "A"|| name.charAt(0) === "a")
            const firstChar = name.charAt(0).toLocaleUpperCase();
            if( firstChar === "A")
                setTimeout(()=> resolve({code:200, message:`Soy ${name} ¡Hola a todos!`}),5000);
            else if(firstChar === "L")
            resolve({code:201, message:`Soy ${name} 
            Saludos a toda la banda  de la CH30`});
            else
                reject({code:404, message:`No estoy disponible para ${name}`});
        } );//fun de promise
        
        return myPromise;
}

gretting("Ana")
    .then(response=>console.log(response.code,response.message))
    .catch(error=> console.log(error.code,error.message));
    
gretting("Luisa")
    .then(response=>console.log(response.code,response.message))
    .catch(error=> console.log(error.code,error.message));
    
gretting("Eduardo")
            .then(response=>console.log(response.code,response.message))
            .catch(error=> console.log(error.code,error.message));

//-------------consumir las promesas con async y await-------------------
/* 
Asyny y Await facilita la escritura y lectura de código asíncrono.
Permite escribir código asíncrono de manera similar a cómo se escribiría
código síncrono.
*/

async function grettingCh30 (name){
    console.log("------------Saludos a la bandita de la Ch30----------");
    const result = await gretting(name);
    console.log(result);
    console.log("----------Fin del saludo--------------");
}
// grettingCh30 = async () => {}


const grettingAll = async () =>{ //Para hacerlo de manera secuencial
    try{
        await grettingCh30("Anneth");
    }
    catch(error){
        console.warn("Se rechazó esa promesa");
        console.table(error);
    }
    try{
        await grettingCh30("Mau");
    }
    catch(error){
        console.warn("Se rechazó esa promesa");
        console.table(error);
    }
    try{
        await grettingCh30("Leonardo");
    }
    catch(error){
        console.warn("Se rechazó esa promesa");
        console.table(error);
    }
}

grettingAll();



