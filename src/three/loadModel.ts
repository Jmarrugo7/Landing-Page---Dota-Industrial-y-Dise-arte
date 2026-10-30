import * as THREE from 'three'
import { disposeObject, fitModel, type ProductKind } from './builders'
import { buildRealProduct3D } from './realProductBuilder'

export interface LoadedModel {
  object: THREE.Group
  /** true si es un modelo propio (procedural) que debe liberarse al descartarlo */
  owned: boolean
}

const glbCache = new Map<string, Promise<THREE.Group | null>>()

/** Intenta cargar /assets/models/<id>.glb. Si no existe (o el servidor devuelve HTML), devuelve null. */
function tryGlb(kind: ProductKind): Promise<THREE.Group | null> {
  if (!glbCache.has(kind)) {
    glbCache.set(
      kind,
      (async () => {
        try {
          const url = `/assets/models/${kind}.glb`
          const head = await fetch(url, { method: 'HEAD' })
          const type = head.headers.get('content-type') ?? ''
          if (!head.ok || type.includes('text/html')) return null
          const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js')
          const gltf = await new GLTFLoader().loadAsync(url)
          return fitModel(gltf.scene, 2.8, { rx: 0.1, ry: 0.5 })
        } catch {
          return null
        }
      })(),
    )
  }
  return glbCache.get(kind)!
}

/** .glb real si existe; si no, el modelo 3D volumétrico fotorrealista basado en la imagen real del producto. */
export async function loadModel(kind: ProductKind): Promise<LoadedModel> {
  const glb = await tryGlb(kind)
  if (glb) return { object: glb.clone(true), owned: false }
  const realObject = await buildRealProduct3D(kind)
  return { object: realObject, owned: true }
}

export function releaseModel(m: LoadedModel) {
  if (m.owned) disposeObject(m.object)
}
