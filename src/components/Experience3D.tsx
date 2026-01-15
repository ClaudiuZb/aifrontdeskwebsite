'use client'

import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {
  Float,
  Sphere,
  MeshDistortMaterial,
  Stars,
  Sparkles,
  Torus,
} from '@react-three/drei'
import * as THREE from 'three'

// Detect mobile for performance optimization
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

function useMousePosition() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Desktop mouse move
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }

    // Mobile touch move
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0]
        setMouse({
          x: (touch.clientX / window.innerWidth) * 2 - 1,
          y: -(touch.clientY / window.innerHeight) * 2 + 1,
        })
      }
    }

    // Mobile device orientation (gyroscope)
    const handleOrientation = (e: DeviceOrientationEvent) => {
      if (e.gamma !== null && e.beta !== null) {
        setMouse({
          x: Math.max(-1, Math.min(1, (e.gamma || 0) / 45)),
          y: Math.max(-1, Math.min(1, ((e.beta || 0) - 45) / 45)),
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('deviceorientation', handleOrientation, { passive: true })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('deviceorientation', handleOrientation)
    }
  }, [])

  return mouse
}

// Simplified AI Core sphere - optimized for performance
function AICore({ mouse, isMobile }: { mouse: { x: number; y: number }; isMobile: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (meshRef.current) {
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        mouse.y * 0.3 + t * 0.1,
        0.05
      )
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        mouse.x * 0.3 + t * 0.15,
        0.05
      )
    }

    if (glowRef.current) {
      glowRef.current.scale.setScalar(1.3 + Math.sin(t * 2) * 0.1)
      glowRef.current.rotation.z = t * 0.2
    }

    if (ringRef.current) {
      ringRef.current.rotation.x = t * 0.3
      ringRef.current.rotation.y = t * 0.2
    }

    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = -t * 0.2
      ring2Ref.current.rotation.z = t * 0.3
    }
  })

  const sphereSegments = isMobile ? 64 : 128

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group position={[isMobile ? 0 : 2, 0, 0]}>
        {/* Outer glow */}
        <Sphere ref={glowRef} args={[1.5, 32, 32]}>
          <meshBasicMaterial
            color="#00f5ff"
            transparent
            opacity={0.08}
            side={THREE.BackSide}
          />
        </Sphere>

        {/* Main distorted sphere */}
        <Sphere ref={meshRef} args={[1, sphereSegments, sphereSegments]}>
          <MeshDistortMaterial
            color="#a855f7"
            distort={isMobile ? 0.3 : 0.4}
            speed={isMobile ? 2 : 3}
            roughness={0}
            metalness={1}
          />
        </Sphere>

        {/* Inner sphere */}
        <Sphere args={[0.7, 32, 32]}>
          <meshBasicMaterial color="#00f5ff" transparent opacity={0.3} />
        </Sphere>

        {/* Rings */}
        <Torus ref={ringRef} args={[1.8, 0.02, 16, isMobile ? 50 : 100]}>
          <meshBasicMaterial color="#00f5ff" transparent opacity={0.6} />
        </Torus>

        <Torus ref={ring2Ref} args={[2.2, 0.015, 16, isMobile ? 50 : 100]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color="#f472b6" transparent opacity={0.4} />
        </Torus>

        {!isMobile && (
          <Torus args={[2.6, 0.01, 16, 100]} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
            <meshBasicMaterial color="#a855f7" transparent opacity={0.3} />
          </Torus>
        )}
      </group>
    </Float>
  )
}

// Optimized scene content
function SceneContent({ isMobile }: { isMobile: boolean }) {
  const mouse = useMousePosition()

  return (
    <>
      {/* Simplified lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#00f5ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color="#a855f7" />

      {/* Stars - reduced count on mobile */}
      <Stars
        radius={100}
        depth={50}
        count={isMobile ? 1000 : 3000}
        factor={4}
        saturation={0.5}
        fade
        speed={0.5}
      />

      {/* Sparkles - reduced on mobile */}
      {!isMobile && (
        <Sparkles
          count={100}
          scale={15}
          size={2}
          speed={0.3}
          color="#00f5ff"
          opacity={0.4}
        />
      )}

      {/* Main AI sphere */}
      <AICore mouse={mouse} isMobile={isMobile} />

      {/* Fog for depth */}
      <fog attach="fog" args={['#030014', 8, 30]} />
    </>
  )
}

export default function Experience3D() {
  const isMobile = useIsMobile()

  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={isMobile ? 1 : [1, 1.5]} // Lower DPR on mobile
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance',
          stencil: false,
          depth: true,
        }}
        style={{ background: 'transparent' }}
        frameloop="always"
      >
        <SceneContent isMobile={isMobile} />
      </Canvas>
    </div>
  )
}
