const showResult = document.querySelector("#numbers");

function max() {
    let currentNumber = numbers[0]

    for (index = 0; index <= numbers.length; index++) {
        if (currentNumber < numbers[index]) {
            currentNumber = numbers[index]
        }
    }

    showResult.innerHTML = currentNumber;
}

function min() {
    let currentNumber = numbers[0]

    for (index = 0; index <= numbers.length; index++) {
        if (currentNumber > numbers[index]) {
            currentNumber = numbers[index]
        }
    }

    showResult.innerHTML = currentNumber;
}

function sum() {
    let sumArrey = 0;

    for (index = 0; index < numbers.length; index++) {
        sumArrey += numbers[index];
    }
    showResult.innerHTML = sumArrey;
}

function count() {
    for (i = 0; i < numbers.length; i++) { }
    showResult.innerHTML = i;
}

function avg() {
    let numbersSum = 0;
    for (i = 0; i < numbers.length; i++) {
        numbersSum += numbers[i];
    }
    const resultAvg = numbersSum / i;
    showResult.innerHTML = Math.floor(resultAvg);
}

function sortAsc() {
    numbers.sort((a, b) => a - b)
    showResult.innerHTML = numbers.join(', ') + '.';
}

function sortDesc() {
    numbers.sort((a, b) => b - a)
    showResult.innerHTML = numbers.join(', ') + '.';
}

function removeStart() {
    numbers.shift();
    showResult.innerHTML = numbers.join(', ') + '.';
}
function removeEnd() {
    numbers.pop();
    showResult.innerHTML = numbers.join(', ') + '.';
}
function lines() {
    showResult.innerHTML = numbers.join('<br>');
}

function inline() {
    showResult.innerHTML = numbers.join(', ') + '.';
}

function addRandomToStart() {
    const randomNumber = Math.floor(Math.random() * 1000);
    numbers.unshift(randomNumber);
    showResult.innerHTML = numbers.join(', ') + '.';
}

function addRandomToEnd(randomNumber) {
    randomNumber = Math.floor(Math.random() * 1000);
    numbers.push(randomNumber);
    showResult.innerHTML = numbers.join(', ') + '.';
}

function addByUserStart() {
    const addedNumber = document.querySelector('#addNumber').value;
    numbers.unshift(addedNumber);
    showResult.innerHTML = numbers.join(', ') + '.';
}

function addByUserEnd() {
    const addedNumber = document.querySelector('#addNumber').value;
    numbers.push(addedNumber);
    showResult.innerHTML = numbers.join(', ') + '.';
}

function removeByUserInput() {
    const inputToRemove = document.querySelector('#inputToRemove');
    // remove function
    numbers.splice(inputToRemove.value - 1, 1);

    showResult.innerHTML = numbers.join(", ") + '.';
}
// set max to input
inputToRemove.setAttribute("max", numbers.length);