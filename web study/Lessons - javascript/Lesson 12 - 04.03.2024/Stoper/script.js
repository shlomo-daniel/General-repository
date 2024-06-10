// digital clock element selector
let digital = document.querySelector("#digital-clock");

let stoper_minutes = 0;
let stoper_seconds = 0;
let stoper_milisec = 0;
let stoper_hours = 0;


function stoperMili() {
    stoper_milisec++
    if (stoper_milisec >= 1000) {
        stoper_milisec = 0;
    }
    digital.innerHTML = `${stoper_minutes}:${stoper_seconds}:${stoper_milisec}`;
}

function stoperSec() {
    stoper_seconds++
    if (stoper_seconds >= 60) {
        stoper_seconds = 0;
    }
    digital.innerHTML = `${stoper_minutes}:${stoper_seconds}:${stoper_milisec}`;
}
function stoperMin() {
    stoper_minutes++
    digital.innerHTML = `${stoper_minutes}:${stoper_seconds}:${stoper_milisec}`;
}

setInterval(stoperMili, 1);
setInterval(stoperMili, 1);
setInterval(stoperMili, 1);
setInterval(stoperMili, 1);

setInterval(stoperSec, 1000);
setInterval(stoperMin, 60000);


let capturePeregraph = document.querySelector(".capture-lap")

function captureByButton() {
    const capture = digital.innerHTML;
    capturePeregraph.innerHTML = capture;
}

// function captureNow(capturePeregraph) {
//     const capture = digital.innerHTML;
//     capturePeregraph.innerHTML = capture;
// }
