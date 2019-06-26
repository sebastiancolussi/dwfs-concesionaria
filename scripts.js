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

function actualizarListaAutos() {

	let carList = document.getElementById('car-list')
	let datos = []

	autos.forEach(function (auto) {
		datos.push(`<div class="car">
				<h3>${auto.marca}</h3>
				<p class="price">
						<strong>Precio:</strong>
						<span>$${auto.precio}</span>
				</p>
		</div>`)
	})

	carList.innerHTML = datos.join("")

}
