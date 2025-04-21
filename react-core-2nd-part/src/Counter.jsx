import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    const addEvent = () => {
        const newCount = count + 1;
        setCount(newCount)
    }
    
    const ReduceEvent = () => {
        const newCount = count - 1;
        setCount(newCount)
    }

  return (
    <div style={{border :"2px solid tomato"}}>
      <h3>Counter: {count}</h3>
      <button onClick={addEvent}>Add</button>
      <button onClick={ReduceEvent}>Reduce</button>
    </div>
  )
}
