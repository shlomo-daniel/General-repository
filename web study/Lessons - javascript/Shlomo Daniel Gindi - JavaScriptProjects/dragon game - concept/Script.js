//--- global vars ---\\

const board = document.querySelector("#board");
const width = 30;
const height = 30;

// the snake placement array
const snake = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
// all divs of the board
const tiles = []
// store last direction 
let direction = "left";
// interval id for snake movement
let intervalID;

let isGameOver = false;
// random number for apple placement
let random;
// game score
let score = 0;

// end.

// create the board
function createBoard() {
    board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

    for (let i = 0; i < width * height; i++) {
        const createdTile = document.createElement('div');
        // createdTile.innerText = i;

        board.appendChild(createdTile);
        tiles.push(createdTile);
    }

    createSnake();
    setApple();
}

// create the snake
function createSnake() {
    tiles.forEach(x => x.classList.remove("snake"));
    tiles.forEach(x => x.classList.remove('head'));

    snake.forEach((x, i) => {
        // draw snake
        tiles[x].classList.add("snake")

        // draw head
        if (i === 0) {
            tiles[snake[0]].classList.add('head');
        }
    })
}

// make the snake move
function move(dir) {

    // value of snake array at index 0 (the head)
    let head = snake[0];

    if (isGameOver == true) {
        return;
    }

    // up
    if (dir === "up") {
        if (direction === "down") {
            return;
        }

        head -= width;

        if (head < 0) {
            gameOver();
        }
    }
    // down
    else if (dir === "down") {
        if (direction === "up") { return; }

        head += width;

        if (head >= width * height) {
            gameOver();
        }
    }
    // right
    else if (dir === "right") {
        if (direction === "left") {
            return;
        }

        if (head % width === 0) {
            gameOver();
        }

        head--;
    }
    // left
    else if (dir === "left") {
        if (direction === "right") {
            return;
        }

        head++;

        if (head % width === 0) {
            gameOver();
        }
    }

    if (snake.includes(head)) {
        gameOver();
    }

    direction = dir;
    snake.unshift(head);

    if (head === random) {
        setApple();
        score += 10;
        document.querySelector('.score-elem').innerHTML = `Score: ${score}`
    } else {
        snake.pop();
    }

    autoMove()
    createSnake();
}

function autoMove() {
    clearInterval(intervalID);
    intervalID = setInterval(() => { move(direction) }, 400 - score);
}
// MARK:FIX 
function gameOver() {
    // logic: stop game> alert player> play again

    /* sudo code: 
    stop interval autoMove & stop controls>
    change var of gameOver to true> 
    cover screen with try again button / confirm alert to try again>
    refresh page & reset score.
    */



    clearInterval(intervalID);
    isGameOver = true;
    restart()
}
// restart game by refreshing page
function restart(clicRestart) {
    // restart by buttom
    if (clicRestart === "clicRestart") {
        location.reload();
    }
    // restart by gameover
    if (isGameOver === true) {
        let isToRestart = confirm("Game Over.. play again?");
        if (isToRestart === true) {
            location.reload();
        }
    }
}

// control snake by keys
window.addEventListener("keydown", ev => {

    ev.preventDefault()

    console.log(ev.key);

    switch (ev.key) {
        case "ArrowUp": move("up"); break;
        case "ArrowDown": move("down"); break;
        case "ArrowRight": move("right"); break;
        case "ArrowLeft": move("left"); break;
        case "Escape": clearInterval(intervalID); break;
    }
});

// set apple randomly on board
function setApple() {

    do {
        random = Math.floor(Math.random() * width * height);
    } while (
        snake.includes(random)
    )

    tiles.forEach(tile => tile.classList.remove("apple"));
    tiles[random].classList.add('apple');
}

// sound effect
function sound(audioFile) {
    const audioElem = document.createElement("audio")
    audioElem.src = audioFile;
}