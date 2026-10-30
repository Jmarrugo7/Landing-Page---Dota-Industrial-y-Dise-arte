import { createPortal } from 'react-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'

const TOAST_SHADOW = 'shadow-[0_18px_40px_-12px_rgba(0,0,0,.8)]' // taste-skill-ignore: aviso flotante (overlay real)

export default function Toast({ message, id }: { message: string; id: number }) {
  const reduced = useReducedMotion()
  return createPortal(
    <div role="status" aria-live="polite" className="pointer-events-none fixed inset-x-0 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-[90] flex justify-center px-4">
      <AnimatePresence>
        {message && (
          <motion.p
            key={id}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: 16 }}
            transition={{ duration: 0.3 }}
            className={`max-w-[34rem] rounded-2xl bg-accent px-5 py-3.5 text-center text-[1.0625rem] font-semibold leading-snug text-accent-ink ${TOAST_SHADOW}`}
          >
            {message}
          </motion.p>
        )}
      </AnimatePresence>
    </div>,
    document.body,
  )
}
