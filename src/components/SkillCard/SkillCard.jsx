import React from 'react'
import SkillModelIcon from './SkillModelIcon'

const SkillCard = ({ name, color, icon, desc, label, level, modelConfig }) => (
  <div className="tech-card bg-black-100 rounded-2xl p-7 flex flex-col gap-5 hover:scale-[1.02] transition-transform duration-300">
    <div className="flex items-center gap-4">
      <SkillModelIcon
        name={name}
        color={color}
        icon={icon}
        config={modelConfig[name]}
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-white font-semibold text-xl">{name}</h3>
        <span className="text-sm font-medium" style={{ color }}>{label}</span>
      </div>
    </div>
    <p className="text-white-50 text-base leading-relaxed">{desc}</p>
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <span className="text-xs text-white-50">Progreso</span>
        <span className="skill-percent text-xs font-bold tabular-nums" style={{ color }}>0%</span>
      </div>
      <div className="w-full h-2 rounded-full overflow-hidden bg-black-200">
        <div
          className="skill-bar-fill h-full rounded-full"
          data-level={level}
          style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}50`, width: '0%' }}
        />
      </div>
    </div>
  </div>
)

export default SkillCard
