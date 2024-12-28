import { useState } from "react";

function App() {
  let [color, setColor] = useState("white");
  console.log(color);

  return (
    <>
      <div style={{ background: color }}>
        <h1>color me please</h1>
      </div>

      <button onClick={(e) => setColor("blue")}>blue</button>
      <button onClick={(e) => setColor("green")}>green</button>
      <button onClick={(e) => setColor("red")}>red</button>
    </>
  );
}

export default App;
