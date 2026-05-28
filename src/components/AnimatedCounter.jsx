import React from 'react'
import { counterItems } from '../constants'
import CountUpRaw from 'react-countup'
const CountUp = CountUpRaw?.default ?? CountUpRaw

const AnimatedCounter = () => {
    return (
        <div id="counter" className='padding-x-lg xl:mt-0 mt-32'>
            <div className='mx-auto grid-4-cols'>
                {counterItems.map((item) => (
                    <div key={item.label} className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>
                        <div className='counter-number text-white text-5xl font-bold mb-2'>
                            <span className='text-white xl:text-6xl md:text-4xl text-3xl font-bold'>
                                <CountUp suffix={item.suffix} end={item.value} duration={2} />
                            </span>
                            <p className='text-white-50 text-sm md:text-base text-center'>{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AnimatedCounter