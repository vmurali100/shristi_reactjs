import React from "react";
import Murali from "./Murali";

function Shristi() {
  const sayHello = () => {
    console.log("Say Hello Called");
  };
  return (
    <div>
      <button onClick={sayHello}>Click</button>
      <Murali />
    </div>
  );
}

export default Shristi;
