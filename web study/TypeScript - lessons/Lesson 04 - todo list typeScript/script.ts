
type Task = {
    id: number,
    text: string,
    isDone: boolean,
    isUrgent: boolean,
    date: string,
}

let tasksList: Task[] = [
    {
        id: 1,
        text: "buy disc",
        isDone: true,
        isUrgent: false,
        date: date,
    },
    {
        id: 2,
        text: "work-up",
        isDone: false,
        isUrgent: true,
        date: new Date,
    },
    {
        id: 3,
        text: "think it all",
        isDone: false,
        isUrgent: false,
        date: new Date,
    },
]

function add() { }

function remove() { }

function markUrgent() { }

function markDone() { }

function filterTask() { }

