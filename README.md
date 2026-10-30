# Ferreléctricos VAMA — landing de prueba

Prototipo demostrativo (solo Hero + Productos). React 19 + Vite + TypeScript + Tailwind 4,
React Three Fiber/drei (3D) y Framer Motion. Todo estático: sin backend, pagos ni inventario.

```bash
npm install
npm run dev       # desarrollo
npm run build     # compila (tsc + vite)
npm run preview   # sirve el build
npm run assets    # regenera los marcadores de posición (requiere Chromium; ver scripts/)
```

- Productos y textos: `src/data/products.ts`
- Modelos procedurales de marcador: `src/three/builders.ts`
- Cómo sustituir imágenes y modelos: `public/assets/README.md`
- Referencia de diseño y ERS: `referencia/`
