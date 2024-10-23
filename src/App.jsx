import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

  const addition = () => {
    setCount(count + 1)
  }
  const subtraction = () =>{
    setCount(count - 1)
  }
  return (
    <>
      <h1>counter: {count}</h1>
      <button onClick={addition}>Increase</button><br />
      <button onClick={subtraction}>Decrease</button>
    </>
  )
}

export default App
