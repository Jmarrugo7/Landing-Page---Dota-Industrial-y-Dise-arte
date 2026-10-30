import * as THREE from 'three'
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js'
import { buildProduct, type ProductKind } from '../src/three/builders'
import { addStudioLights, createStudioEnv } from '../src/three/studio'

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, preserveDrawingBuffer: true })
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 0.82
renderer.setClearColor(0x000000, 0)
const scene = new THREE.Scene()
scene.environment = createStudioEnv(renderer)
scene.environmentIntensity = 0.45
addStudioLights(scene)
const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50)
camera.position.set(0, 0.2, 8.2)

;(window as any).renderProduct = (kind: ProductKind, size: number) => {
  const big = size * 1.5
  renderer.setSize(big, big, false)
  const model = buildProduct(kind)
  model.rotation.set(model.userData.pose.rx, model.userData.pose.ry, 0)
  scene.add(model)
  renderer.render(scene, camera)
  scene.remove(model)
  // recorte al contenido y recentrado al 86 % del lienzo
  const src = document.createElement('canvas')
  src.width = src.height = big
  const sctx = src.getContext('2d', { willReadFrequently: true })!
  sctx.drawImage(renderer.domElement, 0, 0)
  const d = sctx.getImageData(0, 0, big, big).data
  let x0 = big, y0 = big, x1 = 0, y1 = 0
  for (let y = 0; y < big; y++) for (let x = 0; x < big; x++) if (d[(y * big + x) * 4 + 3] > 8) {
    if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y
  }
  const w = x1 - x0 + 1, h = y1 - y0 + 1, k = (size * 0.86) / Math.max(w, h)
  const out = document.createElement('canvas')
  out.width = out.height = size
  const octx = out.getContext('2d')!
  octx.imageSmoothingQuality = 'high'
  octx.drawImage(src, x0, y0, w, h, (size - w * k) / 2, (size - h * k) / 2, w * k, h * k)
  return out.toDataURL('image/webp', 0.88)
}

;(window as any).exportGlb = (kind: ProductKind) =>
  new Promise<string>((resolve, reject) => {
    new GLTFExporter().parse(
      buildProduct(kind),
      (res) => {
        const bytes = new Uint8Array(res as ArrayBuffer)
        let s = ''
        for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode(...bytes.subarray(i, i + 0x8000))
        resolve(btoa(s))
      },
      reject,
      { binary: true },
    )
  })
;(window as any).ready = true
