# Assets de Ferreléctricos VAMA

Todo lo que hay aquí son **marcadores de posición** generados con `npm run assets`
(renders de modelos procedurales de `src/three/builders.ts`). Reemplázalos con los reales
**usando el mismo nombre de archivo**; no hay que tocar código.

## Imágenes — `products/<id>.webp`
PNG/WebP con **fondo transparente**, 900 × 900 px, producto centrado ocupando ~85 % del lienzo,
fotografiado en 3/4 con luz suave. Peso objetivo: < 60 KB cada una.

| id (archivo)        | Producto                          |
|---------------------|-----------------------------------|
| taladro.webp        | Taladro inalámbrico 20V (hero)    |
| tablero.webp        | Tablero eléctrico 12 circuitos    |
| esmeriladora.webp   | Esmeriladora angular 4 1/2"       |
| cinta.webp          | Cinta métrica 5 metros            |
| casco.webp          | Casco de seguridad                |
| alicates.webp       | Juego de alicates 3 piezas        |
| cable.webp          | Rollo de cable calibre 12         |
| tomacorriente.webp  | Tomacorriente doble con tierra    |
| nivel.webp          | Nivel de burbuja 60 cm            |
| gafas.webp          | Gafas de protección               |

## Modelos 3D — `models/<id>.glb` (opcional)
Si existe `models/<id>.glb` se usa automáticamente en el hero y en el visor del modal; si no,
se usa el modelo procedural. Requisitos: glTF binario, **< 400 KB** cada uno (idealmente < 250 KB),
origen en el centro, unidades en metros, escala libre (se normaliza), materiales PBR
(color/rugosidad/metalicidad), sin texturas mayores de 1024 px, comprimido con `gltf-transform optimize`
(Draco o Meshopt). Usa los mismos ids de la tabla.

## Sin marcas comerciales
No incluir logotipos ni nombres de marcas reales en modelos, texturas ni fotos.
