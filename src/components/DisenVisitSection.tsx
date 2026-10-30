import { motion, useReducedMotion } from 'framer-motion'
import { BRANDS, getWhatsAppUrl } from '../data/brands'
import { WhatsAppIcon } from './WhatsAppIcon'

const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/place/dise%C3%B1arte/@10.3763069,-75.5024551,17z/data=!3m1!4b1!4m6!3m5!1s0x8ef625ac347b35f7:0x8055577819b7deb9!8m2!3d10.3763069!4d-75.4998802!16s%2Fg%2F11zjpm3by2?entry=ttu&g_ep=EgoyMDI2MTAyNy4wIKXMDSoASAFQAw%3D%3D'

const EMBED_MAP_SRC =
  'https://www.google.com/maps?q=10.3763069,-75.4998802&z=17&output=embed'

const ease = [0.22, 0.8, 0.24, 1] as const

export default function DisenVisitSection() {
  const reduced = useReducedMotion() ?? false
  const whatsappUrl = getWhatsAppUrl(
    BRANDS.disenarte.whatsappPhone,
    '¡Hola Diseñarte! Deseo visitarlos en su sede de Cartagena para cotizar un diseño de bordado o estampado.'
  )

  const enter = (d: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.15 },
          transition: { duration: 0.7, delay: d, ease },
        }

  return (
    <section id="visitanos" aria-labelledby="disen-visit-title" className="visit-section relative isolate overflow-hidden py-20">
      {/* ─── Background image ─── */}
      <div className="visit-bg" aria-hidden="true">
        <img
          src="/assets/products/Fondo%20ubicacion%20dise%C3%B1arte.png"
          alt=""
          width={1599}
          height={984}
          loading="lazy"
          decoding="async"
          className="visit-bg-img"
          style={{ objectPosition: 'center center' }}
        />
        {/* Subtle dark overlay for contrast */}
        <div className="absolute inset-0 bg-[#0c0810]/40" />
        <div className="visit-bg-gradient-top" />
        <div className="visit-bg-gradient-bottom" />
      </div>

      <div className="page-x visit-container relative z-10 max-w-[1240px] mx-auto">
        <motion.div
          {...enter(0)}
          className="disen-visit-card rounded-[28px] border border-[#e8618c]/45 bg-[#120a1a]/85 backdrop-blur-xl p-6 sm:p-8 lg:p-12 shadow-[0_24px_60px_rgba(0,0,0,0.6),0_0_35px_rgba(232,97,140,0.12)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch"
        >
          {/* ═════════════════════════════════════════════════════
              LEFT COLUMN: Information & CTAs (7 cols on lg)
          ══════════════════════════════════════════════════════ */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Overline & Heading */}
              <motion.span {...enter(0.05)} className="inline-block text-[#e8618c] font-display font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase">
                Ven a conocernos
              </motion.span>
              <motion.h2
                {...enter(0.1)}
                id="disen-visit-title"
                className="font-display font-black text-3xl sm:text-4xl lg:text-[2.75rem] uppercase leading-[0.98] tracking-tight mt-3 mb-10 sm:mb-12 lg:mb-14"
              >
                <span className="block text-white">TE ESPERAMOS</span>
                <span className="block text-[#e8618c] mt-0.5">PUNTO A PUNTO</span>
              </motion.h2>

              {/* Rows */}
              <div className="flex flex-col gap-6">
                {/* 1. Dirección */}
                <motion.div {...enter(0.18)} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8618c]/15 border border-[#e8618c]/30 text-[#e8618c]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">Dirección</h3>
                    <p className="text-sm text-[#c8bdd4] mt-1 leading-relaxed">
                      20 de Julio, Cartagena de Indias, Bolívar
                    </p>
                  </div>
                </motion.div>

                <div className="h-px w-full bg-[rgba(232,97,140,0.18)]" />

                {/* 2. Horario de atención */}
                <motion.div {...enter(0.24)} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8618c]/15 border border-[#e8618c]/30 text-[#e8618c]">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <polyline points="12 7 12 12 15 15" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white leading-tight">Horario de atención</h3>
                    <div className="mt-2 space-y-1.5 text-sm">
                      <div className="flex items-center justify-between gap-4 text-[#c8bdd4]">
                        <span>Lunes a viernes</span>
                        <span className="font-medium text-white/95">8:00 a. m. – 5:00 p. m.</span>
                      </div>
                      <div className="flex items-center justify-between gap-4 text-[#c8bdd4]">
                        <span>Sábados</span>
                        <span className="font-medium text-white/95">8:00 a. m. – 3:00 p. m.</span>
                      </div>
                      <div className="flex items-center justify-between gap-4 text-[#c8bdd4]">
                        <span>Domingos</span>
                        <span className="font-semibold text-[#e8618c]">Cerrado</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <div className="h-px w-full bg-[rgba(232,97,140,0.18)]" />

                {/* 3. Contáctanos */}
                <motion.div {...enter(0.3)} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8618c]/15 border border-[#e8618c]/30 text-[#e8618c]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-tight">Contáctanos</h3>
                    <a href="tel:+573245516942" className="inline-block text-sm text-[#c8bdd4] hover:text-[#e8618c] transition-colors mt-1 font-medium">
                      324 551 6942
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* CTAs */}
            <motion.div {...enter(0.38)} className="mt-8 flex flex-wrap items-center gap-3.5 pt-2">
              {/* Cómo llegar */}
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#e8618c] hover:bg-[#d84d7a] text-white px-6 py-3 text-sm font-bold shadow-[0_4px_20px_rgba(232,97,140,0.45)] transition-all duration-200 hover:scale-[1.03] active:scale-95"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                <span>Cómo llegar</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>

              {/* Escríbenos por WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#120a1a]/85 hover:bg-[#1a0f26] border border-white/20 hover:border-[#25D366]/60 text-white px-5 py-3 text-sm font-semibold shadow-md transition-all duration-200 hover:scale-[1.03] active:scale-95"
              >
                <span className="flex h-5 w-5 items-center justify-center text-[#25D366]">
                  <WhatsAppIcon className="h-5 w-5 fill-current" />
                </span>
                <span>Escríbenos por WhatsApp</span>
              </a>
            </motion.div>
          </div>

          {/* ═════════════════════════════════════════════════════
              RIGHT COLUMN: Styled Map (5 cols on lg)
          ══════════════════════════════════════════════════════ */}
          <motion.div {...enter(0.22)} className="lg:col-span-5 flex items-stretch">
            <div className="relative w-full h-[360px] sm:h-[420px] lg:h-full min-h-[380px] rounded-2xl overflow-hidden border-2 border-[#e8618c]/55 shadow-[0_0_30px_rgba(232,97,140,0.22)]">
              {/* Top-left: Encuéntranos aquí badge */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2 rounded-lg bg-[#120b19]/90 border border-[#e8618c]/40 px-3 py-1.5 shadow-md backdrop-blur-md">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="#e8618c" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                <span className="font-display font-bold text-[0.7rem] tracking-[0.14em] uppercase text-white">
                  Encuéntranos aquí
                </span>
              </div>

              {/* Glowing center pin */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-full flex flex-col items-center">
                <svg
                  width="38"
                  height="38"
                  viewBox="0 0 24 24"
                  fill="#e8618c"
                  className="drop-shadow-[0_4px_16px_rgba(232,97,140,0.9)]"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.8" fill="#ffffff" />
                </svg>
              </div>

              {/* Bottom-right: Diseñarte badge */}
              <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2.5 rounded-xl bg-[#120b19]/92 border border-[#e8618c]/40 px-3.5 py-1.5 shadow-xl backdrop-blur-md">
                <img
                  src="/assets/products/Logo%20diseñarte.png"
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 rounded-full object-contain"
                />
                <div className="flex flex-col text-left">
                  <span className="font-display font-extrabold text-[0.75rem] uppercase tracking-wider text-white leading-tight">
                    Diseñarte
                  </span>
                  <span className="text-[0.625rem] text-[#c8bdd4] leading-tight">
                    Bordado y estampado
                  </span>
                </div>
              </div>

              {/* Google Maps iframe */}
              <iframe
                title="Ubicación de Diseñarte en Google Maps"
                src={EMBED_MAP_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="disen-visit-map-iframe w-full h-full"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

