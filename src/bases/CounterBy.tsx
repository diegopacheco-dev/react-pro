import React, { useState } from "react";

interface Props {
  initialValues?: number;
}

const CounterBy = ({ initialValues = 0 }: Props) => {
  const [counter, setCounter] = useState(initialValues);

  const increment = () => setCounter((prev) => prev + 1);

  return (
    <>
      <h1>Counter: {counter}</h1>

      <button onClick={increment}>+1</button>
    </>
  );
};

export default CounterBy;
