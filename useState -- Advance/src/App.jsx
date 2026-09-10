import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:"Shresth",age:25})

  const btnClicked = ()=>{
    const newNum = {...num}; // newNum is taking reference from num 
    newNum.user="Saxena"
    setNum(newNum)
  }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click me</button>
    </div>
  )
}

export default App