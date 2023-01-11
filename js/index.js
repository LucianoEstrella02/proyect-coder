let nombreTurnos = document.querySelector("#nombreTurno");
let turnoElegido = document.querySelectorAll(".form-select");
let reservarTurno = document.querySelector("#btn-turno");



reservarTurno.addEventListener("click",(e)=>{
    let servSalud=document.querySelector("#servSalud").value;
    let dia=document.querySelector("#diaTurno").value;
    let horario=document.querySelector("#horaTurno").value;
    let turnoReservado=document.querySelector(".turnoReservado");

    turnoReservado.innerHTML = `
    <div class= "alert alert-primary text-center" role="alert">
    <h5>${nombreTurnos.value} (${servSalud}) su turno ha sido reservado con exito. Deberá asistir el día ${dia} en el horario ${horario} horas. Muchas Gracias</h5>
    </div>
    `;

    e.preventDefault();

});

reservarTurno.addEventListener("click",()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'TU TURNO HA SIDO REGISTRADO',
        showConfirmButton: false,
        timer: 1500
      });
});