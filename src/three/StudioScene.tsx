import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { addStudioLights, createStudioEnv } from './studio'

/** Entorno + luces del estudio (el contraluz azul es la "luz ambiental" del diseño). */
export function Studio() {
  const gl = useThree((s) => s.gl)
  const scene = useThree((s) => s.scene)
  useEffect(() => {
    gl.toneMapping = THREE.ACESFilmicToneMapping
    gl.toneMappingExposure = 0.9
    const env = createStudioEnv(gl)
    scene.environment = env
    scene.environmentIntensity = 0.5
    const lights = addStudioLights(scene)
    return () => {
      scene.environment = null
      scene.remove(lights)
      env.dispose()
    }
  }, [gl, scene])
  return null
}
