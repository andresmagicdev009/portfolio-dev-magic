import React from 'react'
import { useGLTF } from '@react-three/drei'
import Hero from './sections/Hero'

useGLTF.preload('/models/zennetz_90s_notebook.glb')
useGLTF.preload('/models/react_logo.glb')
useGLTF.preload('/models/js-logo.glb')
useGLTF.preload('/models/python.glb')
useGLTF.preload('/models/java.glb')
import StarsBackground from './components/StarsBackground'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <NavBar></NavBar>
      <StarsBackground />
      <Hero />
      <ShowcaseSection></ShowcaseSection>
      <LogoSection></LogoSection>
      <FeatureCards></FeatureCards>
      <ExperienceSection></ExperienceSection>
      <TechStack></TechStack>
      <Contact />
      <br></br>
      <Footer />
    </>
  )
}

export default App 