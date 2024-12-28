const input = document.querySelector<HTMLInputElement>("#input");
const output = document.querySelector<HTMLHeadingElement>("#output");

function display() {
    output.innerText = input.value;
    console.log(input.value);
}
