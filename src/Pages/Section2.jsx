import React from 'react'
import SecCards from './SecCards'

const Section2 = () => {

   const cardData = [
    {
        img: 'typography-axel-vincent-10.jpg',
        btn:'2D Animation',
        title:'The Lighthouse ',
        paragraph:'Adding a new dimension to projects through thoughtfully designed 2D animations.'
    },
    {
        img: 'typography-axel-vincent-02.jpg',
        btn:'Motion Graphices',
        title:'Navigating Possibilities ',
        paragraph:'Motion grahices breathe life the project, blending direction and creativity.'
    },
    {
        img: 'typography-axel-vincent-06.jpg',
        btn:'Visual identity',
        title:'Snowscape Haven ',
        paragraph:'Crafting a visual identity that mirrors the serenify and ailure of a winter sanctuary.'
    },
    {
        img: 'typography-axel-vincent-16.jpg',
        btn:'3D Animation',
        title:'Nocturnal Symphony',
        paragraph:'Through 3D artistry, we orchestrate an animated ode to the evening, a dance of shsdowa and dreams.'
    },
  ]

  return (
    <div className='px-15 py-5'>
      <div className='flex justify-between px-15 py-10'>
        <h1 className='text-5xl text-zinc-900'>Recent Projects</h1>
        <p className='text-sm text-gray-500'>Step into the world of our most recent projects, a showcase <br /> of our unwavering commitment to progressive design</p>

      </div>
      <div className='flex flex-wrap items-center justify-center gap-x-45 gap-y-10'>
        {cardData.map((elem,id)=>{
          return (
           <SecCards key={id} elem={elem}/>
          )
        })}
      </div>
    </div>
  );
}

export default Section2
