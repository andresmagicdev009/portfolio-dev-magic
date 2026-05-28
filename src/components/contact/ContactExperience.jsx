import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Model as MailboxModel } from './Mailbox'
import CanvasLoader from '../CanvasLoader'

const ContactExperience = () => (
  <Canvas
    style={{ width: '100%', height: '100%' }}
    dpr={window.devicePixelRatio}
    camera={{ position: [0, 3, 8], fov: 45 }}
  >
    <ambientLight intensity={1.5} />
    <directionalLight position={[5, 5, 5]} intensity={2} />
    <pointLight position={[-3, 2, 2]} intensity={1.5} color="#61DAFB" />
    <OrbitControls
      enablePan={false}
      enableZoom={false}
      autoRotate
      autoRotateSpeed={0.5}
      minPolarAngle={Math.PI / 3}
      maxPolarAngle={Math.PI / 3}
    />
    <Suspense fallback={<CanvasLoader />}>
      <MailboxModel scale={1} position={[0, -1.5, 0]} />
    </Suspense>
  </Canvas>
)

export default ContactExperience
