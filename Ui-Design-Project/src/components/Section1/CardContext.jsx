const CardContext = ({ user }) => {
  return (
    <div>
        <p className='text-xl leading-normal py-5 mb-4 text-white'>
          {user.intro || 'Explore a banking experience designed around your needs.'}
        </p>
        <div className='flex justify-between'>
            <button style={{ backgroundColor: user.color }} className='text-amber-50 font-semibold px-5 py-3 rounded-full'>
              {user.tag}
            </button>
            <button aria-label={`Open ${user.tag} details`} style={{ backgroundColor: user.color }} className='text-amber-50 font-semibold px-5 py-3 rounded-full'>
              <i className="ri-arrow-right-line"></i>
            </button>
        </div>
    </div>
  )
}

export default CardContext