import React, { useState } from "react";

interface Props {
  initialValues?: number;
}

interface CounterState {
  counter: number,
  clicks: number
}

const Counter = ({ initialValues = 0 }: Props) => {
  const [counterState, setCounterState] = useState<CounterState>({
    counter: initialValues,
    clicks: 0,
  });

  const handleClick = (value:number) => {
    setCounterState((prev) => ({
      counter: prev.counter + value,
      clicks: prev.clicks + 1,
    }));
  };

  return (
    <>
      <h1>Counter: {counterState.counter}</h1>
      <h1>Clicks: {counterState.clicks}</h1>

      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};

export default Counter;
