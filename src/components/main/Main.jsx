import { useState } from "react";
import Counter from "../counter/Counter";
import "./Main.css";
import Gallery from "./gallery/Gallery";

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
      {show && <Counter />}
      {/* <Counter show={show} /> */}
      <Gallery />
    </main>
  );
};

export default Main;
