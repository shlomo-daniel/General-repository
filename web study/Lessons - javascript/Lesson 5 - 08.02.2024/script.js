// from lesson 4

// function replace() {
//     const str1 = document.getElementById("str1").value;
//     const str2 = document.getElementById("str2").value;

//     document.getElementById("str1").value = str2;
//     document.getElementById("str2").value = str1;
// }
// ----------------------------------------------------------------
// function salerycalcultor() {
//     const user = document.getElementById("user").value;
//     const salary = document.getElementById("salary").value;

//     let raise = salary * 1.1;

//     if (raise > 6000) {
//         raise = salary * 1.05;
//     }

//     document.getElementById("output3").innerHTML = `${user} salary is ${salary} `
// }
// practice******

function salerycalcultor() {

    // vars
    let afterRaiseSalary = 0;
    const raise = 1.1;
    const smallRaise = 1.05;

    // get 1 name 2 old salary
    const name = document.querySelector("#user").value;
    const baseSalary = document.querySelector("#salary").value;

    afterRaiseSalary = baseSalary * raise;

    if (afterRaiseSalary > 6000) {
        afterRaiseSalary = baseSalary * smallRaise;
    }
    // output
    document.querySelector("#output3").innerHTML = `<b>${name}</b> after raise you get ${afterRaiseSalary}`;

}
// -------------------------------------------------------------------------------------
// function check() {
//     const age = document.getElementById("age").value
//     const height = document.getElementById("height").value

//     if ((age >= 14 && age <= 18 || age >= 21 && age <= 26) && height >= 182) {
//         document.getElementById("output4").innerHTML = "accepted";
//     } else {
//         document.getElementById("output4").innerHTML = "not accepted";
//     }
// }

// // practice 
// maccabi ex
function check() {

    // vars
    let age = 0;
    let height = 0;
    const minHeight = 182;
    // get
    age = document.querySelector("#age").value;
    height = document.querySelector("#height").value;

    if ((age >= 14 && age <= 18 || age >= 21 && age <= 26) && height >= minHeight) {
        document.querySelector("#output4").innerHTML = "<b>congragilations!!!</b>";
    } else {
        document.querySelector("#output4").innerHTML = "Oh no, not  accepted";
    }
}

// end lesson 4-----------------------



// lesson 5


// let count = 1;
// function counter(num) {

//     count += num;

//     document.getElementById("count").innerHTML = count;
// }

// practice
let sumIt = 1;

function counter(varFromElement) {

    sumIt += varFromElement;

    document.querySelector("#count").innerHTML = sumIt;

}

// sum 3 numbers - ex
// function sum(num1, num2, num3) {
//     return num1 + num2 + num3
// }
// practice
function sum3(n1, n2, n3) {
    return n1 + n2 + n3
}


// function sumvat(num) {
//     return num * 1.17;
// }
// practice
function sumvat(n1) {
    return n1 * 1.17;
}



// function welcome(fname, lname) {
//     return `welcome ${fname} ${lname}`;
// }
// practice
function welcome(fname, lname) {
    return `${fname} ${lname}`;
}




// function avrage(num1, num2, num3, num4) {
//     return (num1 + num2 + num3 + num4) / 4;
// }
// practice
function avrage(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4;
}


// hotel script ----------

// function task1() {
//     const user = prompt('hi, here is the serviceman, what is your name?')

//     if (!user) {
//         task1()
//         return;
//     }

//     const days = prompt(`i have a quation, how long would ${user} like to stay?`, 1)

//     if (!days) {
//         return;
//     }

//     let price = days * 100

//     alert(`one day to staty is 100 per day so cost is ${price}`)


//     const breakfast = confirm(`would you like breakfast, it's 30 per day`)

//     if (breakfast) {
//         price += 30 * days
//     }

//     alert(`the final price is ${price}`)
// }

// ----------
// practice
// ----------

// hotel ex


// process*****
// 1.get full name
// 2.stay days
// 3.show price and ask agree?
// 4 alert thank for purchase

function orderProcess() {

    const userName = prompt("full name please")

    if (!userName) {
        orderProcess();
        return;
    }

    const stayDays = prompt(`how long would you like to stay ${userName}?`)
    if (!stayDays) {
        orderProcess();
        return;
    }

    let price = stayDays * 100;
    alert(`this is ${price} for you. 100 per day`)

    const breakfast = confirm(`would you lake to add a breakfast for 25?`)
    if (breakfast) {
        price += stayDays * 25;
    }
    alert(`thank you, your price is ${price}`)
}









