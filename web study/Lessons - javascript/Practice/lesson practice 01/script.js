//    ---   Spread operator   ---   \\
// "spread" copys the array or part of it
// task; 

const numbersG1 = [10, 11, 5, 10, 5, 10, 5, 10, 5];
const numbersG2 = [6, 7, 8];

// 1 - copy an arry
let copied = [...numbersG1];

// 2 - copy to one new array
let copiedAll = [...numbersG1, ...numbersG2]

// 3 - creat vars from the array values(last one put the rest that remained)
let [first, second, ...rest] = numbersG1;

// 4 - combine two objects
const myVehicle = {
    brand: 'Lexus',
    model: '200h',
    color: 'white'
}

const updateVehicle = {
    type: 'car',
    year: 2021,
    color: 'black'
}

const theVehicle = { ...myVehicle, ...updateVehicle }



//    ---   shallow copy & deep copy   ---   \\
// copy value vs reference value

let one = [1, 2, 3, 4, 5]
let two;

// *2 options of coping the "one" var
two = [...one, 10, 20, 30, 40, 50]
let three = [one, 99, 55]

one[0] = 770; one



//    ---   Try, Catch & finally   ---   \\
try {
    alertt("welcome to Trails")
} catch (err) {
    document.querySelector(".output").innerHTML = err;
} finally {
    console.log("finally  to exacute !ii!")
}

//  can be used any time to log an error
throw "any trails";