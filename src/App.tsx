import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import ProductModal from './components/ProductModal'
import DisenHero from './components/DisenHero'
import DisenProductsSection from './components/DisenProductsSection'
import DisenProductModal from './components/DisenProductModal'
import ContactSection from './components/ContactSection'
import DisenContactSection from './components/DisenContactSection'
import VisitSection from './components/VisitSection'
import DisenVisitSection from './components/DisenVisitSection'
import Footer from './components/Footer'
import BrandToggle from './components/BrandToggle'
import WhatsAppLinesModal from './components/WhatsAppLinesModal'
import { BrandProvider, useBrand } from './hooks/useBrand'
import { WhatsAppModalProvider } from './context/WhatsAppModalContext'
import type { Product } from './data/products'
import type { DisenProduct } from './data/disenProducts'
import { BRANDS } from './data/brands'

type SectionId = 'inicio' | 'productos' | 'contacto' | 'visitanos'

function AppContent() {
  const { brandId, brand } = useBrand()
  const [selectedDota, setSelectedDota] = useState<Product | null>(null)
  const [selectedDisen, setSelectedDisen] = useState<DisenProduct | null>(null)
  const [section, setSection] = useState<SectionId>('inicio')
  const opener = useRef<HTMLElement | null>(null)
  const isManualNav = useRef(false)
  const manualNavTimer = useRef<number | null>(null)

  // Dota handlers
  const openDotaDetails = useCallback((p: Product, el: HTMLElement) => { opener.current = el; setSelectedDota(p) }, [])
  const closeDotaDetails = useCallback(() => { setSelectedDota(null) }, [])

  // Diseñarte handlers
  const openDisenDetails = useCallback((p: DisenProduct, el: HTMLElement) => { opener.current = el; setSelectedDisen(p) }, [])
  const closeDisenDetails = useCallback(() => { setSelectedDisen(null) }, [])

  const restoreFocus = useCallback(() => {
    if (opener.current?.isConnected) opener.current.focus()
  }, [])

  // Immediate selection on nav click (instant visual indicator feedback)
  const handleNavSelect = useCallback((id: SectionId) => {
    setSection(id)
    isManualNav.current = true
    if (manualNavTimer.current) window.clearTimeout(manualNavTimer.current)
    manualNavTimer.current = window.setTimeout(() => {
      isManualNav.current = false
    }, 850)
  }, [])

  // Scroll spy detection that tracks active section across both brands
  useEffect(() => {
    const ids: SectionId[] = ['inicio', 'productos', 'contacto', 'visitanos']
    let rafId: number | null = null

    const updateActiveSection = () => {
      if (isManualNav.current) return

      const scrollY = window.scrollY
      const innerHeight = window.innerHeight
      const scrollHeight = document.documentElement.scrollHeight

      // 1. Top of page
      if (scrollY < 100) {
        setSection('inicio')
        return
      }

      // 2. Bottom of page
      if (innerHeight + scrollY >= scrollHeight - 60) {
        setSection('visitanos')
        return
      }

      // 3. Middle sections: check which section intersects the trigger line (offset from top of viewport)
      const triggerY = 160
      let activeId: SectionId | null = null

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const rect = el.getBoundingClientRect()
        if (rect.top <= triggerY && rect.bottom > triggerY) {
          activeId = id
          break
        }
      }

      // Fallback: pick the latest section whose top has scrolled past triggerY
      if (!activeId) {
        for (let i = ids.length - 1; i >= 0; i--) {
          const el = document.getElementById(ids[i])
          if (el && el.getBoundingClientRect().top <= triggerY) {
            activeId = ids[i]
            break
          }
        }
      }

      if (activeId) {
        setSection(activeId)
      }
    }

    const onScrollOrResize = () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(updateActiveSection)
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true })
    window.addEventListener('resize', onScrollOrResize, { passive: true })

    // Check right away and after brand transitions
    onScrollOrResize()
    const t1 = window.setTimeout(onScrollOrResize, 100)
    const t2 = window.setTimeout(onScrollOrResize, 600)

    return () => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      window.removeEventListener('scroll', onScrollOrResize)
      window.removeEventListener('resize', onScrollOrResize)
      window.clearTimeout(t1)
      window.clearTimeout(t2)
    }
  }, [brandId])

  // Apply brand colors via CSS custom properties
  useEffect(() => {
    const root = document.documentElement
    const colors = brand.colors
    root.style.setProperty('--color-accent', colors.accent)
    root.style.setProperty('--color-accent-secondary', colors.accentSecondary)
    root.style.setProperty('--color-accent-ink', colors.accentInk)
    root.style.setProperty('--color-bg', colors.bg)
    root.style.setProperty('--color-surface', colors.surface)
    root.style.setProperty('--color-surface-2', colors.surface2)
    root.style.setProperty('--color-surface-3', colors.surface3)
    root.style.setProperty('--color-ink', colors.ink)
    root.style.setProperty('--color-soft', colors.soft)
    // Update body and html background
    document.body.style.background = colors.bg
    root.style.background = colors.bg

    // Update .btn-accent:hover color
    const style = document.getElementById('brand-accent-hover') ?? (() => {
      const s = document.createElement('style')
      s.id = 'brand-accent-hover'
      document.head.appendChild(s)
      return s
    })()
    style.textContent = `.btn-accent:hover { background: ${colors.accentHover} !important; }`

    // Update document title and favicon
    document.title = `${brand.name} — ${brand.slogan}`
    const icon = document.querySelector<HTMLLinkElement>("link[rel~='icon']")
    if (icon) {
      icon.href = brand.logoUrl
    }

    // Scroll to top on brand switch
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [brand])

  const selected = selectedDota || selectedDisen

  return (
    <>
      <a href="#contenido" className="skip-link">Saltar al contenido</a>
      <div id="app-root">
        <Header active={section} onSelect={handleNavSelect} />
        <main id="contenido" tabIndex={-1} className="outline-none">
          <AnimatePresence mode="wait">
            {brandId === 'dota' ? (
              <motion.div
                key="dota"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Hero modalOpen={!!selected} onDetails={openDotaDetails} />
                <ProductsSection onDetails={openDotaDetails} />
                <ContactSection />
                <VisitSection />
                <Footer />
              </motion.div>
            ) : (
              <motion.div
                key="disenarte"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <DisenHero modalOpen={!!selected} onDetails={openDisenDetails} />
                <DisenProductsSection onDetails={openDisenDetails} />
                <DisenContactSection />
                <DisenVisitSection />
                <Footer />
              </motion.div>
            )}
          </AnimatePresence>
        </main>
        <BrandToggle />
      </div>
      <AnimatePresence onExitComplete={restoreFocus}>
        {selectedDota && <ProductModal key={selectedDota.id} product={selectedDota} onClose={closeDotaDetails} />}
        {selectedDisen && <DisenProductModal key={selectedDisen.id} product={selectedDisen} onClose={closeDisenDetails} />}
      </AnimatePresence>
      <WhatsAppLinesModal />
    </>
  )
}

export default function App() {
  return (
    <BrandProvider>
      <WhatsAppModalProvider>
        <AppContent />
      </WhatsAppModalProvider>
    </BrandProvider>
  )
}
