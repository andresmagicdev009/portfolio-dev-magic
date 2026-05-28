import React from 'react'
import { Html, useProgress } from '@react-three/drei'
import { HashLoader } from 'react-spinners'

const CanvasLoader = () => {
  const { progress } = useProgress()

  return (
    <Html center>
      <div className="flex flex-col items-center gap-3">
        <HashLoader color="#61DAFB" size={40} speedMultiplier={0.9} />
        <p style={{ color: '#61DAFB', fontSize: '13px', fontFamily: 'Mona Sans, sans-serif', whiteSpace: 'nowrap' }}>
          {Math.round(progress)}%
        </p>
      </div>
    </Html>
  )
}

export default CanvasLoader
