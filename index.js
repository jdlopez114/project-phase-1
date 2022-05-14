const firstGen = 151;

document.addEventListener('DOMContentLoaded', () => {
    fetchAllPokemon();
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

        })  
    }
}



