let nombre
let dni
let obraSocial
let turnos
let paciente
let dia
let mes


function ingresoPaciente() {
    nombre = prompt("Bienvenido a GenBio Laboratorio, escriba su Nombre y Apellido");
    dni = prompt("Indique su numero de Documento");
    obraSocial = prompt("Indique su Obra Social o si ingresa de forma Particular");

}
ingresoPaciente();




paciente = prompt("Indique con números si desea, 1- Turnos, 2- Indicaciones, 3- Otras consultas,");
if (paciente == 1) {
    turnos = prompt("Indique que turno desea: 1- 8hs, 2- 8.30hs, 3- 9hs , 4- 9.30hs, 5- 10hs");

    function fecha(dia, mes) {
        alert("Fecha asiganada para su turno es el " + " " + dia + "/" + mes)
    }
  

    for (let i = 1; i <= 3; i++) {
        dia = parseInt(prompt("Ingrese el Dia que desea su turno"));
        mes = parseInt(prompt("Ingrese el mes que desea su turno"));
        if ((dia <= 31)&&(mes<=12)){
            break;
        } else {
            alert("ERROR - Día y/o Mes mal ingresado")
        }
    }   
    fecha(dia, mes);

    switch (turnos) {
        case "1":
            alert("Turno asignado a " + " " + nombre + " " + "con Dni n° " + "  " + dni + " " + "Prestador de salud : " + "  " + obraSocial);
            break;
        case "2":
            alert("Turnos Agotados, vuelva a ingresar o comuniquese con nosotros")
            break;
        case "3":
            alert("Turno asignado a " + " " + nombre + " " + "con Dni n° " + "  " + dni + " " + "Prestador de salud : " + "  " + obraSocial);
            break;
        case "4":
            alert("Turno asignado a " + " " + nombre + " " + "con Dni n° " + "  " + dni + " " + "Prestador de salud : " + "  " + obraSocial);
            break;
        case "5":
            alert("Turnos Agotados, vuelva a ingresar o comuniquese con nosotros")
            break;
        default:
            alert("En caso de no requerir ningun turno, comuniquese con nosotros para solicitar el servicio de domicilio");
            break;
    }
} else if (paciente == 2) {
    alert("En nuestra sección de Servicios encontrará las indicaciones más requeridas, ante la duda comuniquesé con nosotros");
} else {
    alert("Estamos para ayudarte por cualquier otra consulta, Gracias!")
}







