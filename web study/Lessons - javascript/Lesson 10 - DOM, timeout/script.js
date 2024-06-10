// // יצירת אלמנט כללי שבתוכו יופיע לוח הכפל
// const board = document.createElement('div');
// board.className = 'board';
// // הוספת האלמנט ל-Body
// document.body.appendChild(board);

// for (let y = 1; y <= 10; y++) {
//     for (let x = 1; x <= 10; x++) {
//         // יצירת אלמנט שבתוכו יופיע המספר (כמו תא בטבלה)
//         const div = document.createElement('div');
//         div.innerHTML = x * y;
//         board.appendChild(div);

//         div.setAttribute("ziv", `${y} x ${x} = ${y * x}`);
//     }
// }


//
// practice
//

// multi board

// // create the container of board and a class name
// const board = document.createElement("div");
// board.className = "board";
// // actually put ithe board container
// document.body.appendChild(board);

// // the looop in aloop to create the squars of the board
// for (y = 1; y <= 10; y++) {
//     for (x = 1; x <= 10; x++) {
//         // create the squars
//         const squre = document.createElement("div");
//         // put in the clac of each loop
//         squre.innerHTML = y * x;
//         // actually puting the square div
//         board.appendChild(squre);
//     }

// }

const board = document.createElement("div");
board.className = "board"
document.body.appendChild(board);

for (y = 1; y <= 10; y++) {
    for (x = 1; x <= 10; x++) {
        const square = document.createElement("div");
        square.innerHTML = y * x;
        board.appendChild(square)
    }
}
