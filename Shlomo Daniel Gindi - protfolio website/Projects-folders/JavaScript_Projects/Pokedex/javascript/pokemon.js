//  --- global vars --- \\ 
const MAX_POKEMON = 151;
const listWrapper = document.querySelector(".list-wrapper");
const searchInput = document.querySelector("#search-input");
const numberFilter = document.querySelector("#number");
const nameFilter = document.querySelector("#name");
const notFoundMessage = document.querySelector("#not-found-message");
const closeButton = document.querySelector('#search-close-icon');

let allPokemons = [];
// end.

// fetch the main objects of data
fetch(`https://pokeapi.co/api/v2/pokemon?limit=${MAX_POKEMON}`)

    .then(response => response.json())
    .then(data => {
        allPokemons = data.results;

        displayPokemons(allPokemons);
    });

async function PokemonDataBeforeRedirect(id) {
    try {
        const [pokemon, pokemonSpecies] = await Promise.all([
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
                .then(res => res.json()),

            fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
                .then(res => res.json())
        ]);

        return true;

    } catch (error) {
        console.error("faild to fetch pokemon data before redirect");
    }
}

// create the pokemons tiles
function displayPokemons(pokemon) {

    // this make sure not to double the append process
    listWrapper.innerHTML = "";

    // create a complete html template to append rpeatedly
    pokemon.forEach(pokemon => {
        const pokemonID = pokemon.url.split("/")[6];
        const listItem = document.createElement("div");
        listItem.className = "list-item";
        listItem.innerHTML = `
            <div class="number-wrap">
            <p class="caption-fonts">#${pokemonID}</p>
            </div>
        
            <div class="img-wrap">
            <img src="https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/other/dream-world/${pokemonID}.svg" alt="${pokemon.name}">
            </div>
        
            <div class="name-wrap">
            <p class="body3-fonts">${pokemon.name}</p>
            </div> `;

        // send clicker to pokemon detailed page
        listItem.addEventListener("click", async () => {
            const success = await PokemonDataBeforeRedirect(pokemonID);
            if (success) {
                window.location.href = `./details.html?id=${pokemonID}`
            }
        });
        listWrapper.appendChild(listItem);
    });
}

// event for searching
searchInput.addEventListener("keyup", handleSearch);
// function for hendleing the search
function handleSearch() {

    const searchTerm = searchInput.value.toLowerCase();

    let filteredPokemons;

    if (numberFilter.checked) {
        filteredPokemons = allPokemons.filter(pokemon => {

            const pokemonID = pokemon.url.split("/")[6];
            return pokemonID.startsWith(searchTerm);
        });
    } else if (nameFilter.checked) {

        filteredPokemons = allPokemons.filter(pokemon =>
            pokemon.name.toLowerCase().startsWith(searchTerm)
        )
    } else {
        filteredPokemons = allPokemons;
    }

    // display filtered pokemons
    displayPokemons(filteredPokemons);

    // hendles the nothing found on search: show not find elem ? hide no find elem.
    if (filteredPokemons.length === 0) {
        notFoundMessage.style.display = 'block';
    } else {
        notFoundMessage.style.display = 'none';
    }
}

// clear search input on click
closeButton.addEventListener('click', clearSearch);

// clear search input function: clear> dispaly all> hide not found.
function clearSearch() {
    searchInput.value = '';
    displayPokemons(allPokemons);
    notFoundMessage.style.display = 'none';
}
