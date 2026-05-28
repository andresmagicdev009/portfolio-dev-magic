import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model as NotebookModel } from './Zennetz_90s_notebook'
import CanvasLoader from '../CanvasLoader'

const FloatingNotebook = () => {
  const ref = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    ref.current.position.y = Math.sin(t * 0.6) * 0.08
    ref.current.rotation.y = Math.sin(t * 0.3) * 0.25
    ref.current.rotation.z = Math.sin(t * 0.4) * 0.03
  })

  return (
    <group ref={ref}>
      <NotebookModel scale={3} position={[0, 0, 0]} />
    </group>
  )
}

const NotebookCanvas = () => (
  <Canvas style={{ width: '100%', height: '100%' }} dpr={[1, 1.5]} camera={{ position: [0, 0.6, 6], fov: 50 }}>
    <ambientLight intensity={1.5} />
    <directionalLight position={[5, 5, 5]} intensity={2} />
    <pointLight position={[-3, 2, -3]} intensity={0.8} color="#61DAFB" />
    <Suspense fallback={<CanvasLoader />}>
      <FloatingNotebook />
    </Suspense>
    <OrbitControls enablePan={false} enableZoom={false} />
  </Canvas>
)

export default NotebookCanvas
