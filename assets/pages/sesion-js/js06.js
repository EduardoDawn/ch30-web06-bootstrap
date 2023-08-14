console.log("Sesión JS 06 Manipulación del DOM")


/* Modificar un elemento HTML por medio de su ID*/
const findElementById = () => {
    const title = document.getElementById("title");

    //title.innerHTML = `Generation - Sesión JS06`;
    title.innerHTML = `<span class="text-primary"> Generation </span>- Sesión JS06`;
}


findElementById();

/*------------------Encontrar elementos por su etiqueta (tag) ---------------
*/

const changeElementsByTagName = () =>{
    const unorderList = document.getElementsByTagName("li");
    console.log(unorderList);

    for (const listItem of unorderList) {
        listItem.innerHTML = `<span class="text-success fs-4"> ${listItem.innerHTML} 🛸 </span>`;
    }
}

changeElementsByTagName();


//------------------------- Uso de selector universal ------------------------------
// querySelector

const findElementByQuerySelector = () =>{
    //const element = document.querySelector("#title");  //seleccionar por ID
    //const element = document.querySelector(".text-warning"); //seleccionar por clase
    //const element = document.querySelector("ul"); //seleccionar por tag
    //const element = document.querySelector("li"); //seleccionar por tag
    const element = document.querySelector("h1 span"); //seleccionar por tag
    console.log(element);
}

findElementByQuerySelector();

//--------------------- Crear un nuevo elemento HTML --------------
// appendChild

const newElement = () => {
    const newElement = document.createElement("div"); // <p> </p>

    newElement.innerHTML = `La CH30 le gusta:
    <ul>
        <li> El Helado </li>
        <li> El Chisme </li>
        <li> Los corridos tumbados </li>
        <li> Escuchar a Mau </li>
        <li> Ser mejores amigos de Anneth </li>
    </ul>
    `;
     const descriptionCh30 = document.querySelector("#descriptionCh30");
     
     descriptionCh30.appendChild(newElement);
}

newElement();

