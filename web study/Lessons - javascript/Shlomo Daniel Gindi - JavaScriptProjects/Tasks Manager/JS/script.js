// ul that contains all the tasks
const tasksElem = document.querySelector(".tasks");

function addTask(loadingtasks = "") {

    const taskInput = document.querySelector('input');

    if (!taskInput.value) {
        taskInput.value = loadingtasks;
    }

    // all the elements that will be created
    const createLi = document.createElement('li');
    const createDiv = document.createElement('div');
    const createButton = document.createElement('button');
    // const createButtonImportant = document.createElement('button');

    // append the li
    tasksElem.appendChild(createLi);

    // append the div of the task
    createLi.appendChild(createDiv);
    createDiv.style.fontSize = "16px"

    // // append the button important
    // createLi.appendChild(createButtonImportant);
    // createButtonImportant.innerHTML = '!';
    // createButtonImportant.title = "Important"
    // createButtonImportant.style.backgroundColor = '#63fb68';

    // create the button remove
    createLi.appendChild(createButton);
    createButton.innerHTML = 'x';

    // create the input as a task!
    createDiv.innerHTML = taskInput.value;


    // // mark as important function
    // createButtonImportant.addEventListener('click', () => {

    //     if (createDiv.className !== 'bolded-li') {
    //         createDiv.classList.add("bolded-li");
    //     } else {
    //         createDiv.classList.remove('bolded-li');
    //     }s

    // remove button 
    createButton.addEventListener('click', function () {
        const ask = confirm(`Are you sure you want to delete "${createDiv.innerHTML}"?`);

        if (ask) {
            createLi.remove();
        }
        saveToLocal();
    });

    taskInput.value = '';
    saveToLocal();
}

// add task by Enter
function press(eventInput) {
    if (eventInput.key == "Enter") {
        addTask();
    }
}


// --- local storage ---

let localSaveArr = [];

// save to local storage
function saveToLocal() {
    allTasksArr = tasksElem.querySelectorAll(".tasks li");
    localSaveArr = [];

    for (task of allTasksArr) {
        taskName = task.querySelector('div').innerText.trim();
        if (taskName) {
            localSaveArr.push(taskName);
        }
    }

    localStorage.setItem('localstorgArr', JSON.stringify(localSaveArr));
}

// load from localstorage
function loadFromLocal() {
    loadedtasks = JSON.parse(localStorage.getItem("localstorgArr"));
    console.log(loadedtasks);

    for (task of loadedtasks) {
        addTask(task);
    }
}