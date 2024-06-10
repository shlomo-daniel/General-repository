import { countries, reset, searching } from "./countries.js"

const cardsWrap = document.getElementById("cards-wrapper");
// const heartsArray = []

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

    // const heartIcon = document.createElement('i');
    // heartsArray.push(heartIcon);
    // heartIcon.className = 'fa fa-heart text-secondary';
    // heartIcon.addEventListener("click", () => {
    //     heartIcon.classList.toggle("text-danger")
    // });

    // append elems
    createdCard.appendChild(cardimg);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    createdCard.appendChild(cardBody);
    cardFooter.appendChild(heartIcon);
    createdCard.appendChild(cardFooter);

    cardsWrap.appendChild(createdCard);
}

const createAllCards = () => {
    countries.forEach(country => {
        createCard(country);
    });
}

// save hearted countries
// heartsArray.forEach(heart => {

//     console.log(heart);

// if (heart.className === "fa fa-heart text-secondary text-danger") {
//     localStorage.heartSaved = heart;
// }
// console.log(localStorage.heartSaved);
// })

export { createAllCards };