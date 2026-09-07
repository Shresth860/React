import Card from './Card'

const ImageContainer = ({ users }) => {
  return (
    <div className='self-stretch w-3/4 flex gap-3.5 overflow-x-auto'>
        {users.map((user, index) => (
          <Card key={user.tag} user={user} number={index + 1}/>
        ))}
    </div>
  )
}

export default ImageContainer