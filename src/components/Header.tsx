import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Logo } from './Logo'
import { useBrand } from '../hooks/useBrand'
import { getWhatsAppUrl } from '../data/brands'
import { WhatsAppIcon } from './WhatsAppIcon'

interface Props { active: 'inicio' | 'productos' | 'contacto' | 'visitanos' }

export default function Header({ active }: Props) {
  const reduced = useReducedMotion()
  const { brandId, brand, toggle } = useBrand()
  const whatsappUrl = getWhatsAppUrl(brand.whatsappPhone, brand.whatsappMessage)
  const [menuOpen, setMenuOpen] = useState(false)

  // Close menu on resize to desktop
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const handler = () => { if (mq.matches) setMenuOpen(false) }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  // Lock body scroll and mark menu state when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.style.overflow = ''
      document.body.classList.remove('mobile-menu-open')
    }
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('mobile-menu-open')
    }
  }, [menuOpen])

  const handleNavClick = useCallback((id: string) => {
    setMenuOpen(false)
    // Small delay to let the menu close animation start
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' })
        history.replaceState(null, '', `#${id}`)
      }
    }, 100)
  }, [reduced])

  const navItems: { id: 'inicio' | 'productos' | 'contacto' | 'visitanos'; label: string; dotaOnly?: boolean }[] = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'productos', label: 'Productos' },
    { id: 'contacto', label: 'Contacto' },
    { id: 'visitanos', label: 'Visítanos' },
  ]

  const filteredNavItems = navItems.filter(item => !item.dotaOnly || brandId === 'dota')

  /* ─── Desktop nav link ─── */
  const desktopLink = (id: 'inicio' | 'productos' | 'contacto' | 'visitanos', label: string) => (
    <a
      key={id}
      href={`#${id}`}
      aria-current={active === id ? 'page' : undefined}
      className={`relative flex min-h-11 items-center px-2 text-[1.0625rem] font-medium transition-colors hover:text-accent sm:px-3 ${active === id ? 'text-ink' : 'text-soft'}`}
    >
      {label}
      {active === id && <motion.span layoutId="nav-bar" className="absolute inset-x-2 -bottom-px h-[3px] rounded-full bg-accent sm:inset-x-3" transition={reduced ? { duration: 0 } : { type: 'spring', stiffness: 400, damping: 34 }} />}
    </a>
  )

  /* ─── Sidebar animation variants ─── */
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const panelVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: reduced ? { duration: 0 } : { type: 'spring' as const, stiffness: 300, damping: 30 } },
    exit: { x: '100%', transition: reduced ? { duration: 0 } : { duration: 0.25, ease: 'easeIn' as const } },
  }

  return (
    <>
      <header className="site-header sticky top-0 z-40">
        <div className="page-x flex h-[72px] items-center justify-between gap-4">
          <Logo />
          
          {/* ─── Desktop nav ─── */}
          <div className="hidden md:flex items-center gap-2 sm:gap-4">
            <nav aria-label="Principal" className="flex items-center">
              {filteredNavItems.map(item => desktopLink(item.id, item.label))}
            </nav>

            {/* Desktop WhatsApp pill button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2 text-sm font-bold shadow-[0_2px_12px_rgba(37,211,102,0.35)] hover:shadow-[0_4px_18px_rgba(37,211,102,0.5)] transition-all duration-200 hover:scale-[1.04] active:scale-95 ml-1 tracking-wide"
              aria-label="Contactar por WhatsApp"
            >
              <WhatsAppIcon className="h-5 w-5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* ─── Mobile hamburger button ─── */}
          <button
            type="button"
            className="md:hidden relative z-50 flex h-11 w-11 items-center justify-center rounded-lg text-ink transition-colors hover:text-accent"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <AnimatePresence mode="wait">
                {menuOpen ? (
                  <motion.g
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </motion.g>
                ) : (
                  <motion.g
                    key="burger"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <line x1="4" y1="6" x2="20" y2="6" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="18" x2="20" y2="18" />
                  </motion.g>
                )}
              </AnimatePresence>
            </svg>
          </button>
        </div>
      </header>

      {/* ─── Mobile side panel overlay ─── */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Side panel */}
            <motion.nav
              key="panel"
              variants={panelVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 z-[75] flex h-full w-[78%] max-w-[320px] flex-col border-l border-white/10 bg-[rgba(10,12,18,0.92)] backdrop-blur-2xl shadow-2xl"
              aria-label="Menú de navegación"
            >
              {/* Close button area (aligned with hamburger) */}
              <div className="flex h-[72px] items-center justify-end px-5">
                <button
                  type="button"
                  className="flex h-11 w-11 items-center justify-center rounded-lg text-soft transition-colors hover:text-accent"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Cerrar menú"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </svg>
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-1 flex-col gap-1 px-5 pt-2">
                {filteredNavItems.map((item, i) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.id) }}
                    initial={reduced ? false : { opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06, duration: 0.3 }}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3.5 text-lg font-semibold tracking-wide transition-colors ${
                      active === item.id
                        ? 'bg-accent/10 text-accent'
                        : 'text-soft hover:bg-white/5 hover:text-ink'
                    }`}
                  >
                    {active === item.id && (
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    )}
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* Bottom section: Brand switcher + WhatsApp button */}
              <div className="px-5 pb-[max(2rem,calc(env(safe-area-inset-bottom)+1.5rem))] pt-4 mt-auto flex flex-col gap-3 border-t border-white/10">
                {/* Brand switch inside menu */}
                <div className="flex items-center justify-between py-1">
                  <span className="text-xs uppercase tracking-wider text-soft font-semibold">Marca</span>
                  <button
                    type="button"
                    onClick={() => { toggle(); setMenuOpen(false) }}
                    className="flex items-center gap-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 text-xs font-bold text-ink transition-all active:scale-95"
                  >
                    <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                    <span>{brandId === 'dota' ? 'Cambiar a Diseñarte' : 'Cambiar a Dota'}</span>
                  </button>
                </div>

                {/* WhatsApp button */}
                <motion.a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={reduced ? false : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="flex w-full items-center justify-center gap-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] py-3.5 text-base font-bold text-white shadow-[0_4px_20px_rgba(37,211,102,0.35)] transition-all duration-200 active:scale-95"
                >
                  <WhatsAppIcon className="h-5 w-5 fill-current" />
                  <span>WhatsApp</span>
                </motion.a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
