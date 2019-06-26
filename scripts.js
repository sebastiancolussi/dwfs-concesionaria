let formulario = document.getElementById("form-carga");



function limpiarFormulario() {
    // Completar
}

function enviarFormulario(e){
    e.preventDefault();
    //Variables 
    var marca = document.getElementById("marca").value;
    var precio = document.getElementById("precio").value;
    agregarAuto(marca, precio);
    actualizarListaDeAutos();
    actualizarEstadisticas();
}

formulario.addEventListener('submit', enviarFormulario)