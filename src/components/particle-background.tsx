import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

const LEVELS = 14
const POINTS_PER_LEVEL = 200
const BASE_RADIUS = 1.5
const RADIUS_STEP = 0.9

function ContourLines() {
  const groupRef = useRef<THREE.Group>(null)

  const lineObjects = useMemo(() => {
    return Array.from({ length: LEVELS }, (_, l) => {
      const positions = new Float32Array(POINTS_PER_LEVEL * 3)
      const alpha = 0.12 + (1 - l / LEVELS) * 0.18
      const hue = 0.58 + l * 0.012

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3),
      )
      const material = new THREE.LineBasicMaterial({
        color: new THREE.Color().setHSL(hue, 0.35, 0.45),
        transparent: true,
        opacity: alpha,
        depthWrite: false,
        blending: THREE.AdditiveBlending,
      })
      return new THREE.LineLoop(geometry, material)
    })
  }, [])

  useFrame((state) => {
    if (!groupRef.current) return
    const time = state.clock.getElapsedTime()

    groupRef.current.rotation.y = time * 0.03

    groupRef.current.children.forEach((child, l) => {
      if (!(child instanceof THREE.LineLoop)) return
      const positions = child.geometry.attributes.position
      const radius = BASE_RADIUS + l * RADIUS_STEP

      for (let i = 0; i < POINTS_PER_LEVEL; i++) {
        const angle = (i / POINTS_PER_LEVEL) * Math.PI * 2
        const noiseOffset =
          Math.sin(angle * 3 + l * 0.8 + time * 0.3) * 0.4 +
          Math.cos(angle * 5 - l * 0.5 + time * 0.2) * 0.2 +
          Math.sin(angle * 7 + l * 1.2 - time * 0.15) * 0.15
        const r = radius + noiseOffset

        positions.setX(i, Math.cos(angle) * r)
        positions.setZ(i, Math.sin(angle) * r)
      }

      positions.needsUpdate = true
    })
  })

  return (
    <group ref={groupRef} rotation={[-Math.PI / 3, 0, 0]} position={[0, 1, 0]}>
      {lineObjects.map((obj, i) => (
        <primitive key={i} object={obj} />
      ))}
    </group>
  )
}

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none w-full h-full">
      <Canvas
        camera={{ position: [0, 4, 14], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <ContourLines />
      </Canvas>
    </div>
  )
}
