import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'

export type ProductKind =
  | 'taladro' | 'esmeriladora' | 'alicates' | 'tablero' | 'cable'
  | 'cinta' | 'nivel' | 'casco' | 'gafas' | 'tomacorriente'
  | 'bordado-floral'

const M = {
  yellow: () => new THREE.MeshStandardMaterial({ color: '#ffc400', roughness: 0.42, metalness: 0.05 }),
  black: () => new THREE.MeshStandardMaterial({ color: '#17191d', roughness: 0.55, metalness: 0.1 }),
  rubber: () => new THREE.MeshStandardMaterial({ color: '#0e0f12', roughness: 0.9, metalness: 0 }),
  steel: () => new THREE.MeshStandardMaterial({ color: '#c9ced6', roughness: 0.28, metalness: 1 }),
  dark: () => new THREE.MeshStandardMaterial({ color: '#4a4f58', roughness: 0.35, metalness: 0.9 }),
  panel: () => new THREE.MeshStandardMaterial({ color: '#aeb4bd', roughness: 0.5, metalness: 0.6 }),
  glass: () =>
    new THREE.MeshPhysicalMaterial({ color: '#dfe8f0', roughness: 0.05, metalness: 0, transparent: true, opacity: 0.22 }),
}

type Mat = THREE.Material
function rbox(w: number, h: number, d: number, m: Mat, r = 0.06) {
  return new THREE.Mesh(new RoundedBoxGeometry(w, h, d, 4, Math.min(r, w / 2.1, h / 2.1, d / 2.1)), m)
}
function cyl(rt: number, rb: number, h: number, m: Mat, seg = 40) {
  return new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), m)
}
function at<T extends THREE.Object3D>(o: T, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
  o.position.set(x, y, z)
  o.rotation.set(rx, ry, rz)
  return o
}
const PI = Math.PI

function taladro() {
  const g = new THREE.Group()
  const y = M.yellow(), k = M.black(), s = M.steel(), r = M.rubber()
  g.add(at(rbox(1.5, 0.66, 0.64, y, 0.22), 0.2, 0.55, 0))
  g.add(at(cyl(0.3, 0.3, 0.42, k), 1.05, 0.55, 0, 0, 0, PI / 2))
  g.add(at(cyl(0.26, 0.3, 0.3, k), -0.62, 0.55, 0, 0, 0, PI / 2))
  g.add(at(cyl(0.22, 0.24, 0.42, s), -0.9, 0.55, 0, 0, 0, PI / 2))
  g.add(at(cyl(0.15, 0.2, 0.34, M.dark()), -1.25, 0.55, 0, 0, 0, PI / 2))
  g.add(at(cyl(0.04, 0.04, 0.7, s, 16), -1.75, 0.55, 0, 0, 0, PI / 2))
  g.add(at(rbox(0.4, 1.05, 0.46, r, 0.15), 0.42, -0.1, 0, 0, 0, 0.1))
  g.add(at(rbox(0.22, 0.2, 0.2, k, 0.05), 0.12, 0.2, 0))
  g.add(at(rbox(1.05, 0.2, 0.7, k, 0.07), 0.55, -0.72, 0))
  g.add(at(rbox(0.95, 0.42, 0.62, y, 0.12), 0.58, -0.98, 0))
  g.add(at(rbox(0.5, 0.06, 0.4, k, 0.02), 0.58, -1.2, 0))
  g.userData.pose = { rx: 0.1, ry: 0.55 }
  return g
}

