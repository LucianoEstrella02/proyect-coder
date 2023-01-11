//Variables Usuario
let user = document.querySelector("#usuario");
let password = document.querySelector("#contraseña");
let btnStartesion = document.querySelector("iniciarSesion");
let sesioniniciada = document.querySelector(".inicioSesion");

if(btnStartesion){
    btnStartesion.addEventListener(`click`,(e)=>{
        e.preventDefault();
        localStorage.setItem("user",user.value);
        sessionStorage.setItem("apellido", password.value);


        sesioniniciada.innerHTML=`
        <div>
        <h5>Bienvenido ${user}</h5>
        </div>
        `
        

    });
};