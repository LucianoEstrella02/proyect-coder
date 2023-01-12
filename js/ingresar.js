//contact
let mensajePaciente = document.getElementById('notificacionPaciente');
let nombreContact = document.getElementById('confirmacionPaciente');

//valores form
let userPaciente = document.getElementById('nombrePaciente');
let passwordPaciente = document.getElementById('contrasena');



let btnIngreso = document.getElementById('ingresando');

if (btnIngreso) {
    btnIngreso.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.setItem('user', userPaciente.value);
        localStorage.setItem('password', passwordPaciente.value);
        
        let saludoUser = localStorage.getItem('user');
        mensajePaciente.innerHTML= Swal.fire({
            title: 'Bienvenido a GenBio Laboratorio '+ saludoUser,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          });

        mensajePaciente.innerHTML = '<div class= "alert alert-warning text-center fs-4" role="alert">¡Bienvenido a Genbio Laboratorio ' + saludoUser + '!</div> ';
    });
}
