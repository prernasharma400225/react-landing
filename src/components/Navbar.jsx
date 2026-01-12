import React from 'react'
import { Link } from 'react-router-dom'
import { GoArrowUpRight } from "react-icons/go";

const Navbar = () => {
  return (
    <div className='flex  h-20 items-center justify-between p-5 border-b border-gray-300'>
        <div className='flex gap-5 font-semibold'>
            <Link to='/'>Services</Link>
            <Link to='/work'>Work</Link>
            <Link to='/about'>About</Link>
        </div>
        <div className='flex gap-2 items-center font-semibold'>
            <img className='h-10 rounded-full' src="clariteer_logo.jpg" alt="" />
            <h1>Astratto</h1>
        </div>
        <div className='flex font-semibold items-center gap-5'>
            <Link to = '/careers'>Careers</Link>
            <button className='flex items-center gap-1 border-2 py-1 px-2 rounded-full border-orange-200'><h3>Contact</h3><GoArrowUpRight className='text-purple-600 font-semibold'/></button>
        </div>
    </div>
  )
}

export default Navbar
