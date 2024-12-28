import { useState } from "react";

function useCounterLogic(initialValue, max, min) {
  if (min > max)
    throw new Error(`the min of ${min} is greater than the max of ${max} `);
  if (initialValue > max || initialValue < min)
    throw new Error(
      `initial value is more than max of ${max} or smaller than min of ${min}`
    );

  const [counter, setCounter] = useState(initialValue);

  const isMax = counter >= max;
  const isMin = counter <= min;

  const handleAdd = () => {
    if (isMax) {
      return;
    }
    setCounter((counter) => counter + 1);
  };

  const handleSub = () => {
    if (isMin) {
      return;
    }
    setCounter((counter) => counter - 1);
  };
  const reset = () => setCounter(initialValue);

  return setCounter, counter, isMax, isMin, handleAdd, handleSub, reset;
}

export default useCounterLogic;
