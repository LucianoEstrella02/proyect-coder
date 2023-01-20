//Variables Turnos
let nombreContactoRef = null;
let apellidoContactoRef = null;
let emailContactoRef = null;
let telefonoContactoRef= null;
let comentarioContactoRef = null

const bntEnvio = document.querySelector("#btnEnvio");
let formularioContacto = document.querySelector("#formulario");

const validarFormulario = ()=>{
    nombreContactoRef=document.querySelector("#nombreContacto").value;
    apellidoContactoRef=document.querySelector("#apellidoContacto").value;		
    emailContactoRef=document.querySelector("#emailContacto").value;
    telefonoContactoRef=document.querySelector("#telefonoContacto").value;
    comentarioContactoRef=document.querySelector("#comentarioContacto").value;
    	
}

window.addEventListener(`load`, function (){
    //EventoSubmit
    formularioContacto.addEventListener(`submit`,(evento)=>{
            evento.preventDefault();
            validarFormulario();
            if(nombreContactoRef.trim()== null || nombreContactoRef.trim().length<=0 || apellidoContactoRef.trim() == null || apellidoContactoRef.trim().length <= 0 || emailContactoRef.trim() == null || emailContactoRef.trim().length <= 0 || telefonoContactoRef.trim() == null || telefonoContactoRef.trim().length <= 0|| comentarioContactoRef.trim() == null || comentarioContactoRef.trim().length <= 0){
                    
                    Swal.fire({
                        title: "Por Favor Ingrese todos sus Datos.",
                        text: "",
                        icon: "error",
                    });	
                    	
                                    
                    return false;

                }else{
                    
                 }
                
    
                let sweetNameContact = nombreContactoRef;
                let sweetLastNameContact = apellidoContactoRef;
               
    
    
                Swal.fire({
                    title: "SU MENSAJE HA SIDO ENVIADO CORRECTAMENTE",
                    text: sweetNameContact + sweetLastNameContact +" Su mensaje ha sido enviado correctamente, en breve nos comunicaremos con usted. Muchas Gracias." ,
                    icon: "success",
                }).then(function () {
                    window.location.reload();
                });
        
            });
    });
    
















//Variables (Formulario-PageContacto)
// let nombreContactoRef = document.querySelector("#nombre");
// let apellidoContactoRef = document.querySelector("#apellido");
// let emailContactoRef = document.querySelector("#email");
// let telefonoContactoRef = document.querySelector("#telefono");
// let consultaContacto = document.querySelector("#consulta");
// let formularioContacto = document.querySelector("#formulario");
// let comentarioContactoRef = document.querySelector("#comentario");
// let btnEnvioContacto=document.querySelector(".btn-envio");

// //Eventos (Formulario-PageContacto)

// nombreContactoRef.addEventListener("keypress",(evento)=>{
//     let codNombre = evento.charCode;
//     if(codNombre != 0){
//         if(codNombre<65||codNombre>90 && (codNombre<97||codNombre>122)){
//             evento.preventDefault()
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'error',
//                 title: 'Usar solo Minúsculas y Mayúsculas',
//                 showConfirmButton: true,
//                 timer: 2500
//               });
//         }
//     }
// });

// apellidoContactoRef.addEventListener("keypress",(evento)=>{
//     let codNombre = evento.charCode;
//     if(codNombre != 0){
//         if(codNombre<65||codNombre>90 && (codNombre<97||codNombre>122)){
//             evento.preventDefault()
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'error',
//                 title: 'Usar solo Minúsculas y Mayúsculas',
//                 showConfirmButton: true,
//                 timer: 2500
//               });
//         }
//     }
// });

// telefonoContactoRef.addEventListener("keypress",(evento)=>{
//     let codCaracter = evento.charCode;
//     if(codCaracter != 0){
//         if(codCaracter<48 || codCaracter>57){
//             evento.preventDefault()
//             Swal.fire({
//                 position: 'top-end',
//                 icon: 'error',
//                 title: 'Usar solamente números',
//                 showConfirmButton: true,
//                 timer: 2500
//               });
//         }
//     }
// });




// //Informacion del Formulario



// const mostrarInfo= formulario.addEventListener("submit", function(e){
//     e.preventDefault();
    
//     informacionContacto.innerHTML=`
//     <div class="alert alert-dark text-center" role="alert">
//     <h5>Muchas Gracias ${nombreContactoRef.value} por comunicarte con nosotros, en breve nos pondremos en contacto con usted, por el motivo de consulta : ${consultaContacto.value}, al mail  ${emailContactoRef.value} o mediante medio telefonico al ${telefonoContactoRef.value}</h5></div> `;
    
// });



// btnEnvioContacto.addEventListener("click",()=>{
//     Swal.fire({
//         position: 'top-end',
//         icon: 'success',
//         title: 'Tu comentario fue enviado con éxito',
//         showConfirmButton: true,
//         timer: 2500
//       });
// })
































































