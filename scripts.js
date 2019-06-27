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

function actualizarEstadisticas () {
//array llamado x, mostrar el html que muestre est. con datos de autos. 
	let tabla = document.getElementById('estadisticas')
	let datos = [];

	estadisticas.forEach(function (obj) {
		datos.push(`<tr>
			<td>${obj.titulo}</td>
			<td>${obj.valor()}</td>
		</tr>`)
	})

	tabla.innerHTML = datos.join("")

}

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