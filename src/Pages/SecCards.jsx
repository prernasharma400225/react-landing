import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


const SecCards = () => {

  return (
    <div className='flex flex-col gap-5 w-96'>
      <div className='w-96 h-80 flex flex-col relative rounded-4xl overflow-hidden'>
        <img className='w-full h-full object-top object-cover' src="typography-axel-vincent-10.jpg" alt="" />
        <GoArrowUpRight className='text-5xl text-black bg-white rounded-full p-2 absolute top-4 right-4' />
        <button className='bg-white text-zinc-700 absolute bottom-3 left-5 rounded-full text-xs py-1 px-2'>2D Animation</button>
      </div>
      <div className='flex flex-col gap-2 items-start'>
        <h1 className='text-purple-500 text-2xl'>The Lighthouse </h1>
        <p className='text-zinc-500 text-sm font-semibold'>Adding a new dimension to projects through thoughtfully designed 2D animations.</p>
      </div>
    </div>
  )
}

export default SecCards
