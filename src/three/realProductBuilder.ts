import * as THREE from 'three'
import type { ProductKind } from './builders'

/**
 * Mapeo de cada producto a su imagen real en alta resolución (silueta transparente).
 * Taladro, tablero y esmeriladora utilizan sus siluetas de estudio ultra nítidas.
 */
export const PRODUCT_REAL_IMAGES: Record<ProductKind, string> = {
  taladro: '/assets/products/Taladro%20silueta.png',
  tablero: '/assets/products/Tablero%20Silueta.png',
  esmeriladora: '/assets/products/esmeriladora%20original.png',
  alicates: '/assets/products/alicates.webp',
  casco: '/assets/products/casco.webp',
  cinta: '/assets/products/cinta.webp',
  cable: '/assets/products/cable.webp',
  tomacorriente: '/assets/products/tomacorriente.webp',
  nivel: '/assets/products/nivel.webp',
  gafas: '/assets/products/gafas.webp',
  'bordado-floral': '/assets/products/Bordado%20Floral%20Artesanal.png',
}

const textureCache = new Map<string, Promise<THREE.Texture>>()

function loadTexture(url: string): Promise<THREE.Texture> {
  if (!textureCache.has(url)) {
    textureCache.set(
      url,
      new Promise((resolve, reject) => {
        new THREE.TextureLoader().load(
          url,
          (tex) => {
            tex.colorSpace = THREE.SRGBColorSpace
            tex.generateMipmaps = true
            tex.minFilter = THREE.LinearMipmapLinearFilter
            tex.magFilter = THREE.LinearFilter
            resolve(tex)
          },
          undefined,
          reject,
        )
      }),
    )
  }
  return textureCache.get(url)!
}

let shadowTexture: THREE.Texture | null = null
function getShadowTexture(): THREE.Texture {
  if (!shadowTexture) {
    const canvas = document.createElement('canvas')
    canvas.width = 128
    canvas.height = 128
    const ctx = canvas.getContext('2d')!
    const grad = ctx.createRadialGradient(64, 64, 10, 64, 64, 64)
    grad.addColorStop(0, 'rgba(0, 0, 0, 0.7)')
    grad.addColorStop(0.35, 'rgba(0, 0, 0, 0.4)')
    grad.addColorStop(0.7, 'rgba(0, 0, 0, 0.12)')
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 128, 128)
    shadowTexture = new THREE.CanvasTexture(canvas)
  }
  return shadowTexture
}

/**
 * Construye un modelo 3D volumétrico fotorrealista a partir de la imagen real del producto.
 * Permite rotación completa de 360° con volumen físico, bisel de profundidad,
 * textura frontal, textura trasera espejada simétricamente y sombra dinámica en el suelo.
 */
export async function buildRealProduct3D(kind: ProductKind, size = 2.9): Promise<THREE.Group> {
  const url = PRODUCT_REAL_IMAGES[kind] ?? `/assets/products/${kind}.webp`
  const texture = await loadTexture(url)

  const group = new THREE.Group()
  group.name = `real-product-${kind}`

  // Dimensiones proporcionales según la imagen real
  const imgW = texture.image ? (texture.image as HTMLImageElement).naturalWidth || (texture.image as HTMLImageElement).width || 1 : 1
  const imgH = texture.image ? (texture.image as HTMLImageElement).naturalHeight || (texture.image as HTMLImageElement).height || 1 : 1
  const aspect = imgW / imgH

  let width = size
  let height = size
  if (aspect >= 1) {
    height = size / aspect
  } else {
    width = size * aspect
  }

  // Grosor / volumen 3D según el tipo de producto
  const depth = kind === 'tablero' ? 0.32 : kind === 'taladro' ? 0.42 : kind === 'esmeriladora' ? 0.38 : kind === 'bordado-floral' ? 0.22 : 0.35
  const halfDepth = depth / 2

  // 1. Cara Frontal con textura real y acabado satinado
  const frontGeo = new THREE.PlaneGeometry(width, height)
  const frontMat = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.1,
    roughness: 0.35,
    metalness: 0.12,
    side: THREE.FrontSide,
  })
  const frontMesh = new THREE.Mesh(frontGeo, frontMat)
  frontMesh.position.z = halfDepth
  group.add(frontMesh)

  // 2. Cara Trasera con UVs invertidos en X para que coincida perfectamente con la silueta 3D
  const backGeo = new THREE.PlaneGeometry(width, height)
  const uvs = backGeo.attributes.uv
  for (let i = 0; i < uvs.count; i++) {
    uvs.setX(i, 1 - uvs.getX(i))
  }
  uvs.needsUpdate = true

  const backMat = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.1,
    roughness: 0.4,
    metalness: 0.12,
    side: THREE.FrontSide,
  })
  const backMesh = new THREE.Mesh(backGeo, backMat)
  backMesh.rotation.y = Math.PI
  backMesh.position.z = -halfDepth
  group.add(backMesh)

  // 3. Capas interiores volumétricas para dar masa sólida y bisel en 3D
  const numSlices = 42
  const sliceStep = depth / (numSlices + 1)
  const edgeMat = new THREE.MeshStandardMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.12,
    roughness: 0.45,
    metalness: 0.15,
    color: new THREE.Color(0x888888),
    side: THREE.DoubleSide,
  })

  const sliceGeo = new THREE.PlaneGeometry(width, height)
  for (let i = 1; i <= numSlices; i++) {
    const z = -halfDepth + i * sliceStep
    const sliceMesh = new THREE.Mesh(sliceGeo, edgeMat)
    sliceMesh.position.z = z
    group.add(sliceMesh)
  }

  // 4. Sombra suave en el suelo (pedestal)
  const shadowGeo = new THREE.PlaneGeometry(width * 1.3, depth * 4)
  const shadowMat = new THREE.MeshBasicMaterial({
    map: getShadowTexture(),
    transparent: true,
    depthWrite: false,
    opacity: 0.75,
  })
  const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat)
  shadowMesh.rotation.x = -Math.PI / 2
  shadowMesh.position.y = -height / 2 - 0.25
  group.add(shadowMesh)

  // Pose inicial en 3/4 para resaltar la tridimensionalidad
  const root = new THREE.Group()
  root.add(group)
  root.userData.pose = { rx: 0.04, ry: 0.2 }

  return root
}
