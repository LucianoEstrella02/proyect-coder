//Variables (Formulario-PageContacto)
let nombreContacto = document.querySelector("#nombre");
let apellidoContacto = document.querySelector("#apellido");
let emailContacto = document.querySelector("#email");
let telContacto = document.querySelector("#telefono");
let consultaContacto = document.querySelector("#consulta");
let formularioContacto = document.querySelector("#formulario");
let informacionContacto = document.querySelector(".info");
let btnEnvioContacto=document.querySelector(".btn-envio");

//Eventos (Formulario-PageContacto)

nombreContacto.addEventListener("keypress",(evento)=>{
    let codNombre = evento.charCode;
    if(codNombre != 0){
        if(codNombre<65||codNombre>90 && (codNombre<97||codNombre>122)){
            evento.preventDefault()
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Usar solo Minúsculas y Mayúsculas',
                showConfirmButton: true,
                timer: 2500
              });
        }
    }
});

apellidoContacto.addEventListener("keypress",(evento)=>{
    let codNombre = evento.charCode;
    if(codNombre != 0){
        if(codNombre<65||codNombre>90 && (codNombre<97||codNombre>122)){
            evento.preventDefault()
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Usar solo Minúsculas y Mayúsculas',
                showConfirmButton: true,
                timer: 2500
              });
        }
    }
});

telContacto.addEventListener("keypress",(evento)=>{
    let codCaracter = evento.charCode;
    if(codCaracter != 0){
        if(codCaracter<48 || codCaracter>57){
            evento.preventDefault()
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Usar solamente números',
                showConfirmButton: true,
                timer: 2500
              });
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



// btnEnvioContacto.addEventListener("click",()=>{
//     Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: 'Tu comentario fue enviado con éxito',
//         showConfirmButton: true,
//         timer: 2500
//       });
// })
































































