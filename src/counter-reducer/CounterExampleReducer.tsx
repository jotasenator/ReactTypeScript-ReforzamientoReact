import { useReducer } from "react";
import { doReset } from "./actions/actions";
import { doIncreaseBy } from "./actions/actions";
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";

const INITIAL_STATE: CounterState = {
  changes: 0,
  counter: 0,
  previous: 0,
};

export const CounterUserReducer = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const handleReset = () => {
    dispatch(doReset());
  };

  const handleIncreaseBy = (value: number) => {
    dispatch(doIncreaseBy(value));
  };

  return (
    <>
      <h1>Counter Reducer Segmentado</h1>

      <pre>{JSON.stringify(counterState, null, 2)}</pre>

      <button onClick={() => handleReset()}> Reset </button>
      <button onClick={() => handleIncreaseBy(1)}> +1 </button>
      <button onClick={() => handleIncreaseBy(5)}> +5 </button>
      <button onClick={() => handleIncreaseBy(10)}> +10 </button>
    </>
  );
};
