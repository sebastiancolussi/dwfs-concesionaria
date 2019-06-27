var autos = [];

let formulario = document.getElementById("form-carga");

function limpiarFormulario() {
    formulario.precio.value = '';
    formulario.marca.value = '';
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

function Auto (marca, precio){
	this.marca = marca;
	this.precio = precio;
}

function agregarAuto (marca,precio){
	if(marca == undefined ||  marca==null && precio==undefined || precio==null){
		alert("Complete ambos parametros")
	}else{
		var auto = new Auto(marca,precio);
		autos.push(auto);
	}
}