import React, { useRef } from 'react'
import TitleHeader from '../components/TitleHeader'
import SkillCard from '../components/SkillCard/SkillCard'
import useSkillAnimations from '../hooks/useSkillAnimations'
import { techSkills } from '../constants'
import { modelConfig } from '../config/techModels'
import AstronautCanvas from '../components/TechModels/AstronautCanvas'

const TechStack = () => {
  const sectionRef = useRef(null)
  useSkillAnimations(sectionRef)

  return (
    <section id="skills" ref={sectionRef} className="w-full md:mt-40 mt-20 section-padding xl:px-0">
      <div className="padding-x-lg grid xl:grid-cols-2 gap-16 items-center">

        {/* LEFT — cards */}
        <div className="left-col flex flex-col gap-10">
          <TitleHeader
            title="Mi Stack Tecnológico"
            sub="Progreso de Aprendizaje"
            icon="/images/Beta_Software.webp"
          />
          <div className="flex flex-col gap-4">
            {techSkills.map((skill) => (
              <SkillCard key={skill.name} {...skill} modelConfig={modelConfig} />
            ))}
          </div>
        </div>

        {/* RIGHT — astronaut 3D */}
        <div className="right-col w-full h-200 mt-5 relative">
          <AstronautCanvas />
        </div>

      </div>
    </section>
  )
}

export default TechStack
