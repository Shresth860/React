import React from 'react'

const CardContext = () => {
  return (
    <div>
        <div>
        <p className='text-xl leading-normal py-5 mb-4 text-white'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores, eius!</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-amber-50 font-semibold px-5 py-3 rounded-full '>Satisfied</button>
                <button className='bg-blue-600 text-amber-50 font-semibold px-5 py-3 rounded-full '><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
  )
}

export default CardContext