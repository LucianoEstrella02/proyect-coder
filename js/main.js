//variables
let nombre;
let dni;
let obraSocial;
let IndEsp;
let paciente;
let dia;
let mes;
let arrayOrdenada;


//Clases

class Pacientes {
    constructor(nombre, dni, obraSocial) {
        this.nombre = nombre.toUpperCase();
        this.dni = parseInt(dni);
        this.obraSocial = obraSocial.toUpperCase();
    }
}

class Indicaciones {
    constructor(especialidad, muestra, ayuno, id) {
        this.especialidad = especialidad;
        this.muestra = muestra;
        this.ayuno = ayuno;
        this.id = id

    }
    asignarId(array) {
        this.id = array.length;
    }
}


//Arrays

const indicacion = [
    new Indicaciones("Bioquímica Clínica", "Sangre y Orina", " 12 horas de Ayuno ", 1),
    new Indicaciones("Bacteriología", "Uñas- Fluidos coorporales (Secreciones- Exudados-Semen- Flujos-etc)- Tejidos- Orina- Sangre - Materia Fecal", " No Requiere Ayuno",2),
    new Indicaciones("Endocrinología", "Sangre", " 8 hs como minimo de ayuno",3),
    new Indicaciones("Hematología", "Sangre ", " 8 hs como minimo de ayuno",4)
]



//Ingreso Paciente
nombre = prompt("Bienvenido a GenBio Laboratorio, escriba su Nombre y Apellido");
        console.log(nombre);

function ingresoPaciente(nombre) {
    let access = false;

    for (let i = 1; i <= 3; i++) {
        

        if ((nombre =! nombre)) {
            alert("Nombre y Apellido mal Ingresado. Vuelva a Intentarlo");
        } else {
            access = true;
            
            break;
        }
    }
    dni = parseInt(prompt("Indique su numero de Documento"));
    obraSocial = prompt("Indique su Obra Social o si ingresa de forma Particular");
}
ingresoPaciente(nombre);


//Criterio del Paciente
paciente = prompt("Indique con números si desea: \n1- Turnos \n2- Indicaciones \n3- Otras consultas");

//Seleccion de turnos
if (paciente == 1) {
    const turnos = prompt("Indique que turno desea: \n1- 8hs \n2- 8.30hs \n3- 9hs  \n4- 9.30hs \n5- 10hs");

//Seleccion de Fecha
    function fecha(dia, mes) {
        alert("Fecha asiganada para su turno es el " + " " + dia + "/" + mes);
    }

    for (let i = 1; i <= 3; i++) {
        dia = parseInt(prompt("Ingrese la fecha del día de su turno (dd)"));
        mes = parseInt(prompt("Ingrese la fecha del mes de su turno (mm)"));

        if (dia <= 31 && mes <= 12) {
            break;
        } else {
            alert("ERROR - Día y/o Mes mal ingresado");
        }
    }
    fecha(dia, mes);

    switch (turnos) {
        case "1":
            alert("Estimado " + nombre + " Su turno fue asignado,se le recomienda llegar 10 minutos antes, Muchas Gracias");
            break;
        case "2":
            alert("Turnos Agotados, vuelva a ingresar o comuniquese con nosotros");
            break;
        case "3":
            alert("Estimado " + nombre + " Su turno fue asignado,se le recomienda llegar 10 minutos antes, Muchas Gracias");
            break;
        case "4":
            alert("Estimado " + nombre + " Su turno fue asignado,se le recomienda llegar 10 minutos antes, Muchas Gracias");
            break;
        case "5":
            alert("Turnos Agotados, vuelva a ingresar o comuniquese con nosotros");
            break;
        default:
            alert("En caso de no requerir ningun turno, comuniquese con nosotros para solicitar el servicio de domicilio");
            break;
    }

//Seleccion de Indicaciones
} else if (paciente == 2) {
    preparacionPaciente = prompt("Seleccione como quiere ver su indicación pre-analítica :  \n1-Especialidad \n2-Tipo de Muestra \n3-Ayuno");

    function indicaciones(preparacionPaciente, array){
    arrayOrdenada = array.slice(0);
    switch (paciente) {
        case "1":
        return arrayOrdenada.sort((a, b) => a.especialidad.localeCompare(b.especialidad));
            ;
        case "2":
            return arrayOrdenada.sort((a, b) => a.muestra.localeCompare(b.muestra));
            
        case "3":
            return arrayOrdenada.sort((a,b)=>b.ayuno-a.ayuno);
        default:
            alert(
                "En nuestra sección de Servicios encontrará las indicaciones más requeridas, ante la duda comuniquesé con nosotros");
            break;
    }
}

    function resultadoInd(array){
        let info = "";
        array.forEach(element => {
            info+= "Especialidad : " + element.especialidad +  "\n Muestra : "+ element.muestra + "\n Ayuno :" + element.ayuno 
        });
        return info;
    }
    alert(resultadoInd(indicaciones(preparacionPaciente,indicacion)));

} else {
    alert("Estamos para ayudarte por cualquier otra consulta, Gracias!");
}


