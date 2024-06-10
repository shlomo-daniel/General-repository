// counter adds 1
let counter = 0;
function add1() {
    document.getElementById("btn").innerHTML = ++counter;
}

// double
// create a function so you can use it in the html
function duble() {
    // i created 2 vars
    const dubNum1 = document.getElementById("num1").value;
    const dubNum2 = document.getElementById("num2").value;
    // now we doubled em' showing it in alert
    alert(dubNum1 * dubNum2);
}

// add 2 numbers
function add() {
    // use the plus symbol to change the numbers to type number not string
    const addnum1 = +document.getElementById("addnum1").value;
    const addnum2 = +document.getElementById("addnum2").value;

    alert(addnum1 + addnum2);
}

// add 2 numbers and show the calculation
function addShow() {
    // create to vars to have 1 num each from input
    const showadd1 = +document.getElementById("shownum1").value;
    const showadd2 = +document.getElementById("shownum2").value;
    // calculate the result to show at the end
    const result = showadd1 + showadd2
    // get the span to show the calculation
    document.getElementById("outputshow").innerHTML = `${showadd1} + ${showadd2} = ${result} `;
}