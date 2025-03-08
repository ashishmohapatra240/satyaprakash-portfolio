'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Avatar } from './Avatar'
import { Suspense } from 'react'

export default function Love3D() {
  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{
          position: [0, 0, 2],
          fov: 45
        }}
      >
        <ambientLight intensity={2} />
        <directionalLight position={[10, 10, 5]} intensity={20} />
        <Suspense fallback={null}>
          <Avatar />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  )
} 