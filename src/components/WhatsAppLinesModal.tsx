import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { DOTA_WHATSAPP_LINES, getWhatsAppUrl, BRANDS } from '../data/brands'
import { WhatsAppIcon } from './WhatsAppIcon'
import { useWhatsAppModal } from '../context/WhatsAppModalContext'

export default function WhatsAppLinesModal() {
  const { isOpen, message, closeWhatsAppModal } = useWhatsAppModal()
  const reduced = useReducedMotion() ?? false
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  const activeMessage = message || BRANDS.dota.whatsappMessage

  useEffect(() => {
    if (!isOpen) return

    closeBtnRef.current?.focus()
    const prevOverflow = document.documentElement.style.overflow
    document.documentElement.style.overflow = 'hidden'

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.stopPropagation()
        closeWhatsAppModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.documentElement.style.overflow = prevOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, closeWhatsAppModal])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center p-3 sm:p-5 overflow-y-auto overscroll-contain bg-black/80 backdrop-blur-md"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeWhatsAppModal()
          }}
        >
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="whatsapp-lines-title"
            aria-describedby="whatsapp-lines-desc"
            initial={reduced ? false : { opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.22, 0.8, 0.24, 1] }}
            className="relative w-full max-w-[520px] rounded-3xl bg-[#0f1216] border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(37,211,102,0.18)] overflow-hidden my-auto"
          >
            {/* Top glowing banner decorative bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#ffc400] via-[#25D366] to-[#ffc400]" />

            {/* Close 'X' Button */}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={closeWhatsAppModal}
              aria-label="Cerrar selector de líneas"
              className="absolute right-4 top-4 z-10 grid h-10 w-10 place-items-center rounded-full bg-red-600/20 text-red-400 border border-red-500/30 transition-all hover:bg-red-600 hover:text-white hover:border-red-600 hover:shadow-[0_0_15px_rgba(220,38,38,0.45)] active:scale-95 cursor-pointer"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <div className="p-6 sm:p-7">
              {/* Header */}
              <div className="flex items-start gap-4 mb-6 pr-8">
                <div className="relative flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#25D366] text-white shadow-[0_4px_20px_rgba(37,211,102,0.4)]">
                  <WhatsAppIcon className="h-7 w-7 fill-current" />
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366] border-2 border-[#0f1216]" />
                  </span>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 text-[0.72rem] font-bold uppercase tracking-wider text-[#25D366] bg-[#25D366]/10 px-2.5 py-0.5 rounded-full border border-[#25D366]/20 mb-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#25D366] animate-pulse" />
                    Asesores Disponibles
                  </div>
                  <h2 id="whatsapp-lines-title" className="font-display font-black text-2xl sm:text-[1.75rem] uppercase leading-tight text-white tracking-tight">
                    Líneas de Atención
                  </h2>
                  <p id="whatsapp-lines-desc" className="text-xs sm:text-sm text-soft mt-1 leading-snug">
                    Elige la línea de WhatsApp de tu preferencia para atender tu solicitud en Dota Industrial:
                  </p>
                </div>
              </div>

              {/* 4 Lines List */}
              <div className="grid gap-2.5 sm:gap-3">
                {DOTA_WHATSAPP_LINES.map((line) => (
                  <a
                    key={line.id}
                    href={getWhatsAppUrl(line.number, activeMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeWhatsAppModal}
                    className="group flex items-center justify-between gap-3 p-3.5 sm:p-4 rounded-2xl bg-[#181c22] border border-white/5 hover:border-[#25D366]/70 hover:bg-[#15231a] transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow-[0_4px_22px_rgba(37,211,102,0.22)]"
                  >
                    <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                      <div className="flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-colors duration-200">
                        <WhatsAppIcon className="h-6 w-6 fill-current transition-colors" />
                      </div>
                      <div className="min-w-0">
                        <span className="block font-display font-bold text-base sm:text-[1.1rem] text-white group-hover:text-[#25D366] transition-colors leading-tight">
                          {line.label}
                        </span>
                        <p className="font-mono text-sm sm:text-[0.95rem] font-bold text-[#ffc400] tracking-wide mt-0.5">
                          {line.formatted}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30 group-hover:bg-[#25D366] group-hover:text-[#111214] transition-all duration-200 shadow-sm">
                        Chatear
                        <svg className="ml-1 w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Bottom notice & cancel */}
              <div className="mt-5 pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                <span className="text-[0.75rem] text-soft flex items-center justify-center sm:justify-start gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-[#ffc400] shrink-0" />
                  Atención rápida de lunes a domingo
                </span>
                <button
                  type="button"
                  onClick={closeWhatsAppModal}
                  className="px-6 py-2 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 active:scale-95 transition-all shadow-[0_4px_16px_rgba(220,38,38,0.4)] hover:shadow-[0_4px_22px_rgba(220,38,38,0.6)] border border-red-500/40 cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

