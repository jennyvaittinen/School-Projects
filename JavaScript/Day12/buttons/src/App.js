import React, {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  function minus () {
    setCount(prevCount => prevCount - 1)
  }

  function plus () {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <button onClick={minus}>-</button>
      <span>{count}</span>
      <button onClick={plus}>+</button>
    </>
  )
}

export default App;
