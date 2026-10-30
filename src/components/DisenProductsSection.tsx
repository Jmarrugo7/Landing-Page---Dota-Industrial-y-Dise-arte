import { useRef, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { DISEN_CATEGORIES, DISEN_PRODUCTS, disenImgOf, type DisenProduct } from '../data/disenProducts'

interface Props { onDetails: (p: DisenProduct, opener: HTMLElement) => void }

export default function DisenProductsSection({ onDetails }: Props) {
  const reduced = useReducedMotion()
  type Cat = (typeof DISEN_CATEGORIES)[number]
  const [cat, setCat] = useState<Cat>('Todos')
  const choose = (c: Cat) => setCat(c)
  const list = cat === 'Todos' ? DISEN_PRODUCTS : DISEN_PRODUCTS.filter((p) => p.category === cat)

  const formatPrice = (n: number) => {
    const cop = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 })
    return cop.format(n)
  }

  return (
    <section id="productos" aria-labelledby="productos-titulo" className="page-x pb-16 pt-24 lg:pb-20 lg:pt-36">
      <motion.div
        className="grid gap-8"
        initial={reduced ? false : { opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 0.8, 0.24, 1] }}
      >
        <h2 id="productos-titulo" tabIndex={-1} className="text-[clamp(2rem,0.9rem+4.76vw,6rem)] leading-[.9]">
          <span className="block">Diseños únicos</span>
          <span className="block">hechos para ti</span>
        </h2>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,46ch)_1fr] lg:items-end lg:justify-between">
          <p className="text-[1.1875rem] leading-snug text-ink">
            Descubre nuestra colección de bordados y estampados artesanales, creados con pasión y dedicación en cada detalle.
          </p>
          <div role="group" aria-label="Filtrar por categoría" className="flex flex-wrap gap-2 lg:justify-end">
            {DISEN_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={cat === c}
                onClick={() => choose(c)}
                className={`btn min-h-12 px-5 ${cat === c ? 'btn-accent' : 'btn-ghost'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      <p className="sr-only" role="status">
        {list.length} {list.length === 1 ? 'producto' : 'productos'}{cat === 'Todos' ? '' : ` en ${cat}`}
      </p>

      <LayoutGroup>
        <motion.ul layout={!reduced} className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <DisenProductCard key={p.id} product={p} onDetails={onDetails} formatPrice={formatPrice} />
            ))}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>
    </section>
  )
}

/** Product card with 3D tilt, elevation, interactive spotlight, and real image support for Diseñarte */
function DisenProductCard({ product: p, onDetails, formatPrice }: { product: DisenProduct; onDetails: (p: DisenProduct, opener: HTMLElement) => void; formatPrice: (n: number) => string }) {
  const reduced = useReducedMotion() ?? false
  const el = useRef<HTMLLIElement | null>(null)
  const [on, setOn] = useState(false)
  const spring = { stiffness: 230, damping: 20, mass: 0.6 }
  const rx = useSpring(0, spring)
  const ry = useSpring(0, spring)
  const lift = useSpring(0, spring)
  const y = useTransform(lift, [0, 1], [0, -10])
  const scale = useTransform(lift, [0, 1], [1, 1.03])

  const aim = (e: React.PointerEvent) => {
    const r = el.current!.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.current!.style.setProperty('--mx', `${px * 100}%`)
    el.current!.style.setProperty('--my', `${py * 100}%`)
    if (!reduced) { ry.set((px - 0.5) * 16); rx.set(-(py - 0.5) * 16) }
  }
  const start = (e: React.PointerEvent) => { aim(e); setOn(true); if (!reduced) lift.set(1) }
  const end = () => { setOn(false); rx.set(0); ry.set(0); lift.set(0) }

  const img = disenImgOf(p)

  return (
    <motion.li
      ref={el}
      layout={!reduced}
      initial={reduced ? false : { opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={reduced ? undefined : { opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.35, ease: [0.22, 0.8, 0.24, 1] }}
      onPointerEnter={(e) => e.pointerType === 'mouse' && start(e)}
      onPointerMove={(e) => (e.pointerType === 'mouse' || on) && aim(e)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && end()}
      onPointerDown={(e) => e.pointerType !== 'mouse' && start(e)}
      onPointerUp={(e) => e.pointerType !== 'mouse' && window.setTimeout(end, 220)}
      onPointerCancel={end}
      onFocus={() => { setOn(true); if (!reduced) lift.set(1) }}
      onBlur={end}
      style={{ transformPerspective: 900, transformStyle: 'preserve-3d', rotateX: rx, rotateY: ry, y, scale }}
      className={`group relative flex list-none touch-manipulation flex-col rounded-[var(--radius-card)] bg-surface p-3 sm:p-4 ${on ? 'bg-surface-2 shadow-[0_28px_44px_-22px_rgba(0,0,0,.95)]' : ''} transition-colors duration-300`}
    >
      {/* Brillo: mancha de luz que sigue al cursor */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] transition-opacity duration-300" style={{ opacity: on ? 1 : 0 }}>
        <span className="absolute h-28 w-28 rounded-full bg-accent/30 blur-[36px]" style={{ left: 'var(--mx,50%)', top: 'var(--my,30%)', transform: 'translate(-50%,-50%)' }} />
      </span>

      {p.featured && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-accent px-3 py-1 text-[1.0625rem] font-semibold text-accent-ink sm:left-4 sm:top-4" style={{ transform: 'translateZ(60px)' }}>
          Destacado
        </span>
      )}

      <div className="relative" style={{ transform: 'translateZ(44px)' }}>
        {img ? (
          <img
            src={img}
            alt={p.alt}
            width={900}
            height={900}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="aspect-square w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="aspect-square w-full rounded-xl bg-surface-2 grid place-items-center overflow-hidden group-hover:bg-surface-3 transition-colors">
            <div className="flex flex-col items-center gap-3 p-4">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 transition-opacity group-hover:opacity-70">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="text-[0.75rem] text-soft/60 text-center leading-tight">Imagen próximamente</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-2 flex flex-1 flex-col" style={{ transform: 'translateZ(24px)' }}>
        <h3 className="text-[1.0625rem] font-bold leading-[1.05] sm:text-[1.375rem]">{p.name}</h3>
        <p className="mb-4 mt-2 tabular text-[1.375rem] font-semibold text-accent">{formatPrice(p.price)}</p>
        <button type="button" onClick={(e) => onDetails(p, e.currentTarget)} className="btn btn-ghost mt-auto w-full min-h-12 group-hover:bg-accent group-hover:text-accent-ink group-focus-within:bg-accent group-focus-within:text-accent-ink">
          Ver detalles
        </button>
      </div>
    </motion.li>
  )
}
