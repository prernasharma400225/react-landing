import React from 'react'
import SecCards from './SecCards'

const Section2 = () => {
  return (
    <div className='p-10'>
      <div className='flex justify-between py-10'>
        <h1 className='text-5xl text-zinc-900'>Recent Projects</h1>
        <p className='text-sm text-gray-500'>Step into the world of our most recent projects, a showcase <br /> of our unwavering commitment to progressive design</p>

      </div>
      <SecCards/>
    </div>
  )
}

export default Section2
