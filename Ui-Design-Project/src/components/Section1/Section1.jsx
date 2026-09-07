import Header from "./Header"
import Page1Context from "./Page1Context"

const Section1 = (props) => {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Header/>
      <Page1Context users={props.users}/>
    </div>
  )
}

export default Section1