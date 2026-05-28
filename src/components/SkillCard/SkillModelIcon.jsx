import React from 'react'
import TechModelCanvas from '../TechModels/TechModelCanvas'

const SkillModelIcon = ({ name, color, icon, config }) => {
  if (!config) {
    return (
      <span
        className="size-20 rounded-xl flex items-center justify-center font-bold text-2xl shrink-0"
        style={{ backgroundColor: `${color}18`, color, border: `1px solid ${color}35` }}
      >
        {icon}
      </span>
    )
  }

  if (config.imgPath) {
    return (
      <div className="size-20 rounded-xl overflow-hidden shrink-0 flex items-center justify-center"
        style={{ backgroundColor: `${color}18` }}>
        <img src={config.imgPath} alt={name} className="size-14 object-contain" />
      </div>
    )
  }

  const { Component, cameraZ, scale, position = [0, 0, 0] } = config
  return (
    <div
      className="size-20 rounded-xl overflow-hidden shrink-0"
    >
      <TechModelCanvas cameraZ={cameraZ}>
        <Component scale={scale} position={position} />
      </TechModelCanvas>
    </div>
  )
}

export default SkillModelIcon
