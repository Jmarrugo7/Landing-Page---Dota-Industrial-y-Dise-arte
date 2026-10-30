import { useRef } from 'react'
import { imgOf, type Product } from '../data/products'

interface Props {
  items: Product[]
  active: number
  onSelect: (i: number) => void
}

/** Carrusel con perspectiva CSS 3D: el activo al frente, los demás se inclinan y se alejan. */
export default function Coverflow({ items, active, onSelect }: Props) {
  const n = items.length
  const half = Math.floor(n / 2)
  const start = useRef<{ x: number; t: number } | null>(null)
  const swiped = useRef(false)

  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="relative w-full flex items-center justify-center">
        {/* Flecha anterior */}
        <button
          type="button"
          aria-label="Producto anterior"
          onClick={() => onSelect((active - 1 + n) % n)}
          className="absolute -left-3 z-30 grid place-items-center w-9 h-9 rounded-full bg-surface-2/80 hover:bg-surface-3 text-ink/80 hover:text-ink hover:text-accent backdrop-blur-md transition-all border border-white/10 hover:border-accent/40 shadow-lg"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Carrusel 3D */}
        <div
          className="cf relative touch-pan-y select-none w-full"
          style={{ height: 'var(--th)', perspective: '1100px' }}
          onPointerDown={(e) => { start.current = { x: e.clientX, t: Date.now() }; swiped.current = false }}
          onPointerUp={(e) => {
            if (!start.current) return
            const dx = e.clientX - start.current.x
            if (Math.abs(dx) > 40) { swiped.current = true; onSelect((active + (dx < 0 ? 1 : -1) + n) % n) }
            start.current = null
          }}
          onPointerCancel={() => { start.current = null }}
        >
          <div className="absolute inset-0" style={{ transformStyle: 'preserve-3d' }}>
            {items.map((p, i) => {
              const off = ((i - active + n + half) % n) - half
              const a = Math.abs(off)
              const isActive = off === 0
              return (
                <button
                  key={p.id}
                  type="button"
                  tabIndex={a > 2 ? -1 : 0}
                  aria-label={`${p.name}${isActive ? ' (seleccionado)' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                  onClick={() => { if (!swiped.current) onSelect(i) }}
                  className={`cf-tile absolute left-1/2 top-0 grid place-items-center rounded-2xl p-2 outline-offset-4 backdrop-blur-md ${
                    isActive
                      ? 'bg-surface-3/90 outline outline-[3px] outline-accent shadow-[0_0_24px_rgba(255,184,0,0.3)]'
                      : 'bg-surface-2/75 border border-white/5'
                  }`}
                  style={{
                    width: 'var(--tw)', height: 'var(--th)',
                    transform: `translateX(-50%) translateX(calc(var(--gap) * ${off})) translateZ(${-a * 90}px) rotateY(${off * -36}deg) scale(${isActive ? 1.06 : 1})`,
                    opacity: a > 2 ? 0 : 1 - a * 0.22,
                    zIndex: 10 - a,
                    pointerEvents: a > 2 ? 'none' : 'auto',
                  }}
                >
                  <img src={imgOf(p)} alt="" width={900} height={900} loading="eager" decoding="async" draggable={false} className="h-full w-full object-contain" />
                </button>
              )
            })}
          </div>
        </div>

        {/* Flecha siguiente */}
        <button
          type="button"
          aria-label="Producto siguiente"
          onClick={() => onSelect((active + 1) % n)}
          className="absolute -right-3 z-30 grid place-items-center w-9 h-9 rounded-full bg-surface-2/80 hover:bg-surface-3 text-ink/80 hover:text-ink hover:text-accent backdrop-blur-md transition-all border border-white/10 hover:border-accent/40 shadow-lg"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Indicadores de posición (puntos) */}
      <div className="flex items-center gap-2 mt-4 z-20" role="tablist" aria-label="Selector de producto">
        {items.map((item, i) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={item.name}
            onClick={() => onSelect(i)}
            className={`transition-all duration-300 rounded-full ${
              i === active ? 'w-5 h-2 bg-accent shadow-[0_0_8px_var(--color-accent)]' : 'w-2 h-2 bg-white/20 hover:bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
