// function task1(elem) {
//     setTimeout(function () {
//         elem.style.display = 'none';
//     }, 1000);
// }

// let counter = 1;
// let myInterval;

// function task2(elem) {
//     if (myInterval) {
//         myInterval = clearInterval(myInterval);
//     } else {
//         myInterval = setInterval(function () {
//             elem.innerHTML = ++counter;
//         }, 100);
//     }
// }

//
// practice
//

// disapear circle in 1 sec
function disapear(theCircle) {
    setTimeout(function () { theCircle.remove() }, 1000)
}

// counter up auto on click
let counter = 1;
let myInterval;

function counterUp(thecounter) {

    myInterval ? myInterval = clearInterval(myInterval) : myInterval = setInterval(function () { thecounter.innerHTML = counter++; }, 100);
}