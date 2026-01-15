'use client'

import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Sphere, MeshDistortMaterial, Stars, Environment, PerformanceMonitor } from '@react-three/drei'
import * as THREE from 'three'

// Animated Sphere with morphing effect
function MorphingSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  )
}

// Glowing core
function GlowingCore() {
  const coreRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2) * 0.1)
    }
  })

  return (
    <Sphere ref={coreRef} args={[0.8, 32, 32]} position={[0, 0, 0]}>
      <meshBasicMaterial color="#00f0ff" transparent opacity={0.6} />
    </Sphere>
  )
}

// Particle System
function ParticleSystem() {
  const particlesRef = useRef<THREE.Points>(null)
  const count = 2000

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    const colorOptions = [
      new THREE.Color('#00f0ff'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#ec4899'),
      new THREE.Color('#6366f1'),
    ]

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = 3 + Math.random() * 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)

      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b
    }

    return [positions, colors]
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Orbiting Rings
function OrbitingRings() {
  const ring1Ref = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const ring3Ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    const t = state.clock.elapsedTime
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = t * 0.3
      ring1Ref.current.rotation.z = t * 0.2
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * 0.4
      ring2Ref.current.rotation.x = Math.PI / 4
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = t * 0.2
      ring3Ref.current.rotation.y = t * 0.3
    }
  })

  return (
    <>
      <mesh ref={ring1Ref}>
        <torusGeometry args={[2.2, 0.02, 16, 100]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.5} />
      </mesh>
      <mesh ref={ring2Ref}>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.4} />
      </mesh>
      <mesh ref={ring3Ref}>
        <torusGeometry args={[2.8, 0.01, 16, 100]} />
        <meshBasicMaterial color="#ec4899" transparent opacity={0.3} />
      </mesh>
    </>
  )
}

// Floating Data Points
function DataPoints() {
  const groupRef = useRef<THREE.Group>(null)
  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2
      const radius = 3.5
      pts.push({
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle * 2) * 0.5,
          Math.sin(angle) * radius
        ] as [number, number, number],
        scale: 0.08 + Math.random() * 0.05
      })
    }
    return pts
  }, [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {points.map((point, i) => (
        <Float key={i} speed={2 + i * 0.5} floatIntensity={0.5}>
          <mesh position={point.position}>
            <octahedronGeometry args={[point.scale, 0]} />
            <meshBasicMaterial
              color={i % 2 === 0 ? '#00f0ff' : '#a855f7'}
              wireframe
            />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

// Energy Beams
function EnergyBeams() {
  const beamsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (beamsRef.current) {
      beamsRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group ref={beamsRef}>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} rotation={[0, (i * Math.PI) / 2, Math.PI / 6]}>
          <cylinderGeometry args={[0.005, 0.005, 6, 8]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? '#00f0ff' : '#a855f7'}
            transparent
            opacity={0.3}
          />
        </mesh>
      ))}
    </group>
  )
}

// Loading fallback
function Loader() {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshBasicMaterial color="#6366f1" wireframe />
    </mesh>
  )
}

// Main 3D Scene Component
export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <color attach="background" args={['#0a0a0f']} />

        <Suspense fallback={<Loader />}>
          {/* Ambient lighting */}
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.5} color="#00f0ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.3} color="#a855f7" />
          <spotLight
            position={[0, 5, 0]}
            angle={0.5}
            penumbra={1}
            intensity={0.5}
            color="#ec4899"
          />

          {/* Stars background */}
          <Stars
            radius={100}
            depth={50}
            count={3000}
            factor={4}
            saturation={0}
            fade
            speed={1}
          />

          {/* Main morphing sphere */}
          <MorphingSphere />

          {/* Glowing core */}
          <GlowingCore />

          {/* Orbiting rings */}
          <OrbitingRings />

          {/* Particle system */}
          <ParticleSystem />

          {/* Data points */}
          <DataPoints />

          {/* Energy beams */}
          <EnergyBeams />

          {/* Post-processing fog */}
          <fog attach="fog" args={['#0a0a0f', 5, 25]} />
        </Suspense>
      </Canvas>
    </div>
  )
}
