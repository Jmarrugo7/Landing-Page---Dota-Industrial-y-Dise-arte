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
    if (n <= 0) return 'Cotizar'
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
        <motion.ul layout={!reduced} className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 max-w-[1240px] mx-auto">
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
  const scale = useTransform(lift, [0, 1], [1, 1.02])

  const aim = (e: React.PointerEvent) => {
    const r = el.current!.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.current!.style.setProperty('--mx', `${px * 100}%`)
    el.current!.style.setProperty('--my', `${py * 100}%`)
    if (!reduced) { ry.set((px - 0.5) * 14); rx.set(-(py - 0.5) * 14) }
  }
  const start = (e: React.PointerEvent) => { aim(e); setOn(true); if (!reduced) lift.set(1) }
  const end = () => { setOn(false); rx.set(0); ry.set(0); lift.set(0) }

  const img = disenImgOf(p)

  return (
    <motion.li
      ref={el}
      layout={!reduced}
      initial={reduced ? false : { opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={reduced ? undefined : { opacity: 0, scale: 0.94 }}
      transition={{ duration: 0.35, ease: [0.22, 0.8, 0.24, 1] }}
      onPointerEnter={(e) => e.pointerType === 'mouse' && start(e)}
      onPointerMove={(e) => (e.pointerType === 'mouse' || on) && aim(e)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && end()}
      onPointerDown={(e) => e.pointerType !== 'mouse' && start(e)}
      onPointerUp={(e) => e.pointerType !== 'mouse' && window.setTimeout(end, 220)}
      onPointerCancel={end}
      onFocus={() => { setOn(true); if (!reduced) lift.set(1) }}
      onBlur={end}
      style={{ transformPerspective: 1000, transformStyle: 'preserve-3d', rotateX: rx, rotateY: ry, y, scale }}
      className={`group relative flex list-none touch-manipulation flex-col rounded-[2rem] bg-surface/90 border border-white/10 p-5 sm:p-7 ${
        on ? 'bg-surface-2/95 border-accent/60 shadow-[0_30px_60px_-15px_rgba(232,97,140,0.2)]' : 'shadow-xl'
      } transition-all duration-300`}
    >
      {/* Brillo: mancha de luz que sigue al cursor */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] transition-opacity duration-300" style={{ opacity: on ? 1 : 0 }}>
        <span className="absolute h-40 w-40 rounded-full bg-accent/25 blur-[45px]" style={{ left: 'var(--mx,50%)', top: 'var(--my,30%)', transform: 'translate(-50%,-50%)' }} />
      </span>

      {p.featured && (
        <span className="absolute left-4 top-4 z-10 rounded-full bg-accent px-3.5 py-1 text-xs sm:text-sm font-bold text-accent-ink uppercase tracking-wider shadow-lg" style={{ transform: 'translateZ(60px)' }}>
          Destacado
        </span>
      )}

      {/* Imagen panorámica de alta calidad (16:10 para lucir las fotografías de categoría) */}
      <div className="relative overflow-hidden rounded-2xl bg-surface-2 border border-white/5" style={{ transform: 'translateZ(44px)' }}>
        {img ? (
          <img
            src={img}
            alt={p.alt}
            width={1537}
            height={1025}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="aspect-[16/10] w-full rounded-2xl bg-surface-2 grid place-items-center overflow-hidden">
            <div className="flex flex-col items-center gap-3 p-4">
              <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="opacity-40 transition-opacity group-hover:opacity-70">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <span className="text-xs text-soft/60 text-center leading-tight">Imagen próximamente</span>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 flex flex-1 flex-col" style={{ transform: 'translateZ(24px)' }}>
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display font-extrabold text-2xl sm:text-3xl leading-[1.05] tracking-tight uppercase text-white">
            {p.name}
          </h3>
          <span className="shrink-0 text-sm sm:text-base font-bold text-accent uppercase tracking-wider">
            {formatPrice(p.price)}
          </span>
        </div>

        {p.description && (
          <p className="mt-2 text-soft text-sm sm:text-base leading-relaxed line-clamp-2">
            {p.description}
          </p>
        )}

        {p.features && p.features.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
            {p.features.slice(0, 3).map((f) => (
              <span key={f} className="inline-flex items-center rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs text-soft font-medium">
                {f}
              </span>
            ))}
            {p.features.length > 3 && (
              <span className="inline-flex items-center rounded-full bg-accent/15 border border-accent/25 px-2.5 py-1 text-xs text-accent font-bold">
                +{p.features.length - 3} más
              </span>
            )}
          </div>
        )}

        <div className="mt-auto pt-6">
          <button
            type="button"
            onClick={(e) => onDetails(p, e.currentTarget)}
            className="btn btn-ghost w-full min-h-12 text-sm sm:text-base font-bold group-hover:bg-accent group-hover:text-accent-ink transition-all active:scale-[0.98]"
          >
            Ver detalles
          </button>
        </div>
      </div>
    </motion.li>
  )
}
