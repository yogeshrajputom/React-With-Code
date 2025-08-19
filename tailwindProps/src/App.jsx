import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./component/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-400 text-black rounded-xl mb-4">Tailwind Test</h1>
      <Card userName="yoge" btn="Appliy" />
      <Card userName="Rajput" />
    </>
  );
}

export default App;
