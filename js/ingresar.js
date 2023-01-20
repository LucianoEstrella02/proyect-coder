let userPaciente = null;
let passwordPaciente = null;
let mensajePaciente = null;
let nombreContact = null;
let saludoUser = null;


//contact
 mensajePaciente = document.getElementById('notificacionPaciente');
 nombreContact = document.getElementById('confirmacionPaciente');

//valores form


const validarIngreso = ()=>{
  userPaciente = document.getElementById('nombrePaciente').value;
  passwordPaciente = document.getElementById('contrasena').value;
  localStorage.setItem('user', userPaciente);
  localStorage.setItem('password', passwordPaciente);
}



let btnIngreso = document.getElementById('ingresando');


    btnIngreso.addEventListener('click', (e) => {
        e.preventDefault();
        validarIngreso();
        
        
        
        if(userPaciente.trim()==null || userPaciente.trim()<=0 || passwordPaciente.trim()==null || passwordPaciente.trim()<=0){
        //   // Swal.fire({
        //     title: "Por Favor Ingrese todos sus Datos.",
        //     text: "",
        //     icon: "error",
        // });
        alert("Complete los campos")
        return false;
        }else{
          saludoUser = localStorage.getItem('user');
          alert("campos completados");
        }

        /*
        mensajePaciente.innerHTML= Swal.fire({
            title: 'Bienvenido a GenBio Laboratorio '+ saludoUser,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });
*/
        mensajePaciente.innerHTML = '<div class= "alert alert-warning text-center fs-4" role="alert">¡Bienvenido a Genbio Laboratorio ' + saludoUser + '!</div> ';
    });


    function ocultarElemento(){
      validarIngreso();
      if(userPaciente.trim()==null || userPaciente.trim()<=0 || passwordPaciente.trim()==null || passwordPaciente.trim()<=0){
      }else{
      var contenedorLogin = document.getElementById("contenedorLogin");
      var contenedorAfterLogin = document.getElementById("contenedorAfterLogin"); 

      if(contenedorLogin.style.display === "none"){

        contenedorLogin.style.display = "block";
        contenedorAfterLogin.style.display = "none";

      }else{

        contenedorLogin.style.display = "none";
        contenedorAfterLogin.style.display = "block";
        let url = "http://jsonplaceholder.typicode.com/users";
        fetch(url)
        .then (response => response.json())
        .then (data => mostrarData(data))
        .catch (error => console.log(error));
        
        const mostrarData = (data) =>{
        
        let body = ""
        console.log(data);
        for (let i= 0; i < data.length; i++) {
            body+=
        `<tr>
            <td>
        ${data[i].id} 
            </td>
            <td>
        ${data[i].name}
            </td>
            <td>
            ${data[i].email}
            </td>
            <td>
            ${data[i].phone}
            </td>
            <td>
            ${data[i].address.zipcode}
            </td>
        </tr>
        `
        };
        document.getElementById('cuerpoTabla').innerHTML = body;
        }
        
}
}
}

function wolcomeBack(){

  var contenedorLogin = document.getElementById("contenedorLogin");
  var contenedorAfterLogin = document.getElementById("contenedorAfterLogin"); 

  if(contenedorLogin.style.display === "block"){

    contenedorLogin.style.display = "none";
    contenedorAfterLogin.style.display = "block";

  }else{

    contenedorLogin.style.display = "block";
    contenedorAfterLogin.style.display = "none";
  }
}
