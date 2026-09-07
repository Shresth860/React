import CardContext from './CardContext'

const Card = ({ user, number }) => {
  return (
    <div className='h-full w-80 shrink-0 overflow-hidden relative rounded-4xl'>
        <img className='block h-full w-full object-cover' src={user.img} alt={user.tag}/>
        <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full font-bold text-xl w-8 h-8 flex flex-col justify-between items-center'>{number}</h2>
        <CardContext user={user}/>
        </div>
    </div>
  )
}

export default Card