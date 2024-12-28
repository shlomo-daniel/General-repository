import { useState } from "react";
import WindowSize from "./components/windowSize";

function App() {
  const [isShow, setIsShow] = useState(false);

  const handleIsShow = () => {
    setIsShow(!isShow);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={handleIsShow}>
        {isShow ? "Show" : "Hide"}
      </button>
      {isShow || <WindowSize />}
    </div>
  );
}

export default App;
