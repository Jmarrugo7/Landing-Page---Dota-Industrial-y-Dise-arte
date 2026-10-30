import { useState } from 'react'
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from 'framer-motion'
import { CATEGORIES, PRODUCTS, type Product } from '../data/products'
import ProductCard from './ProductCard'

interface Props { onDetails: (p: Product, opener: HTMLElement) => void }

export default function ProductsSection({ onDetails }: Props) {
  const reduced = useReducedMotion()
  type Cat = (typeof CATEGORIES)[number]
  const [cat, setCat] = useState<Cat>(() => {
    const q = new URLSearchParams(window.location.search).get('categoria')
    return (CATEGORIES.find((c) => c.toLowerCase() === q?.toLowerCase()) as Cat | undefined) ?? 'Todos'
  })
  const choose = (c: Cat) => {
    setCat(c)
    const url = new URL(window.location.href)
    if (c === 'Todos') url.searchParams.delete('categoria')
    else url.searchParams.set('categoria', c.toLowerCase())
    history.replaceState(null, '', url)
  }
  const list = cat === 'Todos' ? PRODUCTS : PRODUCTS.filter((p) => p.category === cat)

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
          <div role="group" aria-label="Filtrar por categoría" className="flex flex-wrap gap-2 lg:justify-end">
            {CATEGORIES.map((c) => (
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
              <ProductCard key={p.id} product={p} onDetails={onDetails} />
            ))}
          </AnimatePresence>
        </motion.ul>
      </LayoutGroup>
    </section>
  )
}
