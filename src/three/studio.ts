import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

/** Mapa de entorno generado en memoria (sin descargas): reflejos suaves de un estudio. */
export function createStudioEnv(renderer: THREE.WebGLRenderer): THREE.Texture {
  const pmrem = new THREE.PMREMGenerator(renderer)
  const tex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
  pmrem.dispose()
  return tex
}

/** Luces del estudio: iluminación balanceada de estudio profesional para productos reales. */
export function addStudioLights(scene: THREE.Scene) {
  const key = new THREE.DirectionalLight('#ffffff', 2.2)
  key.position.set(3, 4, 4)
  const fill = new THREE.DirectionalLight('#f0f4fa', 0.9)
  fill.position.set(-4, 1.5, 3)
  const backFill = new THREE.DirectionalLight('#ffffff', 1.0)
  backFill.position.set(0, 3, -4)
  const rimCool = new THREE.DirectionalLight('#9bc0ff', 1.1)
  rimCool.position.set(-3.5, 2, -3)
  const rimWarm = new THREE.DirectionalLight('#ffe6b3', 0.7)
  rimWarm.position.set(3.5, -1, -3)
  const hemi = new THREE.HemisphereLight('#ffffff', '#22262d', 0.6)
  const g = new THREE.Group()
  g.name = 'studio-lights'
  g.add(key, fill, backFill, rimCool, rimWarm, hemi)
  scene.add(g)
  return g
}
