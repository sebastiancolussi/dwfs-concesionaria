let formulario = document.getElementById("form-carga");

// array de autos
var autos = 
[{
    "marca": "Ford",
    "precio": 3000
},
{
    "marca": "Chevrolet",
    "precio": 1000
},
{
    "marca": "Open",
    "precio": 6000
},
{
    "marca": "Mercedes",
    "precio": 1000
},
{
    "marca": "Ferrari",
    "precio": 8000
},
{
    "marca": "Ford",
    "precio": 7000
},
{
    "marca": "Ford",
    "precio": 9000
},
{
    "marca": "Ford",
    "precio": 500
}];


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
        }
    },
    {
        titulo: 'Auto más caro',
        valor () {
            var max = 0;
            
            autos.forEach(auto => {
                console.log(auto)
                if (auto.precio > max) {
                    max = auto.precio
                }
            });
            console.log(max)
        }
    },
    {
        titulo: 'Auto más caro',
        valor () {
            
            var min = autos[0].precio;
            autos.forEach(auto => {
            
                if (auto.precio < min) {
                    return min = auto.precio 
                }
            });
            console.log('minimo ' + min)
        }
    }
];

// console.log(estadisticas[0].valor())
// console.log(estadisticas[1].valor())
// console.log(estadisticas[2].valor())
// console.log(estadisticas[3].valor())
	
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
