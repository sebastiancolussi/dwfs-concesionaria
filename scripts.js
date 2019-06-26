let formulario = document.getElementById("form-carga");
	
function limpiarFormulario() {
    // Completar
}

function showResults(e) {
    e.preventDefault();
	alert("Completame!");
}

formulario.addEventListener('submit', showResults);

function Auto (marca, precio){
	this.marca=marca;
	this.precio=precio;
}
var autos = [];

function agregarAuto (marca,precio){
	if(marca == undefined ||  marca==null && precio==undefined || precio==null){
		alert("Complete ambos parametros")
	}else{
		var auto = new Auto(marca,precio);
		autos.push(auto);
	}
}
