import React from 'react'
import { Counter } from "./components/Counter"

// React,FC means that variable App it is a function component
const App: React.FC = () => {
  return (
    <div>
      <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
    </div>
  )
}

export default App;
