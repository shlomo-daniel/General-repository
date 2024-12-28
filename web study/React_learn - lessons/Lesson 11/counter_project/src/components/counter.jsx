// import { useState } from "react";
import useCounterLogic from "../hooks/counter logic";

function Counter({
  initialValue = 0,
  max = Number.MAX_SAFE_INTEGER,
  min = Number.MIN_SAFE_INTEGER,
}) {
  const { counter, handleAdd, handleSub, reset } = useCounterLogic(
    initialValue,
    max,
    min
  );

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="btn btn-success" onClick={handleAdd}>
        +
      </div>
      <span className="mx-4">{counter}</span>
      <div className="btn btn-danger" onClick={handleSub}>
        -
      </div>

      <div className="btn btn-warning mx-4" onClick={reset}>
        reset
      </div>
    </div>
  );
}

export default Counter;
