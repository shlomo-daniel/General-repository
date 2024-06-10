// let counter = 1;

// function plus() {
//     counter++;
//     document.getElementById("count").innerHTML = counter;
//     document.getElementById("count").style.fontSize = counter + "px";
// }
// function minus() {
//     counter--;
//     document.getElementById("count").innerHTML = counter;
//     document.getElementById("count").style.fontSize = counter + "px";
// }

// function cityChange() {
//     const city = document.getElementById("city").value;
//     console.log(city)

//     if (city == "kfar chabad") {
//         document.getElementById("output1").innerHTML = "right!"
//     } else {
//         document.getElementById("output1").innerHTML = "no no no!"
//     }
// }

// function enter() {
//     const name = document.getElementById("name").value;
//     const password = document.getElementById("password").value;
//     let output = document.getElementById("alert")

//     if (name === "shlomo" && password === "woo100") {
//         document.getElementById("alert").innerHTML = "go in!";
//         output.style.color = "green";
//     } else {
//         document.getElementById("alert").innerHTML = "try again";
//         output.style.color = "red";
//     }
// }




// function enter() {
//     const result = document.getElementById("number");
//     let theNumber = +result.value;


//     // reset over 100 and under 0
//     if (theNumber > 100) {
//         result.value = 0;
//     } else if (theNumber < 0) {
//         result.value = 100;
//     }

//     // backgroundcolor by the numbers
//     if (theNumber <= 40) {
//         result.innerHTML = theNumber;
//         result.style.backgroundColor = "red";
//     }
//     else if (theNumber <= 60) {
//         result.innerHTML = theNumber;
//         result.style.backgroundColor = "orange";
//     }
//     else if (theNumber <= 80) {
//         result.innerHTML = theNumber;
//         result.style.backgroundColor = "blue";
//     }
//     else if (theNumber <= 100) {
//         result.innerHTML = theNumber;
//         result.style.backgroundColor = "green";
//     }
//     else {
//         result.innerHTML = theNumber;
//         result.style.backgroundColor = "";
//     }
// }



// -------------------
// practice
// -------------------


// exrecise 1
let counter = 0;

function plus() {
    document.getElementById("count").innerHTML = ++counter;
    document.getElementById("count").style.fontSize = counter + "px";
}

function minus() {
    document.getElementById("count").innerHTML = --counter;
    document.getElementById("count").style.fontSize = counter + "px";
}

// exrecise 2
function cityChange() {
    const select = document.getElementById("city").value;


    if (select == "megadim") {
        alert("you are awsome!");
    } else {
        alert("are you crazy?!");
    }
}

// login
function enter() {
    const name = document.getElementById("name").value
    const password = document.getElementById("password").value

    if (name == "shlomo" && password == "woo100") {
        alert("you're in!!!");
    } else {
        alert("danger!!! intruder!")
    }
}

// numbers and colors
function numColors() {
    const num = document.getElementById("number").value;

    let bgc = document.getElementById("number")

    if (num <= 40) {
        bgc.style.backgroundColor = "red";
    }
    else if (num <= 60) {
        bgc.style.backgroundColor = "orange";
    }
    else if (num <= 80) {
        bgc.style.backgroundColor = "blue";
    }
    else if (num <= 100) {
        bgc.style.backgroundColor = "green";
    }

}