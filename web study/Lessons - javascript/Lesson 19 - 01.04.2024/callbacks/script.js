function calcThese(num1, num2, myFunc) {
    let res = num1 + num2;
    myFunc(res)
}

// calcThese(8, 8, prompt("is it right?"))

calcThese(10, 10, alert(`${res}`))
