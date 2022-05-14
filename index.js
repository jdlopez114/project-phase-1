const firstGen = 151;

document.addEventListener('DOMContentLoaded', () => {
    // fetchPokemon();
    fetchAllPokemon();
})

const fetchAllPokemon = () => {
    for (let i = 1; i <= firstGen; i++){
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;

        fetch(url)
        .then(res => res.json())
        .then(pokemonData => {
            let pokemonContainer = document.querySelector('#pokemon-container');

            let card = document.createElement('div');
            let image = document.createElement('img');
            let id = document.createElement('h2');
            let name = document.createElement('h2');
        
            id.innerText = pokemonData.id;
            name.innerText = pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1);
            image.src = pokemonData.sprites.front_default;

            card.append(image, id, name);
            pokemonContainer.append(card);
        })
    }
}


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