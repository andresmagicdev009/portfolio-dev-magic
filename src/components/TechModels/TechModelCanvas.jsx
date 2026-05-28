import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from '../CanvasLoader'

const TechModelCanvas = ({ children, cameraZ = 4 }) => (
  <Canvas
    frameloop="demand"
    dpr={[1, 1.5]}
    camera={{ position: [0, 0, cameraZ], fov: 45 }}
  >
    <ambientLight intensity={2} />
    <directionalLight position={[5, 5, 5]} intensity={2} />
    <pointLight position={[-5, 0, -5]} intensity={1} />
    <Suspense fallback={<CanvasLoader />}>
      {children}
    </Suspense>
    <OrbitControls enablePan={false} enableZoom={false} />
  </Canvas>
)

export default TechModelCanvas
