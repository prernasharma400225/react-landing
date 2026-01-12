import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Cards3 = () => {
  return (
    <div className='h-96 w-1/3 border-2  border-purple-700 p-5 rounded-2xl'>
                <div className='flex justify-between items-center border-b pb-4 border-gray-400'>
                    <h1 className='text-3xl font-semibold'>Visual<br />Identity</h1>
                    <GoArrowUpRight className='text-7xl bg-purple-500 text-white rounded-full p-2' />
                </div>
                <p className='text-sm py-3 text-gray-500'>Shape a unique brand persons througn\h our comprehensive visual identity solutions.</p>
                <div className='h-48 rounded-2xl w-full overflow-hidden'>
                    <img className='w-full h-full object-cover object-center' src="typography-axel-vincent-feature.jpg" alt="" />
                </div>
            </div>
  )
}

export default Cards3
