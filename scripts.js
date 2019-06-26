let formulario = document.getElementById("form-carga");

function limpiarFormulario() {
    // Completar
}

function showResults(e) {
    e.preventDefault();
	alert("Completame!");
}

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
