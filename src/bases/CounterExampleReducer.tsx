import { useReducer } from "react";

interface CounterState {
  counter: number;
  previous: number;
  changes: number;
}

const INITIAL_STATE: CounterState = {
  changes: 0,
  counter: 0,
  previous: 0,
};

type CounterAction =
  | { type: "increaseBy"; payload: { value: number } }
  | { type: "reset" };

const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  const { counter, changes } = state;

  switch (action.type) {
    case "reset":
      return {
        changes: 0,
        counter: 0,
        previous: 0,
      };
    case "increaseBy":
      return {
        changes: changes + 1,
        counter: counter + action.payload.value,
        previous: counter,
      };

    default:
      return state;
  }
};

export const CounterUserReducer = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  const handleIncreaseBy = (value: number) => {
    dispatch({ type: "increaseBy", payload: { value } });
  };

  return (
    <>
      <h1>Counter Reducer</h1>

      <pre>{JSON.stringify(counterState, null, 2)}</pre>

      <button onClick={() => handleReset()}> Reset </button>
      <button onClick={() => handleIncreaseBy(1)}> +1 </button>
      <button onClick={() => handleIncreaseBy(5)}> +5 </button>
      <button onClick={() => handleIncreaseBy(10)}> +10 </button>
    </>
  );
};
