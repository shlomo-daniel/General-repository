let currentId = 0;

interface Todo {
    id: number,
    text: string,
    isDone: boolean,
    createdAt: Date,
}

let todos: Todo[] = []

function getTodos() {
    return [...todos];
}

function getTodo(id: number) {
    const found = todos.find((todo) => todo.id === id);

    if (!found) {
        throw new Error("id was not found");
    }

    return found;
}

function addTodo(text: string, isDone = false) {
    if (typeof text !== "string" || text.length < 2) {
        throw new Error("Task must be at least two characters");
    }

    const todo = {
        id: currentId++,
        text,
        isDone,
        createdAt: new Date(),
    };

    todos = [...todos, todo];
    return todo;
}

function removeTodo(id: number) {
    const removedTodo = getTodo(id);

    todos = todos.filter((todo) => todo.id !== id);

    return removedTodo;
}

function clearTodos() {
    todos = [];
}

// convert >>>
function changeComplete(id: number, isDone?: boolean) {
    todos = todos.map((todo) => {
        if (todo.id === id) {
            return {
                ...todo,
                isDone: typeof isDone === "boolean" ? isDone : !todo.isDone,
            };
        }

        return todo;
    });

    const updatedTodo = getTodo(id);
    return updatedTodo;
}