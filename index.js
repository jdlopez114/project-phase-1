const firstGen = 151;

document.addEventListener('DOMContentLoaded', () => {
    fetchAllPokemon();
    searchPokemon();
})

const fetchAllPokemon = () => {
    
    for (let i = 1; i <= firstGen; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

        fetch(url)
        .then(res => res.json())
        .then(pokeData => renderPokemon(pokeData))
    }
}

const renderPokemon = (pokemon) => {
    let pokemonContainer = document.querySelector('#pokemon-container');
    let pokemonCard = document.createElement('div');
    pokemonCard.classList.add("pokemon-card")
    let pokemonImage = document.createElement('img');
    pokemonImage.classList.add("pokemon-image")

    pokemonImage.src = pokemon.sprites.front_default;

    pokemonCard.append(pokemonImage)
    pokemonContainer.append(pokemonCard);

    let modalImage = document.querySelector('#img01');
    let closeModal = document.querySelector(".close"); 
    let modal = document.querySelector('#myModal');
    let modalType = document.querySelector('.modal-type');
    let modalId = document.querySelector('.modal-id');
    let modalName = document.querySelector('.modal-name');

    pokemonImage.addEventListener('click', () => {
        modal.style.display = "block";
        modalImage.src = pokemon.sprites.front_shiny;
        modalId.innerText = `Number: ${pokemon.id.toString().padStart(3, '0')}`;
        modalName.innerText = `Name: ${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}`;
        modalType.innerText = `Types: ${pokemon.types.map(type => type.type.name[0].toUpperCase() + type.type.name.slice(1)).join(", ")}`
    })       

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    })
}


const searchPokemon = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const input = document.querySelector('input#searchByName');
        const pokeContainer = document.querySelector('#pokemon-container')
        const id = input.value;

        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res => res.json())
        .then(pokemonData => {
      
        pokeContainer.style.display = "none"
        renderOnePokemon(pokemonData)
        input.value = '';
        })
    }); 
}

const renderOnePokemon = (pokemon) => {

    let pokemonContainer = document.querySelector('#pokemon-container2');
    let pokemonCard = document.createElement('div');
    pokemonCard.classList.add("pokemon-card")
    let pokemonImage = document.createElement('img');
    pokemonImage.classList.add("pokemon-image")

    pokemonImage.src = pokemon.sprites.front_default;

    pokemonCard.append(pokemonImage)
    pokemonContainer.append(pokemonCard);

    let modalImage = document.querySelector('#img01');
    let closeModal = document.querySelector(".close"); 
    let modal = document.querySelector('#myModal');
    let modalType = document.querySelector('.modal-type');
    let modalId = document.querySelector('.modal-id');
    let modalName = document.querySelector('.modal-name');

    pokemonImage.addEventListener('click', () => {
        modal.style.display = "block";
        modalImage.src = pokemon.sprites.front_shiny;
        modalId.innerText = `Number: ${pokemon.id.toString().padStart(3, '0')}`;
        modalName.innerText = `Name: ${pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}`;
        modalType.innerText = `Types: ${pokemon.types.map(type => type.type.name[0].toUpperCase() + type.type.name.slice(1)).join(", ")}`
    })       

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    })
}