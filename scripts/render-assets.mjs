// Genera los marcadores de posición: imágenes WebP transparentes y modelos .glb livianos
// a partir de los modelos procedurales (src/three/builders.ts).
// Uso: npm run assets            (solo WebP)
//      npm run assets -- --glb   (además exporta .glb de ejemplo; pesan más de lo recomendado)
// Uso original: npm run assets   (requiere un Chromium instalado; usa playwright-core)
import { createServer } from 'vite'
import { chromium } from 'playwright-core'
import { mkdirSync, writeFileSync } from 'node:fs'

const KINDS = ['taladro','esmeriladora','alicates','tablero','cable','cinta','nivel','casco','gafas','tomacorriente']
mkdirSync('public/assets/products', { recursive: true })
mkdirSync('public/assets/models', { recursive: true })

const server = await createServer({ server: { port: 5199 }, logLevel: 'error' })
await server.listen()
const browser = await chromium.launch({
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--use-gl=angle'],
})
const page = await browser.newPage()
page.on('pageerror', (e) => console.error('page error:', e.message))
await page.goto('http://localhost:5199/tools/render.html')
await page.waitForFunction('window.ready === true', null, { timeout: 60000 })
for (const k of KINDS) {
  const png = await page.evaluate(([kind]) => window.renderProduct(kind, 900), [k])
  writeFileSync(`public/assets/products/${k}.webp`, Buffer.from(png.split(',')[1], 'base64'))
  if (process.argv.includes('--glb')) {
  const glb = await page.evaluate(([kind]) => window.exportGlb(kind), [k])
  writeFileSync(`public/assets/models/${k}.glb`, Buffer.from(glb, 'base64'))
  }
  console.log('ok', k)
}
await browser.close()
await server.close()
