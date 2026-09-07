import ImageContainer from "./ImageContainer"
import LeftText from "./LeftText"

const Page1Context = (props) => {
  return (
    <div className='py-10 flex-1 min-h-0 flex gap-10 items-center '>
        <LeftText/>
        <ImageContainer users={props.users} />
    </div>
  )
}

export default Page1Context