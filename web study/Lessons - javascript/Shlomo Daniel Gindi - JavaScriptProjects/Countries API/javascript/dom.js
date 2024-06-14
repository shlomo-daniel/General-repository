import { countries, reset, searching } from "./countries.js"

const cardsWrap = document.getElementById("cards-wrapper");
const heartsArray = []

// listen to search input and act accordingly
document.addEventListener("input", e => {

    const word = e.target.value;
    cardsWrap.innerHTML = '';
    reset();

    searching(word);
    createAllCards()
})

// create card
const createCard = (country) => {

    // create elems
    const createdCard = document.createElement("div");
    createdCard.className = 'card shadow rounded m-2 col-md-3 col-sm-10';

    const cardimg = document.createElement('img');
    cardimg.src = country.flags.png;
    cardimg.className = 'card-img-top img border shadow rounded mt-2'

    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = country.name.common;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = `capital: ${country.capital}`;

    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer d-flex justify-content-center';

    // trying to load heart and load when there is hearted
    const heartIcon = document.createElement('i');
    heartIcon.className = 'fa fa-heart text-secondary';
    heartIcon.addEventListener("click", heartIt);
    heartsArray.push(heartIcon);
    appendHearts(cardFooter);

    // append elems
    createdCard.appendChild(cardimg);

    cardBody.appendChild(cardTitle);

    cardBody.appendChild(cardText);

    createdCard.appendChild(cardBody);

    createdCard.appendChild(cardFooter);

    cardsWrap.appendChild(createdCard);

}

function appendHearts(cardFooter) {
    heartsArray.forEach(heart => {
        cardFooter.appendChild(heart);
        // console.log(heartsArray);
    })
}

const createAllCards = () => {
    countries.forEach(country => {
        createCard(country);
    });
}

function heartIt(evt) {
    evt.target.classList.toggle("text-danger");
    // heartsArray.push(evt.target)
    console.log(heartsArray);
    saveToLocal();
}

// save hearts to localstorage
function saveToLocal() {
    localStorage.savedHearts = heartsArray;
}

export { createAllCards };