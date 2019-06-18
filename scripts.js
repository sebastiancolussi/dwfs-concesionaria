// Elementos a utilizar
let listaDeAutos = document.getElementById('car-list')
let formulario = document.getElementById('form-carga')

// Variables globales
let autos = [
    {
        marca: 'Chevrolet',
        precio: 35000
    },
    {
        marca: 'Ford',
        precio: 15000
    }
]


function actualizarListaAutos () {
    let autosHtml = []
    autos.forEach(auto => {
        autosHtml.push(`
            <div class="car">
                <h3>${auto.marca}</h3>
                <p class="price">
                    <strong>Precio:</strong>
                    <span>$ ${auto.precio}</span>
                </p>
            </div>
        `)
    })
}
