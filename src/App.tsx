import React from "react";
import { CounterBy } from "./bases/CounterBy";
import { Counter } from "./bases/Counter";
import { CounterEffect } from "./bases/CounterEffect";
import { CounterHook } from "./bases/CounterHook";
import { CounterUserReducer } from "./bases/CounterExampleReducer";

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initialValue={15} />
      <CounterBy />
      <CounterEffect />
      <CounterHook />
      <CounterUserReducer />
    </>
  );
}

export default App;
