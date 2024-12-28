import { useState } from "react";

const todos = [
  {
    id: 1,
    text: "buy milk",
    priority: "urgent",
    createdAt: Date(),
    isDone: false,
  },
];

function App() {
  // const [todos, setTodo] = useState([]);
  const [input, setInput] = useState(" ");

  return (
    <>
      <div className="row form m-1">
        <div className="input-group mb-2">
          <span className="input-group-text">I need to</span>
          <input
            type="text"
            className="form-control"
            placeholder="buy bread"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <div className="dropdown-center">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Piority
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Urgent
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Urgent and important
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Important
                </a>
              </li>
            </ul>
          </div>
          <button className="btn btn-primary" type="button">
            Add
          </button>
        </div>
      </div>

      {/* todos list */}
      <div className="m-4">
        <ul className="list-group">
          <li
            key={todos[0].id}
            className="list-group-item d-flex justify-content-evenly"
            style={
              todos[0].isDone
                ? { textDecoration: "line-through" }
                : { fontWeight: "600" }
            }
          >
            <i
              className="bi bi-check-square"
              onClick={(e) => {
                todos[0].isDone = !todos[0].isDone;
              }}
            ></i>
            <span>{todos[0].createdAt}</span>
            {todos[0].text}
            <span>ID: {todos[0].id}</span>
            <div className="d-flex justify-content-between">
              <i className="bi bi-exclamation-square me-3"></i>
              <i className="bi bi-trash3"></i>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
