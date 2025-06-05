import { useState } from "react";

export const useCounter = () => {
  const [counter, setCounter] = useState<number>(0);

  const sum = (value: number) => {
    setCounter(counter + value);
  };

  const decrease = (value: number) => {
    setCounter(counter - value);
  };

  const restart = () => {
    setCounter(0);
  };

  return {
    counter,
    sum,
    decrease,
    restart,
  };
};
