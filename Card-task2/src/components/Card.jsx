import { Plus } from "lucide-react";
import verification from "../assets/verification.png";
import user from "../assets/user.png";
const Card = (props) => {
  return (
    <div className="Card">
        <div className="top">
         <img src={props.image} alt="Card Image" />
        </div>
        <div className="center">
            <h3>{props.name} <img src={verification} alt="Icon" /></h3>
            <p>{props.description}</p>
        </div>
        <div className="bottom">
            <img src={user} alt="user Icon" />

            
            <button>follow <Plus color="#362db4" /></button>
        </div>
    </div>
  )
}

export default Card