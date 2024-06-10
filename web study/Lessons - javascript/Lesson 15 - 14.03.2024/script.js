// lesson script***********************************************************
// const page = document.querySelector("#page");
// let type, params;

// const elementSelect = {
//     title: [
//         'headerType',
//         'color',
//         'content',
//     ],
//     p: [
//         'fontSize',
//         'color',
//         'content',
//     ],
//     input: [
//         'inputType',
//         'fontSize',
//         'color',
//         'content',
//     ],
//     button: [
//         'fontSize',
//         'color',
//         'content',
//     ],
// };

// function bgChange(elem) {
//     page.style.backgroundColor = elem.value;
// }

// function paddingChange(elem) {
//     page.style.padding = elem.value + 'px';
// }

// function pageToShow(id, elem) {
//     document.querySelector('nav a.active').classList.remove('active');
//     elem.classList.add('active');

//     document.querySelector('#panelSide>div.show').classList.remove('show');
//     document.getElementById(id).classList.add('show');
// }

// function typeSelect(selectElem) {
//     type = selectElem.value;
//     params = elementSelect[type];

//     // הסתרת כל האלמנטים המוצגים
//     const divs = document.querySelectorAll('#params>div');

//     for (const div of divs) {
//         div.classList.remove('show');
//     }

//     // הצגת האלמטים הנצרכים
//     for (const p of params) {
//         document.getElementById(p).classList.add('show');
//     }
// }

// function add() {
//     // שם התגית כברירת מחדל זה הסוג
//     let tagName = type;

//     // אם הסוג הוא כותרת, שם התגית לפי מה שהמשתמש בחר
//     if (type === 'title') {
//         tagName = document.querySelector('#headerType select').value;
//     }

//     // יצירת אלמנט חדש
//     const elem = document.createElement(tagName);

//     const inputType = document.querySelector('#inputType select').value;
//     const fontSize = document.querySelector('#fontSize input').value;
//     const color = document.querySelector('#color input').value;
//     const content = document.querySelector('#content input').value;

//     for (const p of params) {
//         if (p === 'inputType') {

//         } else if (p === 'fontSize') {

//         } else if (p === 'color') {

//         } else if (p === 'content') {
//             if (type === 'input') {
//                 elem.value = content;
//             } else {
//                 elem.innerHTML = content;
//             }
//         }
//     }

//     page.appendChild(elem);
// }

// end__________________________________________

//  --- practice --- (use it for the projact)
const page = document.getElementById("#page");

function backgroundChange(elem) {
    page.style.backgroundColor = elem.value;
}

function paddingChange(elem) {
    page.style.padding = elem.value + "px";
}

function pageToShow(id, elem) {
    // remove current active ant put it on the clicked one
    document.querySelector("nav a.active").classList.remove("active");
    elem.classList.add("active");

    // add show class to show the corespondent page settings input
    document.querySelector("#panelSide>div.show").classList.remove("show");
    document.getElementById(id).classList.add("show");
}

const editorTypes = {

}