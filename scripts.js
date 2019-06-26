let formulario = document.getElementById("form-carga");
	
function limpiarFormulario() {
    formulario.precio.value = '';
    formulario.marca.value = '';
}

function showResults(e) {
    e.preventDefault();
	alert("Completame!");
}

formulario.addEventListener('submit', showResults)