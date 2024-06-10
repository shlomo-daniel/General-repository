// function showCurrentTime() {
// const now = new Date();

//     const date = now.getDate();
//     const month = now.getMonth() + 1;
//     const year = now.getFullYear();

//     const hours = now.getHours();
//     const minutes = now.getMinutes();
//     const seconds = now.getSeconds();

//     const result = `${date}/${month}/${year} ${hours}:${minutes}:${seconds}`;

//     document.querySelector('.time').innerHTML = result;
// }

// showCurrentTime();

// setInterval(showCurrentTime, 1000);

// 
// practice 
// 

function showTheTime() {
    const timeNow = new Date();

    const day = timeNow.getDate();
    const month = timeNow.getMonth() + 1;
    const year = timeNow.getFullYear();

    const hours = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    const seconds = timeNow.getSeconds();
    const miliseconds = timeNow.getUTCMilliseconds();

    document.querySelector(".time").innerHTML = `${day}/${month}/${year}<br>${hours}:${minutes}:${seconds}${miliseconds}`;
}

showTheTime();
setInterval(showTheTime, 100);