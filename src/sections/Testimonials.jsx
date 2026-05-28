import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { testimonials } from '../constants'
import GlowCard from '../components/GlowCard'

const Testimonials = () => {
  return (
    <section id='testimonials' className='flex-center section-padding'> 
       <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader title="Que dicen las personas sobre mi?"
            sub="Feedback📬"
        >

        </TitleHeader>

        <div className='lg:columns-3 md:columns-2 columns-1 mt-16'>
            {testimonials.map(({ imgPath, name, mentions, review }, index) => (
                <GlowCard key={name} card={{ review }} index={index}>
                    <div className='flex items-center mt-5'>
                        <div>
                            <img src={imgPath} alt={name} />
                        </div>
                        <div className='p-3 flex flex-col'>
                            <p className='font-bold'>{name}</p>
                            <p className='text-white-50 text-sm'>{mentions}</p>
                        </div>
                    </div>
                </GlowCard>
            ))}
        </div>
       </div> 
    </section>
  )
}

export default Testimonials