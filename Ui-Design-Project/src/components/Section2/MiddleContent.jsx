import LeftContend from "./LeftContend"
import RightContent from "./RightContent"

const MiddleContent = () => {
  return (
    <div className="flex flex-1 flex-col items-center gap-10 px-8 py-12 md:flex-row md:px-18">
        <LeftContend/>
        <RightContent/>
    </div>
  )
}

export default MiddleContent