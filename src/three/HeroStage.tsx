import { useEffect, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerformanceMonitor } from '@react-three/drei'
import * as THREE from 'three'
import type { ProductKind } from './builders'
import { loadModel, releaseModel, type LoadedModel } from './loadModel'
import { Studio } from './StudioScene'

const damp = (a: number, b: number, lambda: number, dt: number) => THREE.MathUtils.lerp(a, b, 1 - Math.exp(-lambda * dt))

function Stage({ kind, reduced, onReady }: { kind: ProductKind; reduced: boolean; onReady: () => void }) {
  const holder = useRef<THREE.Group>(null!)
  const current = useRef<{ kind: ProductKind; model: LoadedModel } | null>(null)
  const want = useRef(kind)
  const loaded = useRef(new Map<ProductKind, LoadedModel>())
  const scale = useRef(0)
  const ptr = useRef({ x: 0, y: 0, tx: 0, ty: 0 })
  const readyOnce = useRef(false)

  useEffect(() => {
    want.current = kind
    let alive = true
    loadModel(kind).then((m) => {
      if (!alive) return releaseModel(m)
      loaded.current.set(kind, m)
    })
    return () => { alive = false }
  }, [kind])

  useEffect(() => {
    if (reduced) return
    const move = (e: PointerEvent) => {
      if (e.pointerType === 'touch') return
      ptr.current.tx = (e.clientX / window.innerWidth) * 2 - 1
      ptr.current.ty = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', move, { passive: true })
    return () => window.removeEventListener('pointermove', move)
  }, [reduced])

  useEffect(() => {
    const map = loaded.current
    const holderObj = holder.current
    return () => {
      if (current.current) holderObj.remove(current.current.model.object)
      map.forEach(releaseModel)
      map.clear()
      current.current = null
    }
  }, [])

  useFrame((state, dtRaw) => {
    const dt = Math.min(dtRaw, 0.1)
    const h = holder.current
    const ready = loaded.current.get(want.current)

    const mount = (m: LoadedModel, k: ProductKind) => {
      if (current.current) h.remove(current.current.model.object)
      h.add(m.object)
      current.current = { kind: k, model: m }
      if (!readyOnce.current) { readyOnce.current = true; onReady() }
    }

    if (!current.current) {
      if (ready) mount(ready, want.current)
    } else if (current.current.kind !== want.current) {
      scale.current = damp(scale.current, 0, reduced ? 40 : 9, dt)
      if (scale.current < 0.04 && ready) mount(ready, want.current)
    } else {
      scale.current = damp(scale.current, 1, reduced ? 40 : 5, dt)
    }

    const s = Math.max(scale.current, 0.0001)
    const pose = current.current?.model.object.userData.pose ?? { rx: 0, ry: 0 }
    const t = state.clock.elapsedTime
    ptr.current.x = damp(ptr.current.x, ptr.current.tx, 3, dt)
    ptr.current.y = damp(ptr.current.y, ptr.current.ty, 3, dt)
    const { width: vw, height: vh } = state.viewport
    const fit = vw / vh > 1.4 ? 1 : Math.min(1, (0.84 * Math.min(vw, vh)) / 2.8)
    h.scale.setScalar(s * fit)
    h.rotation.y = pose.ry + (reduced ? 0 : Math.sin(t * 0.45) * 0.22 + ptr.current.x * 0.35 + (1 - s) * 1.6)
    h.rotation.x = pose.rx + (reduced ? 0 : ptr.current.y * 0.12)
    h.position.y = reduced ? 0 : Math.sin(t * 0.8) * 0.07
  })

  return <group ref={holder} />
}

export default function HeroStage({
  kind, paused, reduced, onReady,
}: { kind: ProductKind; paused: boolean; reduced: boolean; onReady: () => void }) {
  const [dpr, setDpr] = useState(1.5)
  return (
    <Canvas
      aria-hidden="true"
      frameloop={paused ? 'never' : 'always'}
      dpr={dpr}
      camera={{ position: [0, 0.15, 5.4], fov: 30 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      style={{ background: 'transparent' }}
    >
      <PerformanceMonitor onDecline={() => setDpr(1)} onIncline={() => setDpr(1.5)} flipflops={3} />
      <Studio />
      <Stage kind={kind} reduced={reduced} onReady={onReady} />
    </Canvas>
  )
}
