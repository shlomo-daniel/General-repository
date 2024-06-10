// const tasks = document.querySelector(".tasks");

// פונקציה להוספת אלמנטים
// function addTask() {
//     const input = document.querySelector('input');

//     // אם אין תוכן בתיבת הקלט - הפונקציה נעצרת
//     if (!input.value) {
//         return;
//     }

//     // יצירת אלמנט חדש
//     const li = document.createElement('li');

//     // הוספת האלמנט לתור הרשימה
//     tasks.appendChild(li);

//     // השמת התוכן של המשימה לאלמנט החדש
//     const div = document.createElement('div');
//     div.innerHTML = input.value;

//     // מאפשרים למשתמש לערוך את התוכן של האלמנט
//     div.contentEditable = true;
//     li.appendChild(div);

//     // יצירת לחצן מחיקה
//     const btn = document.createElement('button');
//     btn.innerHTML = 'x';

//     // יצירת אירוע - כל לחיצה על הלחצן תפעיל את הפונקציה של המחיקה
//     btn.addEventListener('click', function () {
//         const isAllowed = confirm(`האם אתה בטוח כי ברצונך למחוק את ${div.innerHTML}?`);

//         if (isAllowed) {
//             li.remove();
//         }
//     });
//     li.appendChild(btn);

//     // איפוס תיב הקלט
//     input.value = '';
// }

// // פונקציה להוספת אלמנטים באמצעות לחיצה על Enter
// function keyup(ev) {
//     if (ev.key == 'Enter') {
//         add();
//     }
// }


// 
// practice - once
// 
const tasksElem = document.querySelector(".tasks");

function addTask() {

    const input = document.querySelector('input');

    if (!input.value) {
        return;
    }

    const createLi = document.createElement('li');
    const createDiv = document.createElement('div');
    const createButton = document.createElement('button');

    tasksElem.appendChild(createLi);
    createLi.appendChild(createDiv);
    createLi.appendChild(createButton);
    createButton.innerHTML = 'x';
    createDiv.innerHTML = input.value;

    // remove button 
    createButton.addEventListener('click', function () {
        const ask = confirm(`are you sure you want to delete ${createDiv.innerHTML}?`);

        if (ask) {
            createLi.remove();
        }
    });

    input.value = '';
}

// add task by Enter
function press(eventInput) {
    if (eventInput.key == "Enter") {
        addTask();
    }
}