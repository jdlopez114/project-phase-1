const firstGen = 151;
const pokeArr = [];


document.addEventListener('DOMContentLoaded', () => {
    fetchAllPokemon();
    // activateModal()
    // formSearch();
    searchBar();
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
    // pokemonNumber.innerText = pokemon.id;
    // pokemonName.innerText = pokemon.name;
    pokemonImage.src = pokemon.sprites.front_default;

    pokemonCard.append(pokemonImage, pokemonNumber, pokemonName);
    pokemonContainer.append(pokemonCard);

    // activateModal(pokemon);
    
    let modalImage = document.querySelector('#img01');
    let closeModal = document.querySelector(".close"); 
    let modal = document.querySelector('#myModal');

//     pokemonImage.addEventListener('click', open)
    pokemonImage.addEventListener('click', () => {
        modal.style.display = "block";
        modalImage.src = pokemon.sprites.back_default;
    })       

//     closeModal.addEventListener('click', close)
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
// }



// const open = () => {
//     modal.style.display = "block";
//     this.modalImage.src = pokemon.sprites.back_default;
// }

// const close = () => {
//     modal.style.display = "none";
// }

// const formSearch = () => {
//     let inputForm = document.querySelector('form');
//     let searchByName = document.querySelector('#searchByName');

//         inputForm.addEventListener('submit', (e) => {
//             e.preventDefault();
//             searchByName.value = "";

//             let input = e.target.value;
//             let filteredPoke = pokeArr.filter(poke => {
//                 return poke.name.toLowerCase().includes(input);
//         });
//         renderPokemon(filteredPoke);
//     })
// }

const searchBar = () => {
    let searchBar = document.querySelector('#searchByName');

    searchBar.addEventListener('keyup', (e) => {
        let input = e.target.value.toLowerCase();
        let filteredPoke = pokeArr.filter(poke => {
            return poke.name.includes(input);
        });
        console.log(filteredPoke)
        // renderPokemon(filteredPoke);
    })
}
