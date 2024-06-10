// Global var of the game board
const divs = document.querySelectorAll("#board>div");
// using this boolean as the player turn 
let isX = true;
let isGameOver = false;

// insert x or O, change turn, trigger showTurn() 
divs.forEach(div => {

    div.addEventListener("click", function (ev) {

        if (isGameOver) {
            return;
        }

        const elem = ev.target;

        if (elem.innerText) {
            return;
        }
        if (isX) {
            elem.innerText = 'X';
        } else {
            elem.innerText = 'O';
        }

        isX = !isX;

        showturn()
        checkWinner()
        checkDraw()

    });
});

// swap border on circles
function showturn() {
    document.querySelector('.currentTurn').classList.remove("currentTurn")
    if (isX) {
        document.querySelector('#players div:first-child').classList.add("currentTurn")
    } else {
        document.querySelector('#players div:last-child').classList.add("currentTurn")
    }
}

// check, there is a winner?
function checkWinner() {
    const boardWInArrays = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (op of boardWInArrays) {

        if (op.every(divDex => divs[divDex].innerText === "O")) {
            winner(op, 'O')
            break;
        } else if (op.every(divDex => divs[divDex].innerText === "X")) {
            winner(op, 'X')
            break;
        }
    }
}

function winner(op, player) {
    // setTimeout(alert(`The Winner Is ${player}`), 100)

    setTimeout(() => alert(player + " " + "Is The Winner!"), 50)
    // color divs of winner
    op.forEach(XnO => divs[XnO].classList.add("win"))
    // change global var to end game
    isGameOver = true;

}

// mathod 2 for draw
// function checkDraw() {
//     debugger
//     const toArray = Array.from(divs)

//     const isDraw = toArray.every(seeDraw);

//     function seeDraw(currentState) {
//         return currentState.innerText === true;
//     }
//     if (isDraw && isGameOver) {
//         alert(`Draw`)
//     }
// }

// TODO:ask the teacher why draw isnt working!
function checkDraw() {
    debugger
    if (!isGameOver) {
        let draw = false;
        divs.every(div => { if (div.innerText = `X` || `O`) { draw = true } })
        if (draw) {
            alert(`Draw`)
        }
    }
}

// make Draw button
document.querySelector(`#draw-button`).addEventListener(`click`, () => divs.forEach(div => div.innerText = `O`));



// teacher code---------------------------------\

// const divs = document.querySelectorAll("#board>div");
// let isX = true;
// let isGameOver = false;

// // לולאה העוברת על כל המשבצות
// divs.forEach(div => {
//     // הוספת פונקציה המופעלת בעת לחיצה על אחת המשבצות
//     div.addEventListener("click", function (ev) {
//         if (isGameOver) {
//             return;
//         }

//         // האלמנט שעליו לחץ השחקן
//         const elem = ev.target;

//         // אם המשבצת מלאה, הפונקציה נעצרת
//         if (elem.innerText) {
//             return;
//         }

//         if (isX) {
//             elem.innerText = "X";
//         } else {
//             elem.innerText = "O";
//         }

//         // שינוי תור
//         isX = !isX;
//         // הפעלת הפונקציה של המחווה הויזואלית
//         showTurn();
//         checkWinner();
//     });
// })

// /**
//  * פונקציה הנותנת מחווה של איזה שחקן התור הנוכחי
//  */
// function showTurn() {
//     // קודם כל, הסרנו את הקלאס מהשחקן האחרון
//     document.querySelector('.currentTurn').classList.remove('currentTurn');

//     // שם את הקלאס בהתאם לתור השחקן
//     if (isX) {
//         document.querySelector("#players>div:first-child").classList.add('currentTurn');
//     } else {
//         document.querySelector("#players>div:last-child").classList.add('currentTurn');
//     }
// }

// function checkWinner() {
//     // מערך של מערכים של מיקומים אפשריים לניצחון
//     const options = [
//         [0, 1, 2],
//         [3, 4, 5],
//         [6, 7, 8],
//         [0, 3, 6],
//         [1, 4, 7],
//         [2, 5, 8],
//         [0, 4, 8],
//         [2, 4, 6],
//     ];

//     // רץ על המערך של כל האופציות
//     for (const op of options) {
//         // בודק את המיקומים של כל מערך
//         if (op.every(myIndex => divs[myIndex].innerText === 'X')) {
//             winner(op, 'X');
//             break;
//         } else if (op.every(myIndex => divs[myIndex].innerText === 'O')) {
//             winner(op, 'O');
//             break;
//         }
//     }
// }

// function winner(op, win) {
//     setTimeout(() => alert(win + " is winner!"), 50);

//     op.forEach(x => divs[x].classList.add('win'));

//     isGameOver = true;
// }