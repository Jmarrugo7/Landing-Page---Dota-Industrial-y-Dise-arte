import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { CAROUSEL, imgOf, type Product } from '../data/products'
import { useInView } from '../hooks/useInView'
import { useWebGL } from '../hooks/useWebGL'
import Coverflow from './Coverflow'
import { ErrorBoundary } from './ErrorBoundary'
import { BRANDS, getWhatsAppUrl } from '../data/brands'
import { WhatsAppIcon } from './WhatsAppIcon'

const HeroStage = lazy(() => import('../three/HeroStage'))

interface Props { modalOpen: boolean; onDetails: (p: Product, opener: HTMLElement) => void }

const ease = [0.22, 0.8, 0.24, 1] as const

export default function Hero({ modalOpen, onDetails }: Props) {
  const reduced = useReducedMotion() ?? false
  const webgl = useWebGL()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref)
  const [active, setActive] = useState(0)
  const [userPaused, setUserPaused] = useState(false)
  const [hover, setHover] = useState(false)
  const [mount3d, setMount3d] = useState(false)
  const [ready, setReady] = useState(false)
  const [failed, setFailed] = useState(false)
  const [hidden, setHidden] = useState(false)
  const n = CAROUSEL.length
  const p = CAROUSEL[active]

  // three.js se descarga después del primer pintado
  useEffect(() => {
    if (!webgl) return
    type IdleWin = Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number; cancelIdleCallback?: (n: number) => void }
    const w = window as IdleWin
    if (w.requestIdleCallback) {
      const id = w.requestIdleCallback(() => setMount3d(true), { timeout: 1500 })
      return () => w.cancelIdleCallback?.(id)
    }
    const id = window.setTimeout(() => setMount3d(true), 400)
    return () => window.clearTimeout(id)
  }, [webgl])

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

  const use3d = false
  const showPoster = true

  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById('productos')
    if (!el) return
    el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
    history.replaceState(null, '', '#productos')
    window.setTimeout(() => document.getElementById('productos-titulo')?.focus({ preventScroll: true }), reduced ? 0 : 700)
  }

  const enter = (d: number) => (reduced ? {} : { initial: { opacity: 0, y: 28 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease } })

  return (
    <section
      id="inicio"
      ref={ref}
      aria-labelledby="hero-titulo"
      className="hero-section relative isolate overflow-hidden"
    >
      {/* ─── Imagen de fondo cinematográfica ─── */}
      <div className="hero-bg" aria-hidden="true">
        <img
          src="/assets/products/Fondo-Hero.png"
          alt=""
          width={1920}
          height={720}
          fetchPriority="high"
          decoding="async"
          className="hero-bg-img"
        />
        {/* Gradiente oscuro izquierdo para legibilidad del texto */}
        <div className="hero-bg-gradient-left" />
        {/* Gradiente inferior para transición suave */}
        <div className="hero-bg-gradient-bottom" />
      </div>

      {/* ─── Tagline esquina superior derecha ─── */}
      <motion.div
        {...enter(0.5)}
        className="hero-tagline"
        aria-hidden="true"
      >
        <span className="hero-tagline-small">Protección y calidad</span>
        <span className="hero-tagline-big">para tu trabajo</span>
      </motion.div>

      {/* ─── Texto principal ─── */}
      <div className="page-x hero-content relative z-10">
        <motion.h1 id="hero-titulo" {...enter(0.05)} className="hero-title">
          <span className="block text-accent italic whitespace-nowrap">TU SEGURIDAD</span>
          <span className="block whitespace-nowrap">ES NUESTRA</span>
        </motion.h1>
        <motion.p {...enter(0.18)} className="hero-subtitle">
          Herramientas, materiales eléctricos y todo lo que necesitas para construir, reparar y mejorar tus proyectos de forma segura.
        </motion.p>
        <motion.div {...enter(0.3)} className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#productos" onClick={scrollToProducts} className="btn btn-accent group min-h-14 px-8">
            Ver productos
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a
            href={getWhatsAppUrl(BRANDS.dota.whatsappPhone, BRANDS.dota.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp group min-h-14 px-7 gap-2.5"
            aria-label="Contactar por WhatsApp con Dota Industrial"
          >
            <WhatsAppIcon className="h-5 w-5 fill-current" />
            <span>WhatsApp</span>
          </a>
        </motion.div>
      </div>

      {/* ─── Escena del producto destacado (sobre el pedestal) ─── */}
      <div className="hero-product-stage">
        <div className="hero-product-shadow" aria-hidden="true" />
        <div className="hero-product-reveal">
          <div className="absolute inset-0">
            <AnimatePresence mode="popLayout">
              <motion.img
                key={p.id}
                src={imgOf(p)}
                alt={p.alt}
                width={1254}
                height={1254}
                fetchPriority="high"
                decoding="async"
                initial={reduced ? false : { opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduced ? undefined : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
                className="hero-product-img"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ─── Carrusel ─── */}
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
        <Coverflow items={CAROUSEL} active={active} onSelect={go} />
      </div>
    </section>
  )
}

