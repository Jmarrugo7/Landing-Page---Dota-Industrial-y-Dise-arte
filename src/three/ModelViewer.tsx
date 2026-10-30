import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import type { ProductKind } from './builders'
import { loadModel, releaseModel, type LoadedModel } from './loadModel'
import { Studio } from './StudioScene'

function Model({ kind, reduced, rot }: { kind: ProductKind; reduced: boolean; rot: React.RefObject<{ y: number; x: number; drag: boolean }> }) {
  const g = useRef<THREE.Group>(null!)
  const [model, setModel] = useState<LoadedModel | null>(null)
  useEffect(() => {
    let alive = true
    let m: LoadedModel | null = null
    loadModel(kind).then((r) => { if (alive) { m = r; setModel(r) } else releaseModel(r) })
    return () => { alive = false; if (m) releaseModel(m) }
  }, [kind])
  useFrame((_, dt) => {
    const r = rot.current
    if (!reduced && !r.drag) r.y += dt * 0.5
    const pose = model?.object.userData.pose ?? { rx: 0, ry: 0 }
    g.current.rotation.y = THREE.MathUtils.lerp(g.current.rotation.y, pose.ry + r.y, 0.18)
    g.current.rotation.x = THREE.MathUtils.lerp(g.current.rotation.x, pose.rx + r.x, 0.18)
  })
  return <group ref={g}>{model && <primitive object={model.object} />}</group>
}

/** Visor 3D rotable: arrastrar con puntero, o flechas del teclado. */
export default function ModelViewer({ kind, label, reduced }: { kind: ProductKind; label: string; reduced: boolean }) {
  const rot = useRef({ y: 0, x: 0, drag: false })
  const last = useRef({ x: 0, y: 0 })
  return (
    <div
      role="group"
      tabIndex={0}
      aria-label={`Visor 3D de ${label}. Usa las flechas del teclado o arrastra para girar.`}
      className="relative h-full w-full touch-none select-none rounded-[inherit] outline-offset-[-3px]"
      style={{ cursor: 'grab' }}
      onPointerDown={(e) => { rot.current.drag = true; last.current = { x: e.clientX, y: e.clientY }; e.currentTarget.setPointerCapture(e.pointerId) }}
      onPointerMove={(e) => {
        if (!rot.current.drag) return
        rot.current.y += (e.clientX - last.current.x) * 0.012
        rot.current.x = THREE.MathUtils.clamp(rot.current.x + (e.clientY - last.current.y) * 0.008, -0.8, 0.8)
        last.current = { x: e.clientX, y: e.clientY }
      }}
      onPointerUp={() => { rot.current.drag = false }}
      onPointerCancel={() => { rot.current.drag = false }}
      onKeyDown={(e) => {
        const k = e.key
        if (k === 'ArrowLeft') rot.current.y -= 0.35
        else if (k === 'ArrowRight') rot.current.y += 0.35
        else if (k === 'ArrowUp') rot.current.x = Math.max(-0.8, rot.current.x - 0.2)
        else if (k === 'ArrowDown') rot.current.x = Math.min(0.8, rot.current.x + 0.2)
        else return
        e.preventDefault()
      }}
    >
      <Canvas aria-hidden="true" dpr={[1, 1.5]} camera={{ position: [0, 0.15, 7.8], fov: 30 }} gl={{ antialias: true, alpha: true }} style={{ background: 'transparent' }}>
        <Studio />
        <Model kind={kind} reduced={reduced} rot={rot} />
      </Canvas>
    </div>
  )
}
