import React from 'react'

const App = () => {
  const BtnClicked=()=>{
    console.log("Btn is clicked");
  }

  return (
    <div>
  <button onClick={function(){
    BtnClicked()
  }}>Click me </button>
    </div>
  )
}

export default App