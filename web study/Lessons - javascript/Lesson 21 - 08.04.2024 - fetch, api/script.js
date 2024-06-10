
//    ---   My User   ---   \\
// full name:Shlomi
// email: shlomodani054@gmail.com
// user name: dani_24K
// p: GOLDIDADO
// _________________________ //

//    ---   global vars   ---   \\

// header div
const headerDiv = document.querySelector('.user-logged-header');
// login form elem
const loginForm = document.querySelector(".login-form");
// name of user in header
const userNameHeader = document.querySelector('.successful-in');

//    ---   user login   ---
function login(ev) {
    console.log(ev)
    // prevent the refresh page of "submit"
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
        method: 'POST',
        // inform server of type of file
        headers: { 'Content-type': 'application/json' },
        // transform file to JSON 
        body: JSON.stringify(userInfo),

    }).then(re => {

        startLoading()

        if (re.ok) {

            console.log(re);
            loginForm.style.display = "none";
            return re.json();
        } else {
            return re.text().then(x => {
                throw new Error(x);
            });
        }

    }).then(data => {
        userNameHeader.innerText = `Wellcom ${data.fullName}`;
        headerDiv.style.display = 'flex';

        console.log(data)

        getAllArticles(); // get all user articles

    })
        .catch(err => {
            console.log(err.message);
        })
}

// logout button 
function logout() {
    fetch('https://api.shipap.co.il/logout', {
        credentials: 'include',
    })
        .then(re => {
            if (re.ok) {
                headerDiv.style.display = 'none'
                loginForm.style.display = 'block'
                articlesPage.style.display = 'none'
            }
        });
}

// get page of all articles
const articlesPage = document.querySelector('.articles-page');

// get all user articles function
function getAllArticles() {

    fetch(`https://api.shipap.co.il/articles`,
        {
            credentials: 'include',
        }
    )
        .then(respo => {
            {
                console.log(respo);
                return respo.json();
            }
        }).then(data => {
            articlesPage.style.display = 'flex'; //show articles page

            data.forEach(item => {
                console.log(item);
                const createDivArticle = document.createElement('div');
                const articleCard = articlesPage.appendChild(createDivArticle);
                articleCard.classList.add('article-card')
                console.log(articleCard)

                articleCard.innerHTML = `
            <img class="imgUrl" src="${item.imgUrl}"></img>
            <h2 class="headline">${item.headline}</h2>
            <p class="description">${item.description}</p>
            <p class="publishDate">published ${item.publishDate}</p>
            <p class="addedTime">${item.addedTime}</p>
            <p class="views">views ${item.views}</p>
            <p class="id">${item.id}</p>
                `
            });
        })
}

// loader
const loader = document.querySelector('.loader-background')

function startLoading() {
    loader.style.display = 'flex';
}

function endLoding() {
    loader.style.display = 'none'
}

// TASKS -----
// add loader that start end end that you can see