import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion'
import { CATEGORIES, PRODUCTS, type Product } from '../data/products'
import ProductCard from './ProductCard'

interface Props { onDetails: (p: Product, opener: HTMLElement) => void }

const BATCH_SIZE = 12

export default function ProductsSection({ onDetails }: Props) {
  const reduced = useReducedMotion()
  type Cat = (typeof CATEGORIES)[number]
  const [cat, setCat] = useState<Cat>(() => {
    const q = new URLSearchParams(window.location.search).get('categoria')
    return (CATEGORIES.find((c) => c.toLowerCase() === q?.toLowerCase()) as Cat | undefined) ?? 'Todos'
  })
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE)

  const choose = (c: Cat) => {
    setCat(c)
    setVisibleCount(BATCH_SIZE)
    const url = new URL(window.location.href)
    if (c === 'Todos') url.searchParams.delete('categoria')
    else url.searchParams.set('categoria', c.toLowerCase())
    history.replaceState(null, '', url)
  }

  const list = cat === 'Todos' ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat)
  const visibleList = list.slice(0, visibleCount)
  const hasMore = visibleCount < list.length
  const remaining = list.length - visibleCount
  const progressPercent = Math.min(100, Math.round((visibleList.length / list.length) * 100))

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + BATCH_SIZE, list.length))
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
          <span className="block">Todo lo que necesitas</span>
          <span className="block">en un solo lugar</span>
        </h2>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,46ch)_1fr] lg:items-end lg:justify-between">
          <p className="text-[1.1875rem] leading-snug text-ink">
            Explora nuestra selección de productos, diseñados para ofrecerte calidad, resistencia y el mejor rendimiento.
          </p>
          <div
            role="group"
            aria-label="Filtrar por categoría"
            className="flex gap-2 lg:flex-wrap lg:justify-end overflow-x-auto max-lg:pb-2 max-lg:-mx-[max(var(--margin-page),env(safe-area-inset-left))] max-lg:px-[max(var(--margin-page),env(safe-area-inset-left))] scrollbar-hide snap-x snap-mandatory"
          >
            {CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={cat === c}
                onClick={() => choose(c)}
                className={`btn min-h-12 px-5 whitespace-nowrap snap-start shrink-0 ${cat === c ? 'btn-accent' : 'btn-ghost'}`}
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

      <LayoutGroup>
        <motion.ul layout={!reduced} className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <AnimatePresence mode="popLayout">
            {visibleList.map((p) => (
              <ProductCard key={p.id} product={p} onDetails={onDetails} />
            ))}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>

      {/* ─── Paginación progresiva / Cargar más ─── */}
      {list.length > BATCH_SIZE && (
        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
          {/* Contador y barra de progreso */}
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

          {/* Botón Cargar Más */}
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
