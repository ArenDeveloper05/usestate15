import { useState } from "react";
import Counter from "../counter/Counter";
import "./Main.css";

const Main = ({ content }) => {
  const [show, setShow] = useState(true);

  return (
    <main>
      <h1>{content}</h1>
      <button
        onClick={() => {
          setShow((prev) => !prev);
        }}
      >
        Show or Hide Counter
      </button>
      {/* {show && <Counter />} */}
      <Counter show={show} />
    </main>
  );
};

export default Main;
