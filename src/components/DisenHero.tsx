import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { DISEN_CAROUSEL, disenImgOf, type DisenProduct } from '../data/disenProducts'
import { useInView } from '../hooks/useInView'
import { BRANDS, getWhatsAppUrl } from '../data/brands'
import { WhatsAppIcon } from './WhatsAppIcon'

interface Props { modalOpen: boolean; onDetails: (p: DisenProduct, opener: HTMLElement) => void }

const ease = [0.22, 0.8, 0.24, 1] as const

export default function DisenHero({ modalOpen, onDetails }: Props) {
  const reduced = useReducedMotion() ?? false
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)
  const [active, setActive] = useState(0)
  const [userPaused, setUserPaused] = useState(false)
  const [hover, setHover] = useState(false)
  const [hidden, setHidden] = useState(false)
  const n = DISEN_CAROUSEL.length
  const p = DISEN_CAROUSEL[active]

  useEffect(() => {
    const f = () => setHidden(document.hidden)
    document.addEventListener('visibilitychange', f)
    return () => document.removeEventListener('visibilitychange', f)
  }, [])

  const go = useCallback((i: number) => setActive(((i % n) + n) % n), [n])
  const autoplay = !reduced && !userPaused && !hover && inView && !hidden && !modalOpen

  useEffect(() => {
    if (!autoplay) return
    const t = window.setTimeout(() => go(active + 1), 4500)
    return () => clearTimeout(t)
  }, [autoplay, active, go])

  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById('productos')
    if (!el) return
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
    history.replaceState(null, '', '#productos')
    window.setTimeout(() => document.getElementById('productos-titulo')?.focus({ preventScroll: true }), reduced ? 0 : 700)
  }

  const enter = (d: number) => (reduced ? {} : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease } })

  /** SVG placeholder for products without images */
  const ProductPlaceholder = ({ item }: { item: DisenProduct }) => (
    <div className="disen-product-placeholder">
      <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
        <rect width="80" height="80" rx="16" fill="rgba(232,97,140,0.12)" />
        <path d="M40 22c-4 0-7.5 2-9.5 5.5C28.5 31 28 35 30 38.5l10 17 10-17c2-3.5 1.5-7.5-.5-11S44 22 40 22z" fill="rgba(232,97,140,0.3)" stroke="rgba(232,97,140,0.6)" strokeWidth="1.5" />
        <circle cx="40" cy="34" r="4" fill="rgba(232,97,140,0.5)" />
      </svg>
      <span className="disen-placeholder-name">{item.name}</span>
    </div>
  )

  return (
    <section
      id="inicio"
      ref={ref}
      aria-labelledby="hero-titulo"
      className="hero-section relative isolate overflow-hidden"
    >
      {/* ─── Imagen de fondo cinematográfica Diseñarte ─── */}
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/assets/products/Fondo%20Hero%20Dise%C3%B1arte.png"
          alt=""
          width={1672}
          height={941}
          fetchPriority="high"
          decoding="async"
          className="hero-bg-img"
          style={{ objectPosition: 'center center' }}
        />
        {/* Gradiente oscuro izquierdo para legibilidad del texto */}
        <div className="disen-hero-bg-gradient-left" />
        {/* Gradiente inferior para transición suave */}
        <div className="hero-bg-gradient-bottom" />
      </div>

      {/* ─── Tagline esquina superior derecha ─── */}
      <motion.div
        {...enter(0.5)}
        className="hero-tagline"
        aria-hidden="true"
      >
        <span className="hero-tagline-small">Arte y creatividad</span>
        <span className="hero-tagline-big" style={{ color: 'var(--color-accent)' }}>en cada detalle</span>
      </motion.div>

      {/* ─── Texto principal ─── */}
      <div className="page-x hero-content relative z-10">
        <motion.p {...enter(0)} className="disen-hero-subtitle-top">Bordado & Estampado</motion.p>
        <motion.h1 id="hero-titulo" {...enter(0.05)} className="hero-title">
          <span className="block text-accent italic whitespace-nowrap">HECHO CON AMOR,</span>
          <span className="block whitespace-nowrap">PUNTO A PUNTO</span>
        </motion.h1>
        <motion.p {...enter(0.18)} className="hero-subtitle">
          Bordados personalizados, estampados únicos y diseños que cuentan tu historia. Cada puntada es una obra de arte.
        </motion.p>
        <motion.div {...enter(0.3)} className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#productos" onClick={scrollToProducts} className="btn btn-accent group min-h-14 px-8">
            Ver colección
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href={getWhatsAppUrl(BRANDS.disenarte.whatsappPhone, BRANDS.disenarte.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp group min-h-14 px-7 gap-2.5"
            aria-label="Contactar por WhatsApp con Diseñarte"
          >
            <WhatsAppIcon className="h-5 w-5 fill-current" />
            <span>WhatsApp</span>
          </a>
        </motion.div>
      </div>

      {/* ─── Showcase de producto destacado ─── */}
      <div className="hero-product-stage">
        <div className="hero-product-shadow" aria-hidden="true" />
        <div className="hero-product-reveal">
          <div className="absolute inset-0">
            <AnimatePresence mode="popLayout">
              {disenImgOf(p) ? (
                <motion.img
                  key={p.id}
                  src={disenImgOf(p)}
                  alt={p.alt}
                  width={1000}
                  height={1000}
                  fetchPriority="high"
                  decoding="async"
                  initial={reduced ? false : { opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduced ? undefined : { opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="hero-product-img object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.65)]"
                />
              ) : (
                <motion.div
                  key={p.id}
                  initial={reduced ? false : { opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduced ? undefined : { opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                  className="absolute inset-0 grid place-items-center"
                >
                  <ProductPlaceholder item={p} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ─── Carrusel simplificado para Diseñarte ─── */}
      <div
        className="hero-carousel page-x"
        role="region"
        aria-roledescription="carrusel"
        aria-label="Productos destacados"
        onPointerEnter={(e) => { if (e.pointerType === 'mouse') setHover(true) }}
        onPointerLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') { go(active + 1); e.preventDefault() }
          if (e.key === 'ArrowLeft') { go(active - 1); e.preventDefault() }
        }}
      >
        <DisenCoverflow items={DISEN_CAROUSEL} active={active} onSelect={go} />
      </div>
    </section>
  )
}

/** Simplified coverflow for Diseñarte using placeholder cards */
function DisenCoverflow({ items, active, onSelect }: { items: DisenProduct[]; active: number; onSelect: (i: number) => void }) {
  const n = items.length
  const half = Math.floor(n / 2)
  const start = useRef<{ x: number; t: number } | null>(null)
  const swiped = useRef(false)

  return (
    <div className="relative flex flex-col items-center w-full">
      <div className="relative w-full flex items-center justify-center">
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
                      ? 'bg-surface-3/90 outline outline-[3px] outline-accent shadow-[0_0_24px_rgba(232,97,140,0.3)]'
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
                  {/* Product tile: image if available, else placeholder icon */}
                  {disenImgOf(p) ? (
                    <div className="flex flex-col items-center justify-center h-full w-full p-2">
                      <img
                        src={disenImgOf(p)}
                        alt={p.alt}
                        className="h-16 w-16 sm:h-20 sm:w-20 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] transition-transform duration-300"
                      />
                      <span className="text-[0.65rem] text-soft text-center leading-tight px-1 line-clamp-1 mt-1 font-medium">{p.name}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full w-full gap-1">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                      <span className="text-[0.65rem] text-soft text-center leading-tight px-1 line-clamp-2">{p.name}</span>
                    </div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

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

      {/* Indicadores */}
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
