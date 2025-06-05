import { Fragment } from "react";
import { useCounter } from "../hooks/useCounter";

export const Counter = () => {
  const { counter, sum, decrease, restart } = useCounter();

  return (
    <Fragment>
      <div className="text-2xl mt-4">Counter: {counter}</div>
      <div className="flex justify-between items-center w-70">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={() => decrease(1)}
        >
          - 1
        </button>
        <button
          className="bg-amber-100 text-black px-4 py-2 rounded mt-4"
          onClick={() => restart()}
        >
          Restart Counter
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
          onClick={() => sum(1)}
        >
          + 1
        </button>
      </div>
    </Fragment>
  );
};
