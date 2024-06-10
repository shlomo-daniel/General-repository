// --- global vars --- \\
const inputElement = document.querySelector('#search-input');
const searchClose_icon = document.querySelector('#search-close-icon');
const sort_wrapper = document.querySelector('.sort-wrapper');
// end.

// add event listener  to search, close icon, and sort
inputElement.addEventListener('input', () => {
    handleInputChange(inputElement);
});
searchClose_icon.addEventListener('click', handleSearchCloseIcon);
sort_wrapper.addEventListener('click', handleSortIconClick);

// handle x icon to clear search. visible : invisible
function handleInputChange(inputElement) {
    const inputValue = inputElement.value;

    if (inputValue !== '') {
        document.querySelector('#search-close-icon').classList.add('search-close-icon-visible');
    } else {
        document.querySelector('#search-close-icon').classList.remove('search-close-icon-visible');
    }
}

// clear input search and hide x icon
function handleSearchCloseIcon() {
    document.querySelector('#search-input').value = '';

    document.querySelector('#search-close-icon').classList.remove('search-close-icon-visible');
}

// sort overlay toggle vis or invisable
function handleSortIconClick() {
    document.querySelector('.filter-wrapper').classList.toggle('filter-wrapper-open');
    document, querySelector('body').classList.toggle('filter-wrapper-overlay')
}