function esmeriladora() {
  const g = new THREE.Group()
  const y = M.yellow(), k = M.black(), s = M.steel(), r = M.rubber()
  g.add(at(cyl(0.27, 0.27, 1.5, k), 0.5, 0.15, 0, 0, 0, PI / 2))
  g.add(at(cyl(0.285, 0.285, 0.5, y), 0.15, 0.15, 0, 0, 0, PI / 2))
  g.add(at(cyl(0.3, 0.3, 0.3, r), 1.3, 0.15, 0, 0, 0, PI / 2))
  g.add(at(cyl(0.34, 0.34, 0.5, M.dark()), -0.62, 0.15, 0))
  g.add(at(cyl(0.14, 0.14, 0.18, s), -0.62, -0.18, 0))
  g.add(at(cyl(0.9, 0.9, 0.05, s, 64), -0.62, -0.3, 0))
  g.add(at(new THREE.Mesh(new THREE.CylinderGeometry(0.98, 0.98, 0.14, 64, 1, false, 0, PI * 1.15), y), -0.62, -0.14, 0, 0, PI * 0.9, 0))
  g.add(at(cyl(0.065, 0.065, 0.85, r, 20), -0.45, 0.2, 0.42, PI / 2.4, 0, 0))
  g.userData.pose = { rx: 0.25, ry: -0.5 }
  return g
}

function pliers(scale: number, handle: Mat) {
  const g = new THREE.Group()
  const s = M.steel()
  for (const side of [-1, 1]) {
    g.add(at(rbox(0.2, 1.15, 0.16, handle, 0.08), side * 0.13, -0.68, 0, 0, 0, side * 0.1))
    g.add(at(rbox(0.19, 0.78, 0.12, s, 0.04), side * 0.09, 0.4, 0, 0, 0, -side * 0.06))
  }
  g.add(at(cyl(0.08, 0.08, 0.2, M.dark(), 24), 0, 0, 0, PI / 2, 0, 0))
  g.scale.setScalar(scale)
  return g
}
function alicates() {
  const g = new THREE.Group()
  const mats = [M.yellow(), M.black(), M.yellow()]
  const items: [number, number, number][] = [[-0.85, 0.9, 0.18], [0, 1.05, 0], [0.85, 0.85, -0.18]]
  items.forEach(([x, sc, rz], i) => g.add(at(pliers(sc, mats[i]), x, 0, 0, 0, 0, rz)))
  g.userData.pose = { rx: 0.15, ry: 0.35 }
  return g
}

function tablero() {
  const g = new THREE.Group()
  const p = M.panel(), k = M.black(), y = M.yellow()
  g.add(at(rbox(1.7, 2.1, 0.36, p, 0.05), 0, 0, 0))
  g.add(at(rbox(1.5, 1.9, 0.06, M.dark(), 0.03), 0, 0, 0.17))
  g.add(at(rbox(1.3, 0.14, 0.06, M.steel(), 0.02), 0, 0.8, 0.22))
  for (let col = 0; col < 2; col++)
    for (let row = 0; row < 6; row++) {
      const x = col === 0 ? -0.34 : 0.34, yy = 0.5 - row * 0.28
      g.add(at(rbox(0.5, 0.2, 0.16, k, 0.03), x, yy, 0.24))
      g.add(at(rbox(0.09, 0.12, 0.1, row % 3 === 0 ? y : M.panel(), 0.02), x + 0.1, yy, 0.34))
    }
  g.add(at(rbox(0.05, 1.5, 0.08, M.steel(), 0.02), 0, -0.1, 0.22))
  g.userData.pose = { rx: 0.05, ry: -0.45 }
  return g
}

function cable() {
  const g = new THREE.Group()
  const y = M.yellow(), k = M.black()
  g.add(at(cyl(0.5, 0.5, 0.78, k, 40), 0, 0, 0))
  for (const dy of [-0.26, 0, 0.26]) {
    for (const rr of [0.62, 0.78]) {
      g.add(at(new THREE.Mesh(new THREE.TorusGeometry(rr, 0.15, 18, 64), y), 0, dy, 0, PI / 2))
    }
  }
  g.add(at(cyl(0.9, 0.9, 0.05, k, 48), 0, 0.45, 0))
  g.add(at(cyl(0.9, 0.9, 0.05, k, 48), 0, -0.45, 0))
  g.add(at(cyl(0.15, 0.15, 1.1, y, 20), 0.95, -0.4, 0.4, 0, 0, PI / 2.6))
  g.add(at(cyl(0.12, 0.12, 0.06, M.panel(), 20), 1.45, -0.62, 0.62, 0, 0, PI / 2.6))
  g.userData.pose = { rx: 0.5, ry: 0.4 }
  return g
}

