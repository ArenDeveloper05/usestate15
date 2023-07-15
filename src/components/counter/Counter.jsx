import { useState } from "react";
import "./Counter.scss";

const Counter = ({ show }) => {
  //   let count = 0;

  const [state, setState] = useState(0);

  console.log(state);

  function increment() {
    console.log("plyus");
    setState((prev) => prev + 1);
    // count++;
    // console.log(count);
  }

  function decrement() {
    console.log("minus");

    if (state > 0) {
      setState((prev) => prev - 1);
    }
    // setState((prev) => {
    //   if (prev > 0) {
    //     return prev - 1;
    //   }
    //   return prev;
    // });
  }

  return (
    <div className="counter" style={{ display: show ? "flex" : "none" }}>
      <button className="counter-decrement" onClick={decrement}>
        -
      </button>
      <span>{state}</span>
      <button className="counter-increment" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default Counter;
