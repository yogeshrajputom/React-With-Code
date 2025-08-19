import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5);

  const addValue = () => {
    setCounter(prev => prev + 1); // 1st update
    setCounter(prev => prev + 1); // 2nd update
    setCounter(prev => prev + 1); // 3rd update
    setCounter(prev => prev + 1); // 4th update
  }

  const removeValue = () => {
    setCounter(prev => prev - 1);
  }

  return (
    <>
      <h1>Studey or React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
      <p>Fotter: {counter}</p>
    </>
  )
}

export default App
