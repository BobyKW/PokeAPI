const input = document.getElementById('input')
const submitBtn = document.getElementById('submit')
const contenedorMostrar = document.getElementById('mostrar')


submitBtn.addEventListener('click', e => {

    e.preventDefault()

    let divEliminar = document.querySelector('#mostrar div')
    
    if(divEliminar == null){
        
        traerPokemon(input.value)

    } else {
        
        contenedorMostrar.removeChild(divEliminar)
        traerPokemon(input.value)

    }
    
})



function traerPokemon(pokemon){

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response) => response.json())
    .then(data => {
        crearPokemon(data)
        mostrarEXPBase(data)
    })
    
}



function crearPokemon(pokemon){

    const imgSprites = document.createElement('img')
    imgSprites.src = pokemon.sprites.front_default;
    imgSprites.style.height = "15%"
    imgSprites.style.width = "15%"


    const h3 = document.createElement('h3')
    h3.textContent = pokemon.name;


    const div = document.createElement('div')
    div.appendChild(imgSprites)
    div.appendChild(h3)

    
    contenedorMostrar.appendChild(div)
}



// Añadir habilidades
const divMostrarEXPBase = document.getElementById('mostrarEXPBase');

function mostrarEXPBase(pokemon){

    const eXPBase = pokemon.base_experience;
    const habilidad_1 = pokemon.abilities[0].ability.name
    const habilidad_2 = pokemon.abilities[1].ability.name


    divMostrarEXPBase.innerHTML = `
    <table class="w-25 p-4">

        <thead>
            <tr>
                <th>Atributo</th>
                <th>Api Response</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <th>Experiencia base</th>
                <td>${eXPBase}</td>
            </tr>
            
            <tr>
                <th>Habilidad 1</th>
                <td>${habilidad_1}</td>
            </tr>

            <tr>
                <th>Habilidad 2</th>
                <td>${habilidad_2}</td>
            </tr>
        </tbody>

    </table>
    `

    console.log(eXPBase.name)
}