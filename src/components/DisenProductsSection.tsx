import { useRef, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { DISEN_CATEGORIES, DISEN_PRODUCTS, disenImgOf, type DisenProduct } from '../data/disenProducts'

const LIFT = 'bg-surface-2 shadow-[0_28px_44px_-22px_rgba(0,0,0,.95)]'
const BATCH_SIZE = 15

interface Props { onDetails: (p: DisenProduct, opener: HTMLElement) => void }

export default function DisenProductsSection({ onDetails }: Props) {
  const reduced = useReducedMotion()
  type Cat = (typeof DISEN_CATEGORIES)[number]
  const [cat, setCat] = useState<Cat>('Todos')
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE)

  const choose = (c: Cat) => {
    setCat(c)
    setVisibleCount(BATCH_SIZE)
  }

  const list = cat === 'Todos' ? DISEN_PRODUCTS : DISEN_PRODUCTS.filter((p) => p.category === cat)
  const visibleList = list.slice(0, visibleCount)
  const hasMore = visibleCount < list.length
  const remaining = list.length - visibleCount
  const progressPercent = Math.min(100, Math.round((visibleList.length / list.length) * 100))

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, list.length))
  }

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

      <p className="sr-only" role="status" aria-live="polite">
        Mostrando {visibleList.length} de {list.length} {list.length === 1 ? 'producto' : 'productos'}{cat === 'Todos' ? '' : ` en ${cat}`}
      </p>

      {/* Grid de 5 columnas en escritorio como Dota */}
      <LayoutGroup>
        <motion.ul layout={!reduced} className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {visibleList.map((p) => (
              <DisenProductCard key={p.id} product={p} onDetails={onDetails} formatPrice={formatPrice} />
            ))}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>

      {/* Paginación progresiva / Cargar más */}
      {list.length > BATCH_SIZE && (
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
          <div className="flex flex-col items-center gap-2 max-w-xs w-full">
            <span className="text-sm font-medium text-soft">
              Mostrando <strong className="text-ink font-bold">{visibleList.length}</strong> de <strong className="text-ink font-bold">{list.length}</strong> productos
            </span>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-2 border border-white/5">
              <div
                className="h-full bg-accent rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {hasMore ? (
            <button
              type="button"
              onClick={handleLoadMore}
              className="btn btn-ghost hover:btn-accent min-h-14 px-8 font-bold text-base shadow-lg transition-all active:scale-95 group flex items-center gap-3"
            >
              <span>Cargar más productos</span>
              <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-soft group-hover:bg-accent-ink/20 group-hover:text-accent-ink transition-colors font-semibold">
                +{Math.min(BATCH_SIZE, remaining)}
              </span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-y-0.5"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          ) : (
            <div className="flex flex-col items-center gap-1.5 pt-2">
              <p className="text-sm font-medium text-soft flex items-center gap-2">
                <span className="text-accent text-base font-bold">✓</span>
                Has visto todos los productos disponibles ({list.length})
              </p>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('productos')
                  el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="text-xs text-accent hover:underline mt-1 font-medium cursor-pointer"
              >
                ↑ Volver al inicio de la lista
              </button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}

/** Product card with 3D tilt, elevation, interactive spotlight, matching Dota card proportions */
function DisenProductCard({
  product: p,
  onDetails,
  formatPrice,
}: {
  product: DisenProduct
  onDetails: (p: DisenProduct, opener: HTMLElement) => void
  formatPrice: (n: number) => string
}) {
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
    if (!reduced) {
      ry.set((px - 0.5) * 16)
      rx.set(-(py - 0.5) * 16)
    }
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
      onPointerMove={(e) => e.pointerType === 'mouse' && aim(e)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && end()}
      onFocus={() => { setOn(true); if (!reduced) lift.set(1) }}
      onBlur={end}
      style={{ transformPerspective: 900, transformStyle: 'preserve-3d', rotateX: rx, rotateY: ry, y, scale }}
      className={`group relative flex list-none touch-manipulation flex-col rounded-[var(--radius-card)] bg-surface p-3 sm:p-4 ${on ? LIFT : ''} transition-colors duration-300`}
    >
      {/* brillo: mancha plana desenfocada que sigue al puntero */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] transition-opacity duration-300" style={{ opacity: on ? 1 : 0 }}>
        <span className="absolute h-28 w-28 rounded-full bg-accent/30 blur-[36px]" style={{ left: 'var(--mx,50%)', top: 'var(--my,30%)', transform: 'translate(-50%,-50%)' }} />
      </span>

      {p.featured && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-accent px-3 py-1 text-xs sm:text-[0.95rem] font-bold text-accent-ink uppercase tracking-wide sm:left-4 sm:top-4" style={{ transform: 'translateZ(60px)' }}>
          Destacado
        </span>
      )}

      {/* Imagen cuadrada proporcionada para fotos de producto */}
      <div className="relative overflow-hidden rounded-xl bg-surface-2" style={{ transform: 'translateZ(44px)' }}>
        {img ? (
          <img
            src={img}
            alt={p.alt}
            width={600}
            height={600}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="aspect-square w-full grid place-items-center">
            <span className="text-xs text-soft/50">Imagen próximamente</span>
          </div>
        )}
      </div>

      <div className="mt-2 flex flex-1 flex-col" style={{ transform: 'translateZ(24px)' }}>
        <h3 className="text-[1.0625rem] font-bold leading-[1.05] sm:text-[1.375rem]">{p.name}</h3>
        <p className="mb-4 mt-2 tabular text-[1.375rem] font-semibold text-accent">{formatPrice(p.price)}</p>
        <button
          type="button"
          onClick={(e) => onDetails(p, e.currentTarget)}
          className="btn btn-ghost mt-auto w-full min-h-12 group-hover:bg-accent group-hover:text-accent-ink group-focus-within:bg-accent group-focus-within:text-accent-ink"
        >
          Ver detalles
        </button>
      </div>
    </motion.li>
  )
}
