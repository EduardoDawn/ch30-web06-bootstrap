console.log("Página en construcción con Patricio Estrella");


function clickPatricio(){
    alert("Patricio lo esta intentando!!");
}

function changeColor(elementHtml, color){
    //alert("Que emocion voy a cambiar mi color");
   // console.log(color);

    elementHtml.style.color = color;
}

function changeTextOfUserColor(element, color){
    element.innerHTML = `Ahora soy <em> ${color} </em>`;
}

function changeColorWithPromt( elementHtml) {
    const color = prompt("Dime el color en inglés", "yellow");
    changeColor( elementHtml, color );
    changeTextOfUserColor(elementHtml,color);
    //cambiaColor.innerText = "Ahora soy " + color;
}

function resetColor(){
    /* const refGreenColor = document.getElementById('green-color');
    const refRedColor = document.getElementById('red-color');
    const refPurpleColor = document.getElementById('purple-color');
    const refUserColor = document.getElementById('user-color');

    changeColor(refRedColor,'black');
    changeColor(refPurpleColor,'black');
    changeColor(refGreenColor,'black');
    changeColor(refUserColor,'black'); */

    const refClass = document.getElementsByClassName('cambiaColor');

    for (let i = 0; i < refClass.length; i++){
        changeColor(refClass[i], 'black');
        if (i == refClass.length - 1){
            refClass[i].innerHTML = `Cambia mi color al que tú desees`;
        }
    }
}

function saludoNombre(){
    const nombre = prompt("¿Cuál es tu nombre","Ed");
    const refSaludo = document.getElementById('Saludo');
    refSaludo.innerHTML = `Hola ${nombre}`;
}
