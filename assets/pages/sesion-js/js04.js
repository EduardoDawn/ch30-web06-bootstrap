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
