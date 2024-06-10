const tasks = document.querySelector(".tasks");

// פונקציה להוספת אלמנטים
function newTask(value = '') {
    // יצירת אלמנט חדש
    const li = document.createElement('li');

    // הוספת האלמנט לתור הרשימה
    tasks.appendChild(li);

    // השמת התוכן של המשימה לאלמנט החדש
    const div = document.createElement('div');

    // מאפשרים למשתמש לערוך את התוכן של האלמנט
    div.contentEditable = true;
    div.innerHTML = value;
    li.appendChild(div);

    // יצירת לחצן מחיקה
    const btn = document.createElement('button');
    btn.innerHTML = 'x';

    // יצירת אירוע - כל לחיצה על הלחצן תפעיל את הפונקציה של המחיקה
    btn.addEventListener('click', function () {
        const isAllowed = confirm(`האם אתה בטוח כי ברצונך למחוק את ${div.innerHTML}?`);

        if (isAllowed) {
            li.remove();
        }

        saveTasks();
    });

    li.appendChild(btn);

    div.addEventListener('input', saveTasks);
}
// save to local storage 
function saveTasks() {
    const list = document.querySelectorAll('.tasks li');
    const arr = [];

    for (const li of list) {
        const name = li.querySelector('div').innerText.trim();

        if (name) {
            arr.push(name);
        }
    }

    localStorage.setItem('tasks', JSON.stringify(arr));
}
// load the tasks from local storage
function initialData() {
    if (localStorage.tasks) {
        const tasks = JSON.parse(localStorage.tasks);

        for (const task of tasks) {
            newTask(task);
        }
    }
}