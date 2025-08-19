import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(5);
  //let counter = 5;

  const addValue = () => {
    if (counter <20) {
      //console.log("click ", counter);
      //counter = counter + 1; this is working
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      //console.log("click", counter);
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Studey or React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Fotter: {counter}</p>
    </>
  );
}

export default App;
