function task1() {
    const banana = document.getElementById("answer1").value;

    if (banana == "yellow") {
        document.getElementById("output1").innerHTML = "ready";
    } else {
        document.getElementById("output1").innerHTML = "not ready";
    }
}