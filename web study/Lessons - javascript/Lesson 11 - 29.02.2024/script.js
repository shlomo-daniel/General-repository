// const traffic1 = document.querySelector('.traffic-light');

// const first = traffic1.querySelector('div');
// const second = traffic1.querySelector('div:nth-child(2)');
// const last = traffic1.querySelector('div:last-child');

// let trafficTimeOut;

// function reset() {
//     first.style.backgroundColor = '';
//     second.style.backgroundColor = '';
//     last.style.backgroundColor = '';
// }

// function green() {
//     reset();
//     last.style.backgroundColor = 'green';
//     trafficTimeOut = setTimeout(yellow, 3 * 1000);
// }

// function yellow() {
//     reset();
//     second.style.backgroundColor = 'yellow';
//     trafficTimeOut = setTimeout(red, 1000);
// }

// function red() {
//     reset();
//     first.style.backgroundColor = 'red';
//     trafficTimeOut = setTimeout(redAndYellow, 3 * 1000);
// }

// function redAndYellow() {
//     reset();
//     second.style.backgroundColor = 'yellow';
//     first.style.backgroundColor = 'red';
//     trafficTimeOut = setTimeout(green, 1000);
// }

// function stop() {
//     clearTimeout(trafficTimeOut);
// }

// red();

// 
// practice in class
// 


// main div of all lights

//father div for selection of childrens 
const trafficLight = document.querySelector(".traffic-light")

// every div light in a var
const redLight = trafficLight.querySelector("div")
const yellowLight = trafficLight.querySelector("div:nth-child(2)")
const greenLight = trafficLight.querySelector("div:last-child")

// track the index of time out
let timeOutIndex;

// reset all lights
function resetLights() {
    redLight.style.backgroundColor = '';
    yellowLight.style.backgroundColor = '';
    greenLight.style.backgroundColor = '';
}

function red() {
    resetLights()
    redLight.style.backgroundColor = "red";
    timeOutIndex = setTimeout(redAndyellow, 3000);
}

function redAndyellow() {
    resetLights();
    redLight.style.backgroundColor = "red";
    yellowLight.style.backgroundColor = "yellow";
    timeOutIndex = setTimeout(green, 1000)
}

function green() {
    resetLights();
    greenLight.style.backgroundColor = "green";
    timeOutIndex = setTimeout(yellow, 3000);
}

function yellow() {
    resetLights();
    yellowLight.style.backgroundColor = "yellow";
    timeOutIndex = setTimeout(red, 2000)
}

red();

function stopLights() {
    clearTimeout(timeOutIndex);
}

// flasing traffic light

const flashingYellow = document.querySelector("flashing_yellow:nth")
