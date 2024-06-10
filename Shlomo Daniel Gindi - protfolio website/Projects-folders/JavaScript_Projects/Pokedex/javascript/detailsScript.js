// --- global vars --- \\

// pokemon id (number)
let currentPokemonId = null;

// end.

// get pokemon id from current url after html loaded
document.addEventListener("DOMContentLoaded", () => {
    const MAX_POKEMONS = 151;
    const pokemonID = new URLSearchParams(window.location.search).get("id");
    const id = parseInt(pokemonID, 10);

    if (id < 1 || id > MAX_POKEMONS) {
        return window.location.href = "./index.html";
    }

    currentPokemonId = id;
    loadPokemon(id);
});

async function loadPokemon(id) {
    try {
        const [pokemon, pokemonSpecies] = await Promise.all([
            fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res =>
                res.json()
            ),
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(res => res.json()),
        ]);

        const abilitiesWrapper = document.querySelector('.pokemon-detail-wrap .pokemon-detail.move');
        abilitiesWrapper.innerHTML = '';

        if (currentPokemonId === id) {

            displayPokemonDetails(pokemon);

            const flavorText = getEnglishFlavorText(pokemonSpecies);
            document.querySelector('.body3-fonts.pokemon-description').textContent = flavorText;

            const [leftArrow, rightArrow] = ["#leftArrow", "#rightArrow"].map(sel =>
                document.querySelector(sel)
            );

            leftArrow.removeEventListener('click', navigatePokemon)
            rightArrow.removeEventListener('click', navigatePokemon)

            if (id !== 1) {
                leftArrow.addEventListener('click', () => navigatePokemon(id - 1));
            };

            if (id !== 151) {
                rightArrow.addEventListener('click', () => navigatePokemon(id + 1));
            };

            // change url without reloding it
            window.history.pushState({}, "", `./details.html?id=${id}`);
        }
        return true;
    } catch (error) {
        console.error("An error fetching pokemon data", error);
        return false;
    }
}

async function navigatePokemon(id) {
    currentPokemonId = id;
    await loadPokemon(id);
}

// colors by type
const typeColors = {
    normal: "#A8A878",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    grass: "#78C850",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    dark: "#EE99AC",
};

function setElementStyles(elements, cssProperty, value) {
    elements.forEach(element => {
        element.style[cssProperty] = value;
    });
}

// turn hex color to rgba
function rgbaFromHex(hexColor) {
    return [
        parseInt(hexColor.slice(1, 3), 16),
        parseInt(hexColor.slice(3, 5), 16),
        parseInt(hexColor.slice(5, 7), 16),
    ].join(', ')
}

// set color theme
function setTypeBackgroundColor(pokemon) {
    const mainType = pokemon.types[0].type.name;
    const color = typeColors[mainType];

    if (!color) {
        console.warn(`color not defined for type:${mainType}`)
        return;
    }

    const detailMainElement = document.querySelector('.detail-main');

    setElementStyles([detailMainElement], "backgroundColor", color);
    setElementStyles([detailMainElement], "borderColor", color);

    setElementStyles(
        document.querySelectorAll('.power-wrapper > p'),
        'backgroundColor',
        color
    );

    setElementStyles(
        document.querySelectorAll('.stats-wrap p.stats'),
        'color',
        color
    );

    setElementStyles(
        document.querySelectorAll('.stats-wrap .progress-bar'),
        'color',
        color
    );

    const rgbaColor = rgbaFromHex(color);
    const styleTag = document.createElement('style');

    styleTag.innerHTML = `.stats-wrap .progress-bar::-webkit-progress-bar{
        background-color: rgba(${rgbaColor},0.5);
    }

    .stats-wrap .progress-bar::-webkit-progress-value{
        background-color:${color};
    } 
    `;

    document.head.appendChild(styleTag);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// appends element where which we provide upon calling function
function createAndAppendElement(parent, tag, options = {}) {
    const element = document.createElement(tag);

    Object.keys(options).forEach(key => {
        element[key] = options[key];
    });

    parent.appendChild(element);
    return element;
}

function displayPokemonDetails(pokemon) {
    const { name, id, types, weight, height, abilities, stats } = pokemon;
    console.log(pokemon)
    const capitalizePokemonName = capitalizeFirstLetter(name);

    // set title page 
    document.querySelector("title").textContent = capitalizePokemonName;
    // add class of pokemon current pokemon name to the main elem
    const detailMainElement = document.querySelector('.detail-main');
    detailMainElement.classList.add(name.toLowerCase());

    // add pokemon name to the details page at top
    document.querySelector('.name-wrap .name').textContent = capitalizePokemonName;

    // add pokemon's number in top page + padd nunber with 0s
    document.querySelector('.pokemon-id-wrap .body2-fonts').textContent = `#${String(id).padStart(3, "0")}`;

    // set pokemon image
    const imageElement = document.querySelector('.detail-img-wrapper img');
    imageElement.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
    imageElement.alt = name;

    // set pokemon power types under the img
    const typeWrapper = document.querySelector(".power-wrapper");
    typeWrapper.innerHTML = '';
    types.forEach(({ type }) => {
        createAndAppendElement(typeWrapper, "p", {
            className: `body3-fonts type ${type.name}`,
            textContent: type.name,
        });
    });

    // set pokemon weight and height
    document.querySelector('.pokemon-detail-wrap .pokemon-detail p.body3-fonts.weight').textContent = `${weight / 10}kg`;
    document.querySelector('.pokemon-detail-wrap .pokemon-detail p.body3-fonts.height').textContent = `${height / 10}m`;

    // set pokemon moves details
    const abilitiesWrapper = document.querySelector('.pokemon-detail-wrap .pokemon-detail.move');

    abilities.forEach(({ ability }) => {
        createAndAppendElement(abilitiesWrapper, "p", {
            className: "body3-fonts",
            textContent: ability.name,
        });
    });

    // reset pokemon stats
    const statsWrapper = document.querySelector('.stats-wrapper');
    statsWrapper.innerHTML = '';

    // stats names map to use at appending
    const statNameMapping = {
        hp: 'HP',
        attack: 'ATK',
        defense: 'DEF',
        'special-attack': 'STAK',
        'special-defense': 'SDEF',
        speed: 'SPD',
    }

    // set pokemon stats names
    stats.forEach(({ stat, base_stat }) => {
        const statDiv = document.createElement('div');
        statDiv.className = 'stats-wrap';
        statsWrapper.appendChild(statDiv);

        createAndAppendElement(statDiv, 'p', {
            className: 'body3-fonts stats',
            textContent: statNameMapping[stat.name],
        });

        // set pokemon stats (numbers)
        createAndAppendElement(statDiv, 'p', {
            className: "body3-fonts",
            textContent: String(base_stat).padStart(3, '0'),
        });

        // append the progress bar
        createAndAppendElement(statDiv, 'progress', {
            className: 'progress-bar',
            value: base_stat,
            max: 100,
        });
    });

    // set background color by pokemon type
    setTypeBackgroundColor(pokemon);
}

function getEnglishFlavorText(pokemonSpecies) {
    for (let entry of pokemonSpecies.flavor_text_entries) {
        if (entry.language.name === 'en') {
            let flavor = entry.flavor_text.replace(/\f/g, '');
            return flavor;
        }
    }
    return "";
}