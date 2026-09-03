
const Card = (props) => {
    console.log(props)
  return (
    <div className="card">
        <img src={props.img} alt="profile" />
        <h1>{props.user}</h1>
        <p>{props.age} years old</p>
        <button>Follow</button>
      </div>
  )
}

export default Card