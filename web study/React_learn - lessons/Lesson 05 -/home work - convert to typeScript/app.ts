const todoInput = document.getElementById("todo-input");
const todoBtn = document.getElementById("todo-btn");
const todoBoard = document.getElementById("todo-board");
const todoStatus = document.getElementById("todo-status");
const errorMessage = document.getElementById("error-message");

renderList();

todoBtn.addEventListener("click", newTodo);
todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        newTodo();
    }
});
todoBoard.addEventListener("click", function (e) {
    console.log(e.target);
    console.log(e.target.closest("li[data-todo-id]"));
    // This function uses "event bubbling" and "data attributes" read on them.
    const todoId = Number(e.target.closest("li[data-todo-id]").dataset.todoId);
    const shouldRemove = e.target.classList.contains("bi-trash-fill");

    if (shouldRemove) {
        removeTodo(todoId);
    } else {
        changeComplete(todoId);
    }

    renderList();
});

function newTodo() {
    try {
        addTodo(todoInput.value);
        resetInput();
        clearErrorMessage();
        renderList();
    } catch (err) {
        setErrorMessage(err.message);
    }
}

function resetInput() {
    todoInput.value = "";
}

function setErrorMessage(error) {
    errorMessage.innerHTML = `<span>${error}</span>`;
}

function clearErrorMessage() {
    errorMessage.innerHTML = "";
}

function refreshStatus() {
    // ** Using array.prototype.reduce function
    // const amountDone = getTodos().reduce((completedTodos, todo) => {
    //   console.log(completedTodos, todo);
    //   return todo.isDone ? completedTodos + 1 : completedTodos;
    // }, 0);

    // ** Using array.prototype.filter and length property
    const amountDone = getTodos().filter((todo) => todo.isDone).length;

    todoStatus.innerHTML = `${amountDone}/${getTodos().length}`;
}

function renderTodo(todo) {
    return `
        <li data-todo-id="${todo.id}" class="list-group-item cursor-pointer">
            <i class="bi bi-trash-fill text-danger"></i>
            <span class="ms-2 ${todo.isDone ? "text-muted text-decoration-line-through" : ""
        }">
            ${todo.text}
            </span>
        </li>`;
}

function renderEmptyList() {
    return `
      <div class="bg-light text-center p-5 m-2 rounded border-5">
        <h1 class="display-1">
          Good Job!<br />
          Go to the beach! 😎
        </h1>
      </div>`;
}

function renderList() {
    const todos = getTodos();

    console.log(todos.map(renderTodo));

    refreshStatus();
    todoBoard.innerHTML =
        todos.length === 0
            ? renderEmptyList()
            : [
                '<ul class="list-group">',
                todos
                    .toSorted((a) => (a.isDone ? 1 : -1))
                    .map(renderTodo)
                    .join(""),
                "</ul>",
            ].join("");
}