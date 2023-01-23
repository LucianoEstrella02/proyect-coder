let nombreTurnos = null;
let diaTurno;
let horaTurno;
let formularioTurno = document.querySelector("#formularioTurno");
let turnoReservado = document.querySelector ("#turnoReservado");
const btnReserv = document.querySelector("#btnTurno");

const validarTurno = () =>{
    nombreTurnos = document.getElementById('nombreTurno').value;
    diaTurno = document.getElementById('dropdownDia').selected;
    horaTurno=document.getElementById('dropdownHora').selected;
}

window.addEventListener('load',function(){
    formularioTurno.addEventListener('submit',(evento)=>{
        evento.preventDefault();
        validarTurno();
        

        if(nombreTurnos.trim()==null || nombreTurnos.trim().length<=0){
            Swal.fire({
                title: "Por Favor Ingrese todos sus Datos.",
                text: "Por Favor Ingrese su Nombre y Apellido",
                icon: "error",
            });
            return false;
        }else if(diaTurno){
            Swal.fire({
                title: "POR FAVOR COMPLETE TODOS LOS CAMPOS.",
                text: "Por Favor Seleccione el Día del Turno",
                icon: "error",
            });

        }else if(horaTurno){
            Swal.fire({
                title: "POR FAVOR COMPLETE TODOS LOS CAMPOS.",
                text: "Por favor Seleccione el Horario del turno",
                icon: "error",
            });
        }else{
           
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: nombreTurnos +'SU TURNO HA SIDO RESERVADO',
                showConfirmButton: true,
                timer: 4000
              }).then(function () {
               window.location.reload();});

        };       
    });
    
});

