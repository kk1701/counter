import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function increment(){
    setCount(count+1);
  }

  function decrement(){
    setCount(count-1);
  }

  return (
    <div className='container'>
      <div id='value'>{count}</div>

      <div className='buttons'>
        <button className='btn' onClick={increment}>Increment</button>
        <button className='btn' onClick={decrement}>Decrement</button>
      </div>
      
    </div>
  )
}

export default App