function cinta() {
  const g = new THREE.Group()
  const y = M.yellow(), k = M.black(), s = M.steel()
  g.add(at(cyl(0.82, 0.82, 0.5, y, 56), 0, 0, 0, PI / 2))
  g.add(at(cyl(0.88, 0.88, 0.22, k, 56), 0, 0, 0, PI / 2))
  g.add(at(cyl(0.34, 0.34, 0.54, s, 40), 0, 0, 0, PI / 2))
  g.add(at(cyl(0.12, 0.12, 0.58, k, 24), 0, 0, 0, PI / 2))
  g.add(at(rbox(0.5, 0.14, 0.3, k, 0.05), 0.2, 0.86, 0))
  g.add(at(rbox(1.9, 0.04, 0.36, y, 0.01), 1.15, -0.86, 0))
  g.add(at(rbox(0.06, 0.2, 0.36, s, 0.01), 2.1, -0.78, 0))
  g.add(at(rbox(0.42, 0.18, 0.5, k, 0.06), 0.1, -0.84, 0))
  g.userData.pose = { rx: 0.1, ry: -0.5 }
  return g
}

function nivel() {
  const g = new THREE.Group()
  const y = M.yellow(), k = M.black()
  g.add(at(rbox(2.6, 0.38, 0.2, y, 0.06), 0, 0, 0))
  g.add(at(rbox(0.4, 0.42, 0.24, k, 0.06), -1.3, 0, 0))
  g.add(at(rbox(0.4, 0.42, 0.24, k, 0.06), 1.3, 0, 0))
  g.add(at(rbox(0.5, 0.24, 0.24, M.glass(), 0.08), 0, 0, 0))
  g.add(at(rbox(0.26, 0.26, 0.24, M.glass(), 0.08), 0.9, 0, 0))
  g.add(at(cyl(0.05, 0.05, 0.26, M.yellow(), 16), 0, 0, 0, PI / 2))
  g.add(at(rbox(2.2, 0.03, 0.22, M.steel(), 0.01), 0, -0.19, 0))
  g.userData.pose = { rx: 0.3, ry: -0.35 }
  return g
}

function casco() {
  const g = new THREE.Group()
  const y = M.yellow(), k = M.black()
  g.add(new THREE.Mesh(new THREE.SphereGeometry(1, 56, 32, 0, PI * 2, 0, PI / 2), y))
  g.add(at(cyl(1.0, 1.0, 0.1, y, 56), 0, -0.04, 0))
  g.add(at(new THREE.Mesh(new THREE.CylinderGeometry(1.22, 1.02, 0.07, 56, 1, false, -PI * 0.42, PI * 0.84), y), 0, -0.05, 0, 0, PI, 0))
  g.add(new THREE.Mesh(new THREE.TorusGeometry(1, 0.075, 16, 48, PI), y))
  g.add(at(new THREE.Mesh(new THREE.TorusGeometry(0.97, 0.05, 12, 56), k), 0, -0.1, 0, PI / 2))
  g.add(at(rbox(0.28, 0.12, 0.14, k, 0.04), 0, 0.42, 0.93, -0.6))
  g.userData.pose = { rx: 0.35, ry: 0.5 }
  return g
}

function gafas() {
  const g = new THREE.Group()
  const k = M.black(), gl = M.glass()
  for (const side of [-1, 1]) {
    const lens = new THREE.Mesh(new THREE.SphereGeometry(0.55, 40, 24), gl)
    lens.scale.set(1, 0.72, 0.28)
    g.add(at(lens, side * 0.58, 0, 0))
    const frame = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.045, 12, 48), k)
    frame.scale.set(1, 0.72, 1)
    g.add(at(frame, side * 0.58, 0, 0.02))
    g.add(at(rbox(0.07, 0.07, 1.5, k, 0.03), side * 1.18, 0.04, -0.72))
    g.add(at(rbox(0.12, 0.2, 0.26, M.yellow(), 0.05), side * 1.18, -0.02, -1.4))
  }
  g.add(at(rbox(0.3, 0.07, 0.07, k, 0.03), 0, 0.12, 0.03))
  g.userData.pose = { rx: 0.2, ry: 0.5 }
  return g
}

