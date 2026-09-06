import React from 'react'
import CardContext from './CardContext'
const Card = () => {
  return (
    <div className='h-full w-80 overflow-hidden relative rounded-4xl'>
        <img className='block h-full w-full object-cover' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D" alt="Professional working at a desk"/>
        <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full font-bold text-xl w-8 h-8 flex flex-col justify-between items-center'>1</h2>
        <CardContext/>
        </div>
    </div>
  )
}

export default Card