import React from 'react'

const LandingBG = () => {
  return (
    <div>
      <div className='absolute -z-10  p-10'>
      <div className=' flex items-start justify-between px-15'>
        <div className='h-72 w-72'><img className='h-full w-full' src="rocket.webp" alt="" /></div>
        <p className='text-gray-600 text-sm'>Igniting the spark of Inspiration</p>
        <div className='flex flex-col items-end gap-2'>
            <h2 className='bg-purple-600 px-3 py-1 text-amber-100 rounded-full'>via dlla Creativita, 23</h2>
            <h2 className='bg-purple-600 px-3 py-1 text-amber-100 rounded-full'>20121 Milano</h2>
        </div>
        
      </div>
      <div className='flex gap-100 px-20'>
        <div>
            <img className='w-52' src="line.jpg" alt="" />
            <div className='flex items-center gap-0'>
                <button className='h-10 border-2 border-none rounded-full px-4 text-white font-semibold text-xl py-0 bg-amber-300'> Create Magic</button>
                <img className='h-20' src="light.png" alt="" />
            </div>
        </div>
        <div className='h-64 w-64 flex '>
            <img className='h-full w-[80%]' src="y-line.svg" alt="" />
            <img className='h-full w-full' src="home.webp" alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default LandingBG