function tomacorriente() {
  const g = new THREE.Group()
  const w = new THREE.MeshStandardMaterial({ color: '#e8eaee', roughness: 0.5, metalness: 0.05 })
  const k = M.black()
  g.add(at(rbox(1.2, 1.9, 0.16, w, 0.08), 0, 0, 0))
  for (const y of [0.5, -0.5]) {
    g.add(at(rbox(0.8, 0.72, 0.12, M.panel(), 0.1), 0, y, 0.1))
    g.add(at(rbox(0.07, 0.26, 0.1, k, 0.02), -0.17, y + 0.02, 0.17))
    g.add(at(rbox(0.07, 0.26, 0.1, k, 0.02), 0.17, y + 0.02, 0.17))
    g.add(at(cyl(0.05, 0.05, 0.1, k, 16), 0, y - 0.2, 0.17, PI / 2))
  }
  g.add(at(cyl(0.05, 0.05, 0.1, M.yellow(), 16), 0, 0, 0.1, PI / 2))
  g.userData.pose = { rx: 0.1, ry: -0.5 }
  return g
}

function bordadoFloral() {
  const g = new THREE.Group()
  const wood = new THREE.MeshStandardMaterial({ color: '#d8b068', roughness: 0.55 })
  const cloth = new THREE.MeshStandardMaterial({ color: '#f2ece1', roughness: 0.85, side: THREE.DoubleSide })
  const metal = new THREE.MeshStandardMaterial({ color: '#a0a6ad', metalness: 0.85, roughness: 0.25 })
  // bastidor aro exterior
  g.add(at(new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.09, 16, 64), wood), 0, 0, 0))
  // tela de bordado
  g.add(at(new THREE.Mesh(new THREE.CircleGeometry(1.18, 64), cloth), 0, 0, 0))
  // tornillo de ajuste superior
  g.add(at(rbox(0.28, 0.12, 0.12, metal, 0.02), 0, 1.28, 0))
  g.userData.pose = { rx: 0.05, ry: 0.2 }
  return g
}

const builders: Record<ProductKind, () => THREE.Group> = {
  taladro, esmeriladora, alicates, tablero, cable, cinta, nivel, casco, gafas, tomacorriente,
  'bordado-floral': bordadoFloral,
}

/** Centra y escala un modelo para que su mayor dimensión mida `size`. */
export function fitModel(raw: THREE.Object3D, size = 2.8, pose = { rx: 0, ry: 0 }): THREE.Group {
  const box = new THREE.Box3().setFromObject(raw)
  const c = box.getCenter(new THREE.Vector3())
  const dim = Math.max(...box.getSize(new THREE.Vector3()).toArray()) || 1
  raw.position.sub(c)
  const wrap = new THREE.Group()
  wrap.add(raw)
  wrap.scale.setScalar(size / dim)
  const root = new THREE.Group()
  root.add(wrap)
  root.userData.pose = pose
  return root
}

export function buildProduct(kind: ProductKind, size = 2.8): THREE.Group {
  const raw = builders[kind]()
  const root = fitModel(raw, size, raw.userData.pose ?? { rx: 0, ry: 0 })
  root.name = kind
  return root
}

export function disposeObject(o: THREE.Object3D) {
  o.traverse((n) => {
    const m = n as THREE.Mesh
    if (m.geometry) m.geometry.dispose()
    const mat = m.material as THREE.Material | THREE.Material[] | undefined
    if (Array.isArray(mat)) mat.forEach((x) => x.dispose())
    else mat?.dispose()
  })
}
