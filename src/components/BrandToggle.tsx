import { motion, useReducedMotion } from 'framer-motion'
import { useBrand } from '../hooks/useBrand'

/**
 * Toggle switch premium estilo iOS que flota en una posición fija estratégica.
 * Muestra las dos marcas a los lados y un switch animado en el centro.
 */
export default function BrandToggle() {
  const { brandId, toggle } = useBrand()
  const reduced = useReducedMotion()
  const isDisen = brandId === 'disenarte'

  return (
    <div className="brand-toggle-wrapper">
      <div className="brand-toggle-container">
        {/* Label izquierdo: Dota */}
        <button
          type="button"
          onClick={() => isDisen && toggle()}
          className={`brand-toggle-label ${!isDisen ? 'brand-toggle-label--active' : ''}`}
          style={{ '--label-color': !isDisen ? '#ffc400' : undefined } as React.CSSProperties}
        >
          <span className="brand-toggle-icon brand-toggle-icon--dota">
            <img
              src="/assets/products/Logo%20dota%20industrial.png"
              alt="Dota"
              width={18}
              height={18}
              className="h-[18px] w-[18px] object-contain"
            />
          </span>
          <span className="brand-toggle-name max-[479px]:hidden">Dota</span>
        </button>

        {/* Switch central */}
        <button
          type="button"
          role="switch"
          aria-checked={isDisen}
          aria-label={`Cambiar a ${isDisen ? 'Dota Industrial' : 'Diseñarte'}`}
          onClick={toggle}
          className="brand-toggle-switch"
        >
          <span className="brand-toggle-track" data-brand={brandId}>
            <motion.span
              className="brand-toggle-thumb"
              layout
              transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 500, damping: 35, mass: 0.8 }}
              style={{ x: isDisen ? 22 : 0 }}
            />
          </span>
        </button>

        {/* Label derecho: Diseñarte */}
        <button
          type="button"
          onClick={() => !isDisen && toggle()}
          className={`brand-toggle-label ${isDisen ? 'brand-toggle-label--active' : ''}`}
          style={{ '--label-color': isDisen ? '#e8618c' : undefined } as React.CSSProperties}
        >
          <span className="brand-toggle-name max-[479px]:hidden">Diseñarte</span>
          <span className="brand-toggle-icon brand-toggle-icon--disen">
            <img
              src="/assets/products/Logo%20diseñarte.png"
              alt="Diseñarte"
              width={18}
              height={18}
              className="h-[18px] w-[18px] rounded-full object-contain"
            />
          </span>
        </button>
      </div>
    </div>
  )
}
