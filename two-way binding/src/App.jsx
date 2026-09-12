import React, { useState } from 'react'


const App = () => {
    
    const [title, setTitle] = useState("")

  const submitHandler=(e)=>{
    e.preventDefault()
    console.log("form submitted by " ,title)
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type='text' placeholder='Enter your Name'
        value={title}
        onChange={(e)=>{
          console.log(e.target.value)
          setTitle(e.target.value)
        }}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App