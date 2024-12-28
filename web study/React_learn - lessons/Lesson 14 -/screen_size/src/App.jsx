import { useState } from "react";
import WindowSize from "./components/windowSize";

function App() {
  const [isShow, setIsShow] = useState(false);

  const showHide = () => {
    setIsShow((isShow) => !isShow);
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={showHide}>
        show / hide
      </button>
      {isShow && <WindowSize />}
    </div>
  );
}

export default App;
