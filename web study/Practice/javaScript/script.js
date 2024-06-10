let count = 0;

function counter() {
    document.getElementById("btn").innerHTML = ++count;
}

function multi() {
    const n1 = document.getElementById("num1").value;
    const n2 = document.getElementById("num2").value;

    alert(n1 * n2)

    document.getElementById("output").innerHTML = n1 * n2;
}

function addex() {
    const addnum1 = +document.getElementById("addnum1").value
    const addnum2 = +document.getElementById("addnum2").value

    document.getElementById("outputAdd").innerHTML = addnum1 + addnum2
}

function showex() {
    const shownum1 = +document.getElementById("shownum1").value;
    const shownum2 = +document.getElementById("shownum2").value;
    const result = shownum1 + shownum2;

    document.getElementById("outputshow").innerHTML = `${shownum1} + ${shownum2} = ${result}`;

    // document.getElementById("outputshow").innerHTML = shownum1 + "+" + shownum2 + "=" + result;
}