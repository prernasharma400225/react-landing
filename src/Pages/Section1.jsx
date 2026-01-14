import React from 'react'
import Cards from './Cards'
import Text from './Text'

const Section1 = () => {
  return (
   <div className='p-10'>
     <div className='px-20 py-5 rounded-4xl border-2 border-gray-100'>
      <div className='flex justify-between py-10'>
        <h1 className='text-5xl text-zinc-900'> Our Services</h1>
      <p className='text-sm text-gray-500'>discover a wide range of opporturities through <br /> a comprehensive range of qualified services.</p>
      </div>
        <Cards/>
        <Text/>
    </div>
   </div>
  )
}

export default Section1
