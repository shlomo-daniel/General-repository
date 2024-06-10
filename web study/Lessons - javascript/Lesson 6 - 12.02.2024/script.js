// task 1
// function checkEven() {
//     // initilazer
//     let i = 2;
//     // show these numbers
//     let numbers = "";

//     while (i <= 100) {
//         document.getElementById("output1").innerHTML = i;
//         // add numbers to show 
//         numbers += i + " ' "
//         // this adds the numbers each time
//         i += 2;
//     }
//     // print the numbers in the p
//     document.getElementById("output1").innerHTML = numbers;
//     // remove the button totaly
//     document.getElementById("button").remove()
// }

// task 2
// function with proporty to get a varible

// function parik(elem) {
//     // get the inputed number
//     const num = +elem.value;

//     // var with true
//     let isPrime = true;
//     // limit the loop
//     let i = 2;

//     // 
//     while (i < num) {

//         if (num % i === 0) {
//             isPrime = false;
//         }
//         i++
//     }
//     if (isPrime) {
//         document.getElementById("output2").innerHTML = "prime"
//     } else {
//         document.getElementById("output2").innerHTML = "not prime"
//     }
// }

// task 3
// print all the numbers that are less than input
// function showWhatLess() {
//     // get
//     const number = +document.getElementById("inputWhatLess").value

//     let result = "";

//     // initilaize
//     let showAndLimit = 1;

//     while (showAndLimit <= number) {
//         // print to p element
//         document.getElementById("showSmaller").innerHTML = showAndLimit;
//     }
//     // add inorder for the loop to continue
//     showAndLimit++
// }

// **********
// practice
// **********

// task 1 - display even numbers

function checkEven() {
    // index for loop/initilaizer
    let index = 2;

    // sum numbers var
    let sumEvenNumbers = "";

    while (index <= 100) {
        // add number and  garesh
        sumEvenNumbers += index + ", ";
        // move forward and add 2 to get only even numbers
        index += 2;
    }
    document.querySelector("#output1").innerHTML = sumEvenNumbers;
}

// task 2
// function with proporty to get a varible

// get user input
function parik(numTest) {

    let index = 2;
    let primeNumber = true;
    const output = document.querySelector("#output2");
    const testNumber = +numTest.value;


    while (index < testNumber) {

        if (testNumber % index === 0) {
            primeNumber = false;
        }
        index++;
    }

    if (primeNumber) {
        output.innerHTML = "a prime number"
    } else {
        output.innerHTML = "not a prime number"
    }

}

// task 3
// print all the numbers that are less than input
function showWhatLess() {
    let numbers = "";
    const inputUser = document.querySelector("#inputWhatLess")
    let resultOfSmallNumbers = document.querySelector("#showSmaller")
    index = 0;

    while (index < inputUser.value) {
        numbers += index + ', ';

        resultOfSmallNumbers.innerHTML = numbers;

        index++;
    }
    // swap the , to .
    numbers = numbers.slice(-0, -2);
    numbers += '.';
    resultOfSmallNumbers.innerHTML = numbers;
}

