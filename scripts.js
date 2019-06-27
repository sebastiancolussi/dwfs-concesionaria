var autos = [];

let formulario = document.getElementById("form-carga");

var estadisticas = [
    {
        titulo: 'Total de autos',
        valor () {
            return autos.length
        }
    },
    {
        titulo: 'Precio total en autos',
        valor () {
            var valorTemporal = 0;
            autos.forEach(auto => {
				valorTemporal += auto.precio
			});

			return valorTemporal;
        }
    },
    {
        titulo: 'Auto más caro',
        valor () {
            var max = 0;
            
            autos.forEach(auto => {
                if (auto.precio > max) {
                    max = auto.precio
				}
			});
			return max
        }
    },
    {
        titulo: 'Auto más economico',
        valor () {
            
            var min = autos[0].precio;
            autos.forEach(auto => {
                if (auto.precio < min) {
                    min = auto.precio 
                }
			});
			return min
        }
    }
];


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

function agregarAuto (marca,precio){
	if(marca == undefined ||  marca==null && precio==undefined || precio==null){
		alert("Complete ambos parametros")
	}else{
		var auto = new Auto(marca,precio);
		autos.push(auto);

	}
}