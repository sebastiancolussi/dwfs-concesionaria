var autos = [];

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

function Auto (marca, precio){
	this.marca = marca;
	this.precio = precio;
}

<<<<<<< HEAD
formulario.addEventListener('submit', showResults)

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
=======
function agregarAuto (marca,precio){
	if(marca == undefined ||  marca==null && precio==undefined || precio==null){
		alert("Complete ambos parametros")
	}else{
		var auto = new Auto(marca,precio);
		autos.push(auto);
	}
}
>>>>>>> 4b88fe30b23f658b8f1e6ffd520745509c48b39e
