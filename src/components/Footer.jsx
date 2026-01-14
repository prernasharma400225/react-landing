import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='m-10 border-2 border-zinc-400 rounded-[45px]'>
            <div className='text-center relative py-2  px-10 border-zinc-500'>
                <img className='h-14 absolute top-22 left-52' src="star.webp" alt="" />
                <img className='h-14 absolute bottom-28 border-2 border-purple-600 rounded-full right-72' src="200w.gif" alt="" />
                <div className='p-10 border-b-2 border-zinc-400'>
                    <p className='text-purple-400 font-semibold'>Open the door to forging your bran's story</p>
                    <h1 className='text-[40px] leading-12 my-6 text-zinc-800'>Embark on a Transformative Journey <br /> Shaping <span className="bg-yellow-400 text-white px-3 py-1 font-semibold inline-block rounded-tl-xl rounded-tr-3xl rounded-br-xl rounded-bl-3xl">Your Brand's Destiny</span> Through Our <br /> Dedicated Partnership</h1>
                    <p className='text-xs text-gray-400 font-semibold'>Join us on a transformative journey to shape your brand's destiny through our <br /> dedicated partnership, crafting a narrative that resonates</p>
                </div>
            </div>

            <div className='flex items-center py-4 justify-between px-10 font-semibold text-xs text-zinc-600'>
                <p>via della Creativita. 23,20121 Milano</p>
                <div className='flex gap-2 text-lg'>
                    <FaXTwitter />
                    <FaLinkedinIn />
                    <FaInstagram />
                </div>
                <div className='flex gap-3'> 
                    <p>Privacy & Cookie Policy</p>
                    <p>Astratto © 2023</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
