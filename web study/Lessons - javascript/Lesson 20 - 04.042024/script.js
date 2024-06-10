
//    ---   My User   ---   \\
// full name:Shlomi
// email: shlomodani054@gmail.com
// user name: dani_24K
// p: GOLDIDADO
// _________________________ //

function login(ev) {
    console.log(ev)
    // prevent the refresh of page of "submit"
    ev.preventDefault();

    // get inputs of DOM
    const { userName, password } = ev.target.elements;

    // object to send to server
    const userInfo = {
        userName: userName.value,
        password: password.value,
    };


    fetch(`https://api.shipap.co.il/login`, {
        // sent on cookies
        credentials: 'include',
        // send info 
        mathod: 'POST',
        // inform server of type of file
        headers: { 'Content-type': 'application/json' },
        // transform file to JSON 
        body: JSON.stringify(userInfo),
    })
        .then(
            re => {
                if (re.ok) {
                    return re.json();
                    console.log(re)
                } else {
                    return re.text().then(x => {
                        throw new Error(x);
                    });
                }
            })
        .then(data => {
            alert(` ${data.fullname} is logged in`);
            ev.target.style.display = 'none';
        }).catch(err => {
            console.log(err.message);
        });
}


