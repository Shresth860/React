import { useState } from "react"

const App = () => {
  const [num, setNum] = useState(10)

  const increaseValue = () => {
    setNum(num+1)
  }

  const decreaseValue = () => {
    setNum(num-1)
  }

  return (
    <div className="counter-wrapper">
      <div className="Box">
        <h1>{num}</h1>
      </div>

      <div className="button-group">
        <button onClick={increaseValue}>Increase</button>
        <button onClick={decreaseValue}>Decrease</button>
      </div>
    </div>
  )
}

export default App