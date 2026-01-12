import React from 'react'

const Text = () => {
    return (
        <div className='flex flex-col items-center py-10'>
            <p className='text-gray-500 text-sm pb-5'>-- ABOUT ASTRATIO</p>
            <div className='flex flex-col text-4xl leading-3 items-center'>
                <h1 className='flex flex-row gap-2 items-center'>
                    <img className='h-14' src="679745d05635c170130b11a0_Risorsa 10.png" alt="" />
                    <span>Our</span>
                    <span className='text-gray-400'>visionary</span>
                    <span className='text-orange-500'>artisans</span>
                    <span>collaborate</span>
                </h1>

                <br />
                <h1 className='flex flex-row gap-2 items-center'>
                    <span className='text-pink-700'>seamlessly</span>
                    to craft
                    <img className='h-15 rounded-full' src="clariteer_logo.jpg" alt="" />
                    inspiring
                    <span className='text-gray-400'>experiences,</span>
                </h1>

                <br />

                <h1 className='flex flex-row gap-2'>
                    <span className='text-orange-500'>leaving</span>
                    lasting
                    <span className='text-gray-400'>imprints</span>
                    on
                    <span className='text-pink-700'>brands</span>
                </h1>

                <br />

                <h1 className='flex flex-row gap-2 items-center'>
                    and spaces.
                    <img className='h-15' src="star.webp" alt="" />
                </h1>
            </div>
        </div>
    )
}

export default Text
