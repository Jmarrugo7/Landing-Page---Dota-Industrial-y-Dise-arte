import { useRef, useState } from 'react'
import { motion, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { formatPrice, imgOf, type Product } from '../data/products'

const LIFT = 'bg-surface-2 shadow-[0_28px_44px_-22px_rgba(0,0,0,.95)]' // taste-skill-ignore: elevación al hover pedida en el brief (la tarjeta flota)

interface Props { product: Product; onDetails: (p: Product, opener: HTMLElement) => void; ref?: React.Ref<HTMLLIElement> }

/** Tarjeta con inclinación 3D, elevación y brillo que sigue al cursor (o al dedo en táctil). */
export default function ProductCard({ product: p, onDetails, ref }: Props) {
  const reduced = useReducedMotion() ?? false
  const el = useRef<HTMLLIElement | null>(null)
  const setRef = (node: HTMLLIElement | null) => {
    el.current = node
    if (typeof ref === 'function') ref(node)
    else if (ref) (ref as { current: HTMLLIElement | null }).current = node
  }
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

  return (
    <motion.li
      ref={setRef}
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
      className={`group relative flex list-none touch-manipulation flex-col rounded-[var(--radius-card)] bg-surface p-3 sm:p-4 ${on ? LIFT : ''} transition-colors duration-300`}
    >
      {/* brillo: mancha plana desenfocada que sigue al puntero */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit] transition-opacity duration-300" style={{ opacity: on ? 1 : 0 }}>
        <span className="absolute h-28 w-28 rounded-full bg-accent/30 blur-[36px]" style={{ left: 'var(--mx,50%)', top: 'var(--my,30%)', transform: 'translate(-50%,-50%)' }} />
      </span>
      {p.featured && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-accent px-3 py-1 text-[1.0625rem] font-semibold text-accent-ink sm:left-4 sm:top-4" style={{ transform: 'translateZ(60px)' }}>
          Destacado
        </span>
      )}
      <div className="relative" style={{ transform: 'translateZ(44px)' }}>
        <img src={imgOf(p)} alt={p.alt} width={900} height={900} loading="lazy" decoding="async" draggable={false} className="aspect-square w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105" />
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
