let formulario = document.getElementById("form-carga");
	
function limpiarFormulario() {
    // Completar
}

function showResults(e) {
    e.preventDefault();
	alert("Completame!");
}

formulario.addEventListener('submit', showResults)