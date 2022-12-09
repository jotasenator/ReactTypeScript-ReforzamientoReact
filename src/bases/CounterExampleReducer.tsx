import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0,
};

export const CounterUserReducer = () => {
  const [state, dispatch] = useReducer(first, INITIAL_STATE);

  const handleClick = () => {
    setCounter((prev: number) => prev + 1);
  };

  return (
    <>
      <h1>Counter : {counter} </h1>

      <button onClick={handleClick}> +1 </button>
    </>
  );
};
