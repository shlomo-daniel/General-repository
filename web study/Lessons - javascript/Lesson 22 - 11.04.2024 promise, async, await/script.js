//     --- global vars   ---   \\

// get loader div
const loaderDiv = document.querySelector(".loader");
// get message span
const messegeSpan = document.querySelector('.message');

function loadingData() {
    startLoader();
    setMessage('Loading', 'blue');

    new Promise((resolve, reject) => {
        const isValid = Math.floor(Math.random() * 2)

        if (isValid) {
            setTimeout(() => { resolve("Sucsses") }, 1000 * 3);
        } else {
            setTimeout(() => { reject('Error') }, 1000 * 3);
        }
    })
        .then(resResolve => {
            setMessage(resResolve, "green");
            console.log(resResolve)
        }).catch(resReject => {
            setMessage(resReject, 'red');
            console.log(resReject);
        }).finally(() => {
            endLoader();
            console.log('Finished')
        })
}


function startLoader() {
    loaderDiv.style.display = "block";
}
function endLoader() {
    loaderDiv.style.display = "none";
}

function setMessage(message, color = 'balck') {
    messegeSpan.innerHTML = message;
    messegeSpan.style.color = color;
}















// task list -----------------
// 1- onclick loading animatin will start
// 2- each click can result in success or falirue randomly
// 3- show result to user respectivly



// -----------------------------------------------------------

// function loaderprctice() {
//     // value to randomly create true or false
//     let randomToLoader = Math.floor(Math.random() * 2);

//     loader()

//     if (randomToLoader) {
//         messege.innerHTML = 'loaded successfuly';
//     } else {
//         messege.innerHTML = 'failed to load';
//     }
// }

// function loader() {
//     // show loader and hide
//     loaderDiv.style.display = 'block';
//     setTimeout(() => loaderDiv.style.display = 'none', 3000);
// }


