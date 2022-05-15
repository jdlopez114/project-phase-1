const firstGen = 151;
let pokeArr = [];


document.addEventListener('DOMContentLoaded', () => {
    fetchAllPokemon();
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
    let pokemonNumber = document.createElement('h2');
    pokemonNumber.classList.add("pokemon-number")
    let pokemonName = document.createElement('h3');
    pokemonName.classList.add("pokemon-name");
    
    pokemonNumber.innerText = pokemon.id.toString().padStart(3, '0');
    pokemonName.innerText = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    pokemonImage.src = pokemon.sprites.front_default;

    pokemonCard.append(pokemonImage, pokemonNumber, pokemonName);
    pokemonContainer.append(pokemonCard);

    let modal = document.querySelector('#myModal');
    let modalImage = document.querySelector('#img01');
    let closeModal = document.querySelector(".close");   
    
    pokemonImage.onclick = () => {
        modal.style.display = "block";
        modalImage.src = pokemon.sprites.back_default;
    }

    closeModal.onclick = () => {
        modal.style.display = "none";
    }
}

