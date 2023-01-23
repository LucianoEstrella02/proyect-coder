//Variables Turnos
let nameRegistro = null;
let apellidoRegistro = null;
let dniRegistro = null;
let emailRegistro = null;
let contrasenaRegistro = null;
const bnt = document.getElementById("#registrarse");
let formulario=document.querySelector("#formRegistro");

const validarFormulario = ()=>{
    nameRegistro=document.querySelector("#nombreForm").value;
    apellidoRegistro=document.querySelector("#apellidoForm").value;		
    dniRegistro=document.querySelector("#dniForm").value;
    emailRegistro=document.querySelector("#correoForm").value;
    contrasenaRegistro=document.querySelector("#contrasenaForm").value;
}

window.addEventListener(`load`, function (){
    //EventoSubmit
        formulario.addEventListener(`submit`,(evento)=>{
            evento.preventDefault();
            validarFormulario();
            if(nameRegistro.trim()== null || nameRegistro.trim().length<=0 || apellidoRegistro.trim() == null || apellidoRegistro.trim().length <= 0 || dniRegistro.trim() == null || dniRegistro.trim().length <= 0 || emailRegistro.trim() == null || emailRegistro.trim().length <= 0 || contrasenaRegistro.trim() == null || contrasenaRegistro.trim().length <= 0){

                 document.querySelector("#nombreForm + span").innerHTML = '<span class="fa-solid fa-xmark"></span>';
                document.querySelector("#apellidoForm + span").innerHTML = '<span class="fa-solid fa-xmark"></span>';
                document.querySelector("#dniForm + span").innerHTML = '<span class="fa-solid fa-xmark"></span>';
                document.querySelector("#correoForm + span").innerHTML = '<span class="fa-solid fa-xmark"></span>';
                document.querySelector("#contrasenaForm + span").innerHTML = '<span class="fa-solid fa-xmark"></span>';
                Swal.fire({
                    title: "Por Favor Ingrese todos sus Datos.",
                    text: "",
                    icon: "error",
                });
                return false;
            }else{
                document.querySelector("#nombreForm + span").innerHTML = '';
                document.querySelector("#apellidoForm + span").innerHTML = '';
                document.querySelector("#dniForm + span").innerHTML = '';
                document.querySelector("#correoForm + span").innerHTML = '';
                document.querySelector("#contrasenaForm + span").innerHTML = '';
            }

            let sweetNameReg = nameRegistro;
            let sweetApellidoReg = apellidoRegistro;
            let sweetDniReg = dniRegistro;
            let sweetCorreoReg = emailRegistro;

            Swal.fire({
                title: "SUS DATOS HAN SIDO REGISTRADOS CORRECTAMENTE",
                text: "Nombre: " + sweetNameReg + "Apellido " + sweetApellidoReg + " Dni: " + sweetDniReg + "Correo: " + sweetCorreoReg, 
                icon: "success",
            }).then(function () {
                window.location.reload();
            });
    
        });
});






