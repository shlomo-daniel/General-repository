//    --- Global var of the game board ---
const divs = document.querySelectorAll("#board>div");

// using this boolean as the player turn 
let isX = true;
let isGameOver = false;

// local storage of scores
localStorage.xScoreBank = localStorage.xScoreBank ? localStorage.xScoreBank : 0;
localStorage.oScoreBank = localStorage.oScoreBank ? localStorage.oScoreBank : 0;

//   end.

// call scores from local storage
document.querySelector(".score-points-x").innerText = localStorage.xScoreBank;
document.querySelector(".score-points-o").innerText = localStorage.oScoreBank;

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

    });
});

// swap border bold between circles
function showturn() {
    document.querySelector('.currentTurn').classList.remove("currentTurn")
    if (isX) {
        document.querySelector('#players div:first-child').classList.add("currentTurn")
    } else {
        document.querySelector('#players div:last-child').classList.add("currentTurn")
    }
}

// check, is there a winner?
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
            // add score
            localStorage.oScoreBank++;
            // in DOM score
            document.querySelector(".score-points-o").innerText = localStorage.oScoreBank;
            winner(op, 'O')
            break;

        } else if (op.every(divDex => divs[divDex].innerText === "X")) {
            // add score
            localStorage.xScoreBank++
            // in DOM score
            document.querySelector(".score-points-x").innerText = localStorage.xScoreBank;
            winner(op, 'X')
            break;

        }
    }
    // alert draw
    if (!isGameOver && [...divs].every(indiv => indiv.innerText)) {
        setTimeout(() => alert('this is a Draw!'), 50)
        isGameOver = true;
    }
}

function winner(op, player) {

    setTimeout(() => alert(player + " " + "Is The Winner!"), 50)
    // color divs of winner
    op.forEach(XnO => divs[XnO].classList.add("win"))
    // change global var to end game
    isGameOver = true;

}
// new round
function newRound() {

    document.querySelector(".new-round").addEventListener("click", () => divs.forEach(div => { div.innerHTML = ''; div.classList.remove('win') }))

    isGameOver = false;
}
// new game with new scores
function newGame() {

    document.querySelector(".new-game").addEventListener("click", () => divs.forEach(div => { div.innerHTML = ''; div.classList.remove('win') }))

    localStorage.clear();
    location.reload();

    document.querySelector(".score-points-x").innerText = '0';
    document.querySelector(".score-points-o").innerText = '0';
    isGameOver = false;
} 