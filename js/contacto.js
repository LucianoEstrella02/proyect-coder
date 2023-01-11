//Variables (Formulario-PageContacto)
let nombreContacto = document.querySelector("#nombre");
let apellidoContacto = document.querySelector("#apellido");
let emailContacto = document.querySelector("#email");
let telContacto = document.querySelector("#telefono");
let consultaContacto = document.querySelector("#consulta");
let formularioContacto = document.querySelector("#formulario");
let informacionContacto = document.querySelector(".info");

//Eventos (Formulario-PageContacto)

nombreContacto.addEventListener("keypress",(evento)=>{
    let codNombre = evento.charCode;
    if(codNombre != 0){
        if(codNombre<65||codNombre>90 && (codNombre<97||codNombre>122)){
            evento.preventDefault()
            alert("Solo puede ingresar letras (Mayúsculas o Minúsculas)");
        }
    }
});

apellidoContacto.addEventListener("keypress",(evento)=>{
    let codNombre = evento.charCode;
    if(codNombre != 0){
        if(codNombre<65||codNombre>90 && (codNombre<97||codNombre>122)){
            evento.preventDefault()
            alert("Solo puede ingresar letras (Mayúsculas o Minúsculas)");
        }
    }
});

telContacto.addEventListener("keypress",(evento)=>{
    let codCaracter = evento.charCode;
    if(codCaracter != 0){
        if(codCaracter<48 || codCaracter>57){
            evento.preventDefault()
            alert("En este campo solo puedes ingresar números");
        }
    }
});

//Informacion del Formulario

const mostrarInfo= formulario.addEventListener("submit", function(e){
    e.preventDefault();
    informacionContacto.innerHTML=`
    <div class="alert alert-dark text-center" role="alert">
    <h5>Muchas Gracias ${nombreContacto.value} por comunicarte con nosotros, en breve nos pondremos en contacto con usted, por el motivo de consulta : ${consultaContacto.value}, al mail  ${emailContacto.value} o mediante medio telefonico al ${telContacto.value}</h5></div> `;
});




































































