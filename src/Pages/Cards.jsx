import React from 'react'
import Card1 from './Card1';
import Card2 from './Card2';
import Cards3 from './Cards3';

const Cards = () => {
  return (
    <div className='w-full flex items-center gap-10'>
        <Card1/>
        <Card2/>
        <Cards3/>
    </div>
  )
}

export default Cards
