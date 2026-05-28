import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model as AstronautModel } from './Tenhun_falling_spaceman_fanart'
import CanvasLoader from '../CanvasLoader'

const FloatingAstronaut = () => {
  const ref = useRef()
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ref.current.position.y = Math.sin(t * 0.5) * 0.12
    ref.current.rotation.x = t * 0.12
    ref.current.rotation.z = Math.sin(t * 0.3) * 0.04
  })
  return (
    <group ref={ref}>
      <AstronautModel scale={10} position={[0, 2, 0]} rotation={[Math.PI, 0, -0.12]} />
    </group>
  )
}

const AstronautCanvas = () => (
  <Canvas
    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    dpr={window.devicePixelRatio}
    camera={{ position: [0, 0, 35], fov: 70 }}
    resize={{ scroll: false, debounce: { scroll: 0, resize: 0 } }}
  >
    <ambientLight intensity={2} />
    <directionalLight position={[5, 5, 5]} intensity={2} />
    <pointLight position={[-3, 2, -3]} intensity={0.8} color="#61DAFB" />
    <OrbitControls enablePan={false} enableZoom={false} />
    <Suspense fallback={<CanvasLoader />}>
      <FloatingAstronaut />
    </Suspense>
  </Canvas>
)

export default AstronautCanvas
