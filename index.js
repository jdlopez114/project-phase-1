const firstGen = 151;

document.addEventListener('DOMContentLoaded', () => {
    fetchAllPokemon();
    // activateModal();
})

const fetchAllPokemon = () => {
    for (let i = 1; i <= firstGen; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

        fetch(url)
        .then(res => res.json())
        .then(pokemonData => {
            let pokemonContainer = document.querySelector('#pokemon-container');

            let pokemonCard = document.createElement('div');
            pokemonCard.classList.add("pokemon-card")
            let pokemonImage = document.createElement('img');
            pokemonImage.classList.add("pokemon-image")
            let pokemonNumber = document.createElement('h2');
            pokemonNumber.classList.add("pokemon-number")
            let pokemonName = document.createElement('h3');
            pokemonName.classList.add("pokemon-name");

            pokemonNumber.innerText = pokemonData.id.toString().padStart(3, '0');
            pokemonName.innerText = pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1);
            pokemonImage.src = pokemonData.sprites.front_default;

            pokemonCard.append(pokemonImage, pokemonNumber, pokemonName);
            pokemonContainer.append(pokemonCard);
         
            // activateModal(pokemonData);

            let modal = document.querySelector('#myModal');
            let modalImage = document.querySelector('#img01');
            let close = document.querySelector(".close");   
            
            pokemonImage.onclick = function () {
            modal.style.display = "block";
            modalImage.src = pokemonData.sprites.back_default;
            }

            close.onclick = () => {
                modal.style.display = "none";
            }

            // pokemonImage.addEventListener('click', () => {
            //     modal.showModal();
            // })
        })  
    }
}

const activateModal = (poke) => {
    
    let close = document.querySelector(".close");   
                 
    poke.onclick = () => {
    poke.modal.style.display = "block";
    poke.modalImage.src = pokemonData.sprites.back_default;
    }

    close.onclick = () => {
        modal.style.display = "none";
    }
}

// const closeModal = () => {
   
// }


// function renderPokemon(pokemon){
    
//     pokemon.forEach(poke => {

//             let pokemonContainer = document.querySelector('#pokemon-container');

//             let pokemonCard = document.createElement('div');
//             pokemonCard.classList.add("pokemon-card")
//             let pokemonImage = document.createElement('img');
//             pokemonImage.classList.add("pokemon-image")
//             let pokemonNumber = document.createElement('h2');
//             pokemonNumber.classList.add("pokemon-number")
//             let pokemonName = document.createElement('h3');
//             pokemonName.classList.add("pokemon-name")

//             pokemonNumber.innerText = poke.id;
//             pokemonName.innerText = poke.name[0].toUpperCase() + pokemonData.name.slice(1);
//             pokemonImage.src = pokemonData.sprites.front_default;

//             pokemonCard.append(pokemonImage, pokemonNumber, pokemonName);
//             pokemonContainer.append(pokemonCard);
//     })
// }


// const fetchPokemon = () => {
//     const inputForm = document.querySelector('form');

//     inputForm.addEventListener('submit', (event) => {
//         event.preventDefault();
//         const input = document.querySelector('input#searchByName');

//         fetch(`https://pokeapi.co/api/v2/pokemon/${input.value}`)
//         .then(res => res.json())
//         .then(pokemonData => {
//         // Object.keys(pokemonData).forEach((pokemon) => {
//         //     addOnePokemon(pokemon);

//         // });
//         let pokemonContainer = document.querySelector('#pokemon-container');

//         let card = document.createElement('div');
//         let image = document.createElement('img');
//         let id = document.createElement('h2');
//         let name = document.createElement('h2');
        
//         id.innerText = pokemonData.id;
//         name.innerText = pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1);
//         image.src = pokemonData.sprites.front_default;

//         card.append(image, id, name);
//         pokemonContainer.append(card);

//         })
//     });
// }

// const addOnePokemon = (pokemon) => {
//     let pokemonContainer = document.querySelector('#pokemon-container');

//     let card = document.createElement('div');
//     let id = document.createElement('h2');
//     let name = document.createElement('h2');
//     // let type = document.createElement('h2');
//     // let marketValue = document.createElement('h2');
//     id.innerText = pokemon.id;
//     name.innerText = pokemon.name;
//     // type.innerText = pokemon.type;

//     card.append(id, name);
//     pokemonContainer.append(card);
// }