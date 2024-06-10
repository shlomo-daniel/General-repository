const page = document.querySelector("#page");

function bgChange(elem) {
    page.style.backgroundColor = elem.value;
}

function paddingChange(elem) {
    page.style.padding = elem.value + 'px';
}

function pageToShow(id, elem) {
    const actives = document.querySelectorAll('nav a.active');

    for (const a of actives) {
        a.classList.remove('active');
    }

    elem.classList.add('active');

    
}