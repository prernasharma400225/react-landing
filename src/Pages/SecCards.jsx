import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


const SecCards =({elem}) => {
 

  return (
    <div className='flex flex-col gap-5 w-96 items-center justify-center'>
      <div className='w-[450px] h-[350px] flex flex-col relative rounded-4xl overflow-hidden'>
        <img className='w-full h-full object-top object-cover' src={elem.img} alt="" />
        <GoArrowUpRight className='text-5xl text-black bg-white rounded-full p-2 absolute top-4 right-4' />
        <button className='bg-white text-zinc-700 absolute bottom-3 left-5 rounded-full text-xs py-1 px-2'>{elem.btn}</button>
      </div>
      <div className='flex flex-col gap-2 items-start'>
        <h1 className='text-purple-500 text-2xl'>{elem.title}</h1>
        <p className='text-zinc-500 text-sm font-semibold'>{elem.paragraph}</p>
      </div>
    </div>
  )
}

export default SecCards
