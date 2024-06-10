
//    --- Arrays ---
let falcomGames = ["tralis 1", "trails 2", "trails 3", "trails 4", "ys", "ys 2", "ys 5", "ys 8"]

let pricesOfGames = [67, 87, 34, 800, 23, 55, 60, 60, 60, 80, 46, 45, 335, 346, 4, 34, 67, 3, 56, 3, 88, 446, 78, 4, 7, 445, 6, 456, 237, 9, 5, 2, 4, 5, 33, 87, 45, 1, 99]
// end arrays -----/

// global vars 
let outputElem = document.querySelector(".output");

//    ---   Array mathods   --- 

// every 
let checkHigh = pricesOfGames.every(num => num < 130);
// outputElem.innerHTML = checkHigh;


// forEach
let allGames = '';

function object1() {
    falcomGames.forEach(item => allGames += item)
    // outputElem.innerHTML = allGames;
}
object1();


// some - return true even for one & false check
// is the a price under 60?
let isPriceCheap = pricesOfGames.some(num => num <= 60);
// outputElem.innerHTML = isPriceCheap;


// filter - return all fitting values to new array
// make array of all Ys games
let filterdYs = falcomGames.filter(game => game == "ys");
// outputElem.innerHTML = filterdYs;

let filteredCheap = pricesOfGames.filter(price => price <= 60);
// outputElem.innerHTML = filteredCheap;


// find - return the first value that pass the test given
// task; find Ys 8 
let foundGame = falcomGames.find(game => game === "ys 8");
outputElem.innerHTML = foundGame;


// findIndex - return the first index that fit test
// task - what the index of "trails 4"?
let indexOfGame = falcomGames.findIndex(game => game === "trails 4")
outputElem.innerHTML = indexOfGame;
