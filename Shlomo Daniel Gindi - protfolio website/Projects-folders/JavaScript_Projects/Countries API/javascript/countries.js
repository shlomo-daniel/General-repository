
// all countries global var
let countries = [];
let countriesFull = [];

const getDataAsync = async () => {
    try {
        const result = await fetch("https://restcountries.com/v3.1/all");

        if (!result.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await result.json();
        countries = data;
        countriesFull = [...data];
    } catch (err) {
        console.log(err);
    }
}

const reset = () => {
    countries = [...countriesFull];
}

const searching = (word) => {
    countries = countries.filter(country => {
        const name = country.name.common.toLowerCase();
        return name.includes(word.toLowerCase());
    });
}

export { countries, getDataAsync, reset, searching }