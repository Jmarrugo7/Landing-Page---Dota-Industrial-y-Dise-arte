import { lazy, Suspense, useEffect, useId, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { formatPrice, imgOf, type Product } from '../data/products'
import { useWebGL } from '../hooks/useWebGL'
import { ErrorBoundary } from './ErrorBoundary'

const ModelViewer = lazy(() => import('../three/ModelViewer'))

const DIALOG_SHADOW = 'shadow-[0_40px_90px_-20px_rgba(0,0,0,.9)]' // taste-skill-ignore: diálogo modal (overlay real)

interface Props { product: Product; onClose: () => void }

const FOCUSABLE = 'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"]),input,select,textarea'

export default function ProductModal({ product: p, onClose }: Props) {
  const reduced = useReducedMotion() ?? false
  const webgl = useWebGL()
  const titleId = useId()
  const descId = useId()
  const dialog = useRef<HTMLDivElement>(null)
  const closeBtn = useRef<HTMLButtonElement>(null)
  const [view, setView] = useState<'3d' | 'img'>('3d')
  const [viewerFailed, setViewerFailed] = useState(false)

  useEffect(() => {
    closeBtn.current?.focus()
    const root = document.getElementById('app-root')
    root?.setAttribute('inert', '')
    const prev = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'
    return () => {
      root?.removeAttribute('inert')
      document.documentElement.style.overflow = prev
    }
  }, [])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') { e.stopPropagation(); onClose(); return }
    if (e.key !== 'Tab') return
    const items = Array.from(dialog.current!.querySelectorAll<HTMLElement>(FOCUSABLE)).filter((x) => x.offsetParent !== null)
    if (!items.length) return
    const first = items[0], last = items[items.length - 1]
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
  }

  const show3d = view === '3d' && webgl && !viewerFailed

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[70] grid place-items-center overscroll-contain bg-black/80 p-3 sm:p-6"
      initial={reduced ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={reduced ? undefined : { opacity: 0 }}
      transition={{ duration: 0.25 }}
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <motion.div
        ref={dialog}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        onKeyDown={onKeyDown}
        initial={reduced ? false : { opacity: 0, y: 40, rotateX: 8, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
        exit={reduced ? undefined : { opacity: 0, y: 24, scale: 0.97 }}
        transition={{ duration: 0.4, ease: [0.22, 0.8, 0.24, 1] }}
        style={{ transformPerspective: 1200 }}
        className={`relative grid max-h-[94svh] w-full max-w-[960px] overflow-y-auto overscroll-contain rounded-[var(--radius-card)] bg-surface ${DIALOG_SHADOW} md:grid-cols-[1.05fr_1fr]`}
      >
        <div className="relative m-3 min-h-[280px] overflow-hidden rounded-[1.1rem] bg-surface-2 md:m-4 md:min-h-[460px]">
          {show3d ? (
            <ErrorBoundary fallback={null} onError={() => setViewerFailed(true)}>
              <Suspense fallback={<img src={imgOf(p)} alt="" className="absolute inset-0 h-full w-full object-contain p-6 opacity-60" />}>
                <ModelViewer kind={p.id} label={p.name} reduced={reduced} />
              </Suspense>
            </ErrorBoundary>
          ) : (
            <img src={imgOf(p)} alt={p.alt} width={900} height={900} className="absolute inset-0 h-full w-full object-contain p-6" />
          )}
          {webgl && !viewerFailed && (
            <div role="group" aria-label="Tipo de vista" className="absolute bottom-3 left-3 flex gap-1 rounded-full bg-bg p-1">
              {(['3d', 'img'] as const).map((v) => (
                <button key={v} type="button" aria-pressed={view === v} onClick={() => setView(v)} className={`min-h-10 rounded-full px-4 font-semibold transition-colors ${view === v ? 'bg-accent text-accent-ink' : 'text-ink hover:bg-surface-3'}`}>
                  {v === '3d' ? 'Vista 3D' : 'Imagen'}
                </button>
              ))}
            </div>
          )}
          {show3d && <p className="pointer-events-none absolute right-3 top-3 rounded-full bg-bg px-3 py-1 text-[1.0625rem] text-ink max-sm:hidden">Arrastra para girar</p>}
        </div>

        <div className="flex flex-col p-6 pt-4 md:p-8 md:pt-10">
          <button ref={closeBtn} type="button" onClick={onClose} aria-label="Cerrar detalles" className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-surface-2 transition hover:bg-surface-3 active:scale-95">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
          <h2 id={titleId} className="pr-14 text-[2rem] leading-[.95]">{p.name}</h2>
          <p className="mt-3 tabular text-[2rem] font-bold text-accent">{formatPrice(p.price)}</p>
          <p id={descId} className="mt-4 text-[1.1875rem] leading-snug text-ink">{p.description}</p>
          <ul className="mt-6 grid gap-3 text-[1.0625rem]">
            {p.features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12.5l5 5L20 6.5" /></svg>
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-8">
            <button type="button" onClick={onClose} className="btn btn-accent min-h-14 w-full px-7">
              Cerrar
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body,
  )
}
