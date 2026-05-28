import React, { use } from 'react'
import TitleHeader from '../components/TitleHeader'
import { expCards } from '../constants/index.js'
import GlowCard from '../components/GlowCard.jsx'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// GSAP Scroll Animation


const ExperienceSection = () => {

    useGSAP(() => {
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%',
                    
                }
            })
        })
        gsap.to('.timeline', {
            scaleY: 0,
            transformOrigin: 'bottom bottom',
            ease: 'none',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '70% center',
                scrub: true,
            },
        })
    }, []);

    return (
        <section id="experience" className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
            <div className='w-full h-full md:px-20 px-5'></div>
            <TitleHeader
                title="Experiencia Profesional"
                sub="Mi trayectoria laboral"
            />
            <div className='mt-32 relative padding-x-lg'>
                <div className='relative z-50 xl:space-y-32 space-y-10'>
                    {expCards.map((card, index) => (
                        <div key={card.title} className="exp-card-wrapper">
                            <div className='xl:w-2/6'>
                                <GlowCard card={card} index={index}>
                                    <div className='flex items-center gap-3 mt-5'>
                                        <img src={card.logoPath} alt={card.title} className="size-10 object-contain" />
                                        <p className='font-semibold text-white-50'>{card.title}</p>
                                    </div>
                                </GlowCard>
                            </div>

                            <div className='xl:w-4/6'>
                                <div className='flex items-start'>
                                    <div className='timeline-wrapper'>
                                        <div className='timeline'/>
                                        <div className='gradient-line w-1 h-full'/>
                                    </div>
                                    <div className='expText: flex xl:gap-20 md: gap-10 gap-5 reslative z-20'>
                                        <div className='timeline-logo'>
                                            <img src={card.logoPath} alt="logo" className="w-full h-full object-contain p-2" />
                                        </div>
                                        <div>
                                            <h1 className='font-semibold text-3xl'>{card.title}</h1>
                                            <p className='my-5 text-white-50'>
                                              📆 {card.date}
                                            </p>
                                            <p className='text-[#839cb5] italic'>
                                                Responsabilidades
                                            </p>
                                            <ul className='list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50'>
                                                {card.responsibilities.map((resp) => (
                                                    <li key={resp} className='text-lg'>{resp}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection