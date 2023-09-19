// state update,x store and cause components to render the data.
import { useState } from "react";
import { Paragraph } from "./Paragraph";

const Display = () => {
  //   let counter = 30;

  const [counter, setCounter] = useState(30);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);

    // console.log(--counter);
    console.log("rendering.....");
  };
  return (
    <div>
      <Paragraph counter={counter} />
      {/* <div>{counter}</div> */}
      <button onClick={increment}> + </button>
      <button onClick={decrement}> - </button>
    </div>
  );
};

export default Display;
