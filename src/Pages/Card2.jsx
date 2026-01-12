import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Card2 = () => {
  return (
     <div className='h-96 w-1/3 border-2 bg-purple-600 text-white border-purple-700 p-5 rounded-bl-[50%] rounded-2xl relative'>
                <div className='flex justify-between items-center border-b pb-4 border-gray-400'>
                    <h1 className='text-3xl font-semibold'>2D/3D<br />Animation</h1>
                    
                </div>
                <p className='text-sm py-3.5 text-gray-100'>Turn imagination into really  with our <br /> stunning 2D/3D animations.</p>
                <div className='h-48 rounded-2xl  rounded-bl-[77%] w-full overflow-hidden'>
                    <img className='w-full h-full object-cover object-center' src="typography-axel-vincent-01.jpg" alt="" />
                </div>
                <GoArrowUpRight className='text-8xl text-purple-700 border-4 border-purple-700 bg-white rounded-full p-2 absolute bottom-2 -left-2' />
            </div>
  )
}

export default Card2
