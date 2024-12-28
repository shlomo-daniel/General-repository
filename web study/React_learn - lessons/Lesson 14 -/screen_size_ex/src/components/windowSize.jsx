import { useState } from "react";

function WindowSize() {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowwidth] = useState(window.innerWidth);

  return (
    <div className="text-danger fs-3">
      {windowHeight} X {windowWidth}
    </div>
  );
}

export default WindowSize;
