console.log("Formulario");

//Obtenemos la referencia del formulario
//const registerForm = document.getElementById("registerForm");
const registerForm = document.forms["registerForm"];

//registerForm.addEventListener("submit",fncCallback);
registerForm.addEventListener("submit",(event)=>{
    event.preventDefault(); //Omitir las acciones por default
    //console.log(event); //datos del click
    /* const email = registerForm.elements["email"];
    console.log(email.value); //se agrega value para ver el valor del objeto
    const birthdate = registerForm.elements["birthdate"];
    console.log(birthdate.value); */
    const user = {
        fullname:registerForm.elements["fullname"].value,
        email:registerForm.elements["email"].value,
        password:registerForm.elements["password"].value,
        birthdate:registerForm.elements["birthdate"].value,
    };

    const age = calculateAge(user);

    if(age.year < 18) {
        //alert(`Al rato regresas, aún tienes ${age.year} años`)
        appendAlert(`Al rato regresas, aún tienes ${age.year} años`,'warning')
    };

});

const calculateAge = ({birthdate : birthdateStr}) =>{
    //console.log(birthdateStr); //1996-11-30

    //Date entrega los segundos transcurridos desde el 01/01/1970
    const today = new Date(); //Crear un objeto con la fecha en curso
    const birthdate = new Date(birthdateStr);//Objeto con la fecha 1996-11-30
    const difference = today - birthdate;
    //console.log(difference); // 842810745401 segundos de diferencia
    const age = new Date(difference);
   /*  console.log(age);
    console.log(`years: ${age.getFullYear() - 1970}`); //1996 - 1970 = 26
    console.log(`Months: ${age.getMonth()}`); //
    console.log(`Days: ${age.getDate()}`); // */
    return {
        year: age.getFullYear() - 1970,
        month:age.getMonth() ,
        day: age.getDate(),
    }
}

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

/* const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success')
  })
} */