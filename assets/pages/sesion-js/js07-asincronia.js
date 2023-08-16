console.log("Sesión JS 07 API Fetch");

//---------------Programación sincrónica (secuencial)--------------

const primerPaso = () =>{
    console.log("01-Inicio de mi programa")
}
const segundoPaso = () =>{
    console.log("02-Desarrollo de mi programa")
}
const tercerPaso = () =>{
    console.log("03-Fin de mi programa")
}

primerPaso();
segundoPaso();
tercerPaso();

//-------------------- Programación Asíncrona-------------------
/* 
    setTimeout()

    Establece un temporizador que ejecuta una función de callback una
    vez que expire el temporizador

    sintaxis: 
        setTiemout(fnCallback, tiempo_ms)
        setTiemout(()=>{}, tiempo_ms)

        */

const saludo = (name) => console.log(`Hola ${name}`);

const pasoAsincrono = (name) =>{
    //setTimeout(saludo, 5000, name);
    //setTimeout((saludo)=>console.log(`Hola ${name}`), 5000, name);
    setTimeout(()=>console.log(`Hola ${name}`),5000);
};

console.log("**********************************");
primerPaso();
pasoAsincrono("Baby Yoda multiverso");
tercerPaso();