console.log("Sesion JS04 matrices y bucles");
console.log("Ni perdon, ni olvido");

//Declaramos un arreglo de 2 dimensiones (matriz).
/*Arrays anidados
[[]},[],[]]  
*/

const personasEnCh30 = [
    ["Luis","Allan","Aneth","Maryluz"], /*ByteMe */
    ["Ed","Jimena","Marifer","Leo","Alejandro"], /*PerryCode */
    ["Lu", "Leo", "Daniel", "Gina"] /*BugBusters */ 
];

console.log(`Integrantes de BugBusters: ${personasEnCh30[2]}`);//Lu, Leo, Daniel, Gina
console.log(`Integrantes de BugBusters: ${personasEnCh30[2].join("-")}`);//Lu, Leo, Daniel, Gina

console.log(`BugBusters integrante n. 1: ${personasEnCh30[2][0]}`);//Lu

// En la historia Leo tiene exceso de amonestaciones.
//Hay qye reemplazar el nombre de Leo en PerryCode por Bryan.

//personasEnCh30[1][3] = "Brayan";
personasEnCh30[1].splice(3,1,"Brayan");
console.table(personasEnCh30);


// -------------- Iterando todos los elementos
for (let equipo = 0; equipo < personasEnCh30.length; equipo++) {
    for (let persona = 0; persona < personasEnCh30[equipo].length; persona++) {
        console.log(personasEnCh30[equipo][persona]);
    }
}

//---------------Uso de for... of ---------------
/* Ejecuta una setencia por cada elemento de un objeto
iterable (array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
}

*/

const myPet = "Kraken";
for (const character of myPet) {
    console.log(character);
}
//Refactorizar lo anterior con forEach
myPet.split("").forEach((char) => console.log(char));



for (const equipo of personasEnCh30) {
    console.log(equipo);
    for (const persona of equipo) {
        console.log(persona);
    }
}

/* ------------- forEach --------------
Método que se utiliza para iterar colecciones, arreglos. 
Perminte ejecutar una función por cada elemento del arreglo.
No funciona con Strings.
*/

function iterarEquipos(equipo, indice, arreglo){
    console.log(`Indice ${indice}: ${equipo}`);
    equipo.forEach(iterarPersonas);
    return equipo;
}

function iterarPersonas(persona, indice){
    console.log(`Indice P ${indice}: ${persona}`);
    return persona;
}


//personasEnCh30.forEach(iterarEquipos);
personasEnCh30.forEach((equipo,indexEquipo)=> 
    equipo.forEach((persona,indexPer)=> 
        console.log(`[${indexEquipo}][${indexPer}] : ${persona}`)));

/*--------------------Uso de break en ciclos -----------------
break detiene la ejecución de la iteración en curso y termina
el ciclo
*/ 

for (let index = 0; index < 10; index++) {
    if (index > 5) break;
    console.log(index);   
}

//Realizar tablas de multiplicar de 1 al 5
/* 
1*1 = 1
...
5*10 = 50
*/

for (let num1 = 1; num1 < 6; num1++) {
    for(let num2 = 1; num2< 11; num2++){
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
    }
    
}

console.log("===== Uso de break =========");
//Realizar la multiplicación hasta el 4
for (let num1 = 1; num1 < 6; num1++) {
    for(let num2 = 1; num2< 11; num2++){
        if(num2 > 4) break;
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
    }
    
}

console.log("===== Uso de break con tag =========");
//Realizar la multiplicación hasta el 2*4
for (let num1 = 1; num1 < 6; num1++) {

    for(let num2 = 1; num2< 11; num2++){
        if(num2 > 4 && num1 >1) break;
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
    }   
    if(num1 > 1) break;
}

rompeCicloSuperior:
for (let num1 = 1; num1 < 6; num1++) {

    for(let num2 = 1; num2< 11; num2++){
        if(num2 > 4 && num1 > 1) break rompeCicloSuperior;
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
    }   
}

// ------- Uso de continue --------------
/* 
Termina la ejecución en la iteración actual y continua con la próxima iteración
(o en el tag que se indique).
*/
//Realizar la multiplicación hasta el 3
// 1*1, ... 1*3, 2*1

console.log("===== Uso de continue =========");
continuaCicloSuperior:
for (let num1 = 1; num1 < 6; num1++) {

    for(let num2 = 1; num2< 11; num2++){
        if(num2 > 3) continue continuaCicloSuperior;
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
    }   
}




