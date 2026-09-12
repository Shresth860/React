import React from 'react'
// import { useState } from 'react'

const App = () => {
  // const [num, setfirst] = useState(second)

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("form submitted")
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type='text' placeholder='Enter your Name'></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App