import React from 'react'

const TitleHeader = ({ title, sub, icon }) => {
  return (
    <div className='flex flex-col items-center gap-5'>
      <div className='hero-badge'>
        <p>{sub}</p>
      </div>
      <div className='flex items-center gap-3 font-semibold md:text-5xl text-3xl text-center'>
        {title}
        {icon && <img src={icon} alt="" className="size-16 md:size-20 object-contain" />}
      </div>
    </div>
  )
}

export default TitleHeader