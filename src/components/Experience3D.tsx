'use client'

import { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import {
  Float,
  Sphere,
  MeshDistortMaterial,
  Stars,
  Environment,
  Sparkles,
  useScroll,
  ScrollControls,
  MeshTransmissionMaterial,
  Torus,
  Box,
  Icosahedron,
  Line,
} from '@react-three/drei'
import * as THREE from 'three'
import { useSpring } from '@react-spring/three'

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
        // gamma: left-right tilt (-90 to 90)
        // beta: front-back tilt (-180 to 180)
        setMouse({
          x: Math.max(-1, Math.min(1, (e.gamma || 0) / 45)),
          y: Math.max(-1, Math.min(1, ((e.beta || 0) - 45) / 45)),
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('deviceorientation', handleOrientation)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('deviceorientation', handleOrientation)
    }
  }, [])

  return mouse
}

function AICore({ mouse }: { mouse: { x: number; y: number } }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const glowRef = useRef<THREE.Mesh>(null)
  const ringRef = useRef<THREE.Mesh>(null)
  const ring2Ref = useRef<THREE.Mesh>(null)
  const scroll = useScroll()

  useSpring({
    scale: 1,
    config: { mass: 1, tension: 280, friction: 60 },
  })

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const scrollOffset = scroll.offset

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

      const targetScale = 1 - scrollOffset * 0.3
      meshRef.current.scale.setScalar(
        THREE.MathUtils.lerp(meshRef.current.scale.x, targetScale, 0.1)
      )

      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        scrollOffset * 3,
        0.1
      )
      meshRef.current.position.z = THREE.MathUtils.lerp(
        meshRef.current.position.z,
        -scrollOffset * 8,
        0.1
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

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      <group>
        <Sphere ref={glowRef} args={[1.5, 32, 32]}>
          <meshBasicMaterial
            color="#00f5ff"
            transparent
            opacity={0.08}
            side={THREE.BackSide}
          />
        </Sphere>

        <Sphere ref={meshRef} args={[1, 128, 128]}>
          <MeshDistortMaterial
            color="#a855f7"
            distort={0.4}
            speed={3}
            roughness={0}
            metalness={1}
            envMapIntensity={2}
          />
        </Sphere>

        <Sphere args={[0.7, 64, 64]}>
          <meshBasicMaterial color="#00f5ff" transparent opacity={0.3} />
        </Sphere>

        <Torus ref={ringRef} args={[1.8, 0.02, 16, 100]}>
          <meshBasicMaterial color="#00f5ff" transparent opacity={0.6} />
        </Torus>

        <Torus ref={ring2Ref} args={[2.2, 0.015, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color="#f472b6" transparent opacity={0.4} />
        </Torus>

        <Torus args={[2.6, 0.01, 16, 100]} rotation={[Math.PI / 2, Math.PI / 4, 0]}>
          <meshBasicMaterial color="#a855f7" transparent opacity={0.3} />
        </Torus>
      </group>
    </Float>
  )
}

type CubeData = {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  color: string
  speed: number
}

function DataCubes({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null)
  useScroll()

  const cubes = useMemo(() => {
    const arr: CubeData[] = []
    const colors = ['#00f5ff', '#a855f7', '#f472b6', '#3b82f6']
    for (let i = 0; i < 20; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15 - 5,
        ],
        rotation: [
          Math.random() * Math.PI,
          Math.random() * Math.PI,
          Math.random() * Math.PI,
        ],
        scale: Math.random() * 0.3 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 0.5 + 0.5,
      })
    }
    return arr
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime

    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        mouse.x * 0.2,
        0.02
      )
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        mouse.y * 0.1,
        0.02
      )

      groupRef.current.children.forEach((cube, i) => {
        cube.rotation.x += cubes[i].speed * 0.01
        cube.rotation.y += cubes[i].speed * 0.015
        cube.position.y += Math.sin(t + i) * 0.002
      })
    }
  })

  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => (
        <Box
          key={i}
          args={[cube.scale, cube.scale, cube.scale]}
          position={cube.position}
          rotation={cube.rotation}
        >
          <meshStandardMaterial
            color={cube.color}
            metalness={0.9}
            roughness={0.1}
            emissive={cube.color}
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </Box>
      ))}
    </group>
  )
}

function ParticleField({ mouse }: { mouse: { x: number; y: number } }) {
  const particlesRef = useRef<THREE.Points>(null)
  const scroll = useScroll()
  const count = 2000

  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    const colorPalette = [
      new THREE.Color('#00f5ff'),
      new THREE.Color('#a855f7'),
      new THREE.Color('#f472b6'),
    ]

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      const radius = 3 + Math.random() * 15
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)

      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)

      const color = colorPalette[Math.floor(Math.random() * colorPalette.length)]
      colors[i3] = color.r
      colors[i3 + 1] = color.g
      colors[i3 + 2] = color.b

      sizes[i] = Math.random() * 3 + 1
    }

    return [positions, colors, sizes]
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const scrollOffset = scroll.offset

    if (particlesRef.current) {
      particlesRef.current.rotation.y = t * 0.03 + mouse.x * 0.1
      particlesRef.current.rotation.x = Math.sin(t * 0.05) * 0.1 + mouse.y * 0.05

      const scale = 1 + scrollOffset * 1.5
      particlesRef.current.scale.setScalar(scale)
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.7}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

type NeuralNode = {
  position: [number, number, number]
  connections: number[]
}

type LineSegment = [[number, number, number], [number, number, number]]

function NeuralNetwork({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null)
  const scroll = useScroll()

  const nodes = useMemo(() => {
    const arr: NeuralNode[] = []
    for (let i = 0; i < 30; i++) {
      arr.push({
        position: [
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8 - 3,
        ],
        connections: [],
      })
    }

    arr.forEach((node) => {
      const nearestCount = Math.floor(Math.random() * 3) + 1
      const distances = arr.map((other, j) => ({
        index: j,
        distance: Math.sqrt(
          Math.pow(node.position[0] - other.position[0], 2) +
            Math.pow(node.position[1] - other.position[1], 2) +
            Math.pow(node.position[2] - other.position[2], 2)
        ),
      }))
      distances.sort((a, b) => a.distance - b.distance)
      node.connections = distances.slice(1, nearestCount + 1).map((d) => d.index)
    })

    return arr
  }, [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const scrollOffset = scroll.offset

    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.02 + mouse.x * 0.1
      groupRef.current.rotation.x = mouse.y * 0.05

      const opacity = Math.min(scrollOffset * 3, 0.6)
      groupRef.current.children.forEach((child) => {
        if (child instanceof THREE.Mesh || child instanceof THREE.Line) {
          if (
            child.material instanceof THREE.MeshBasicMaterial ||
            child.material instanceof THREE.LineBasicMaterial
          ) {
            child.material.opacity = opacity
          }
        }
      })
    }
  })

  const lineSegments = useMemo(() => {
    const segs: LineSegment[] = []
    nodes.forEach((node) => {
      node.connections.forEach((j) => {
        segs.push([node.position, nodes[j].position])
      })
    })
    return segs
  }, [nodes])

  return (
    <group ref={groupRef}>
      {nodes.map((node, i) => (
        <mesh key={i} position={node.position}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color="#00f5ff" transparent opacity={0.6} />
        </mesh>
      ))}
      {lineSegments.map((seg, i) => (
        <Line
          key={`line-${i}`}
          points={seg}
          color="#a855f7"
          transparent
          opacity={0.3}
        />
      ))}
    </group>
  )
}

function ServiceIcons({ mouse }: { mouse: { x: number; y: number } }) {
  const groupRef = useRef<THREE.Group>(null)
  const scroll = useScroll()

  const icons = useMemo(
    () => [
      { position: [-5, 2, -3] as [number, number, number], color: '#00f5ff' },
      { position: [5, 1, -2] as [number, number, number], color: '#a855f7' },
      { position: [-4, -2, -4] as [number, number, number], color: '#f472b6' },
      { position: [4, -1, -3] as [number, number, number], color: '#3b82f6' },
    ],
    []
  )

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const scrollOffset = scroll.offset

    if (groupRef.current) {
      const visible = scrollOffset > 0.15 && scrollOffset < 0.5
      groupRef.current.visible = visible

      groupRef.current.rotation.y = mouse.x * 0.1
      groupRef.current.rotation.x = mouse.y * 0.05

      groupRef.current.children.forEach((icon, i) => {
        icon.rotation.x = t * 0.5 + i
        icon.rotation.y = t * 0.3 + i * 0.5
        icon.position.y = icons[i].position[1] + Math.sin(t + i) * 0.3
      })
    }
  })

  return (
    <group ref={groupRef}>
      {icons.map((icon, i) => (
        <Float key={i} speed={2 + i * 0.3} floatIntensity={0.5}>
          <Icosahedron args={[0.4]} position={icon.position}>
            <MeshTransmissionMaterial
              color={icon.color}
              thickness={0.5}
              roughness={0}
              transmission={1}
              ior={1.5}
              chromaticAberration={0.06}
            />
          </Icosahedron>
        </Float>
      ))}
    </group>
  )
}

function CameraController({ mouse }: { mouse: { x: number; y: number } }) {
  const { camera } = useThree()
  const scroll = useScroll()

  useFrame(() => {
    const scrollOffset = scroll.offset

    const targetZ = 8 - scrollOffset * 4
    const targetY = scrollOffset * 2
    const targetX = mouse.x * 0.5

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.02)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.02)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.02)

    camera.lookAt(mouse.x * 0.3, mouse.y * 0.3, 0)
  })

  return null
}

function SceneContent() {
  const mouse = useMousePosition()

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00f5ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      <pointLight position={[0, 10, -10]} intensity={0.5} color="#f472b6" />
      <spotLight
        position={[0, 15, 0]}
        angle={0.5}
        penumbra={1}
        intensity={0.8}
        color="#ffffff"
      />

      <Environment preset="night" />

      <Stars
        radius={100}
        depth={100}
        count={5000}
        factor={4}
        saturation={0.5}
        fade
        speed={1}
      />

      <Sparkles count={200} scale={20} size={3} speed={0.5} color="#00f5ff" opacity={0.5} />

      <AICore mouse={mouse} />
      <ParticleField mouse={mouse} />
      <DataCubes mouse={mouse} />
      <NeuralNetwork mouse={mouse} />
      <ServiceIcons mouse={mouse} />

      <CameraController mouse={mouse} />

      <fog attach="fog" args={['#030014', 8, 40]} />
    </>
  )
}

export default function Experience3D() {
  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        style={{ background: 'transparent' }}
      >
        <ScrollControls pages={5} damping={0.25}>
          <SceneContent />
        </ScrollControls>
      </Canvas>
    </div>
  )
}
