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
                    title: 'SU MENSAJE HA SIDO ENVIADO CORRECTAMENTE',
                    text: sweetNameContact + " " + sweetLastNameContact +" Su mensaje ha sido enviado correctamente, en breve nos comunicaremos con usted. Muchas Gracias." ,
                    icon : "success",
                    showClass: {
                      popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                      popup: 'animate__animated animate__fadeOutUp'
                    }
                  })
    
              
            });
    });
    













