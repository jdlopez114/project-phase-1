const firstGen = 151;
let pokeArr = [];


document.addEventListener('DOMContentLoaded', () => {
    fetchAllPokemon();
    // activateModal()
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

    // activateModal(pokemon);
    let modal = document.querySelector('#myModal');
    let modalImage = document.querySelector('#img01');
    let closeModal = document.querySelector(".close"); 

    pokemonImage.addEventListener('click', () => {
        modal.style.display = "block";
        modalImage.src = pokemon.sprites.back_default;
    })

    closeModal.addEventListener('click', () => {
        modal.style.display = "none";
    })
}

// const activateModal = (pokemon) => {
//     let pokemonImage = document.querySelector("pokemon-image");
//     let modal = document.querySelector('#myModal');
//     let modalImage = document.querySelector('#img01');
//     let closeModal = document.querySelector(".close"); 
    
//     console.log(pokemonImage)
    
//     pokemonImage.addEventListener('click', () => {
//         modal.style.display = "block";
//         modalImage.src = pokemon.sprites.back_default;
//     })

//     closeModal.addEventListener('click', () => {
//         modal.style.display = "none";
//     })

//     // pokemonImage.onclick = () => {
        
//     // }

//     // closeModal.onclick = () => {
        
//     // }
// }