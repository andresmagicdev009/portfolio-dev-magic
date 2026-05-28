import { OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef, Suspense } from 'react'
import { useMediaQuery } from 'react-responsive';
import { Planet } from './Planet';
import HeroLights from './HeroLights';
import CanvasLoader from '../CanvasLoader';

const RotatingPlanet = () => {
    const groupRef = useRef()
    useFrame(() => {
        if (groupRef.current) {
            groupRef.current.rotation.y += 0.003
        }
    })
    return (
        <group ref={groupRef}>
            <Planet />
        </group>
    )
}

const HeroExperience = () => {

    const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
    return (
    <Canvas camera={{position: [0, 0, 70], fov: 28}}>
        <HeroLights />
        <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxDistance={100}
            minDistance={30}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
            target={[0, -2, 0]}
        />

        <group
            scale={isMobile? 0.7: 1}
            position={[0, -3.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
            
        >


        </group>
        <Suspense fallback={<CanvasLoader />}>
          <RotatingPlanet />
        </Suspense>
    </Canvas>
  )
}

export default HeroExperience