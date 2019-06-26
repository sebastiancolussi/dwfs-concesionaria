let formulario = document.getElementById("form-carga");
	
function limpiarFormulario() {
    var input_marca = document.getElementsByName('marca');
    var input_precio = document.getElementsByName('precio');
    input_marca[0].value = '';
    input_precio[0].value = '';
}

function showResults(e) {
    e.preventDefault();
	alert("Completame!");
}

formulario.addEventListener('submit', showResults)