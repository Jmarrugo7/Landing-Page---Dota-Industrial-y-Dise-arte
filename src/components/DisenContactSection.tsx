import { motion, useReducedMotion } from 'framer-motion'
import { BRANDS, getWhatsAppUrl } from '../data/brands'
import { WhatsAppIcon } from './WhatsAppIcon'

const ease = [0.22, 0.8, 0.24, 1] as const

const WHATSAPP_PHONE = BRANDS.disenarte.whatsappPhone
const ADVISORY_MSG =
  '¡Hola Diseñarte! Tengo un proyecto en mente y me gustaría recibir asesoría personalizada.'

// ─── SVG Icons for "Hablemos de tu idea" cards ───

/** 1. Diseños Personalizados: Clean pencil/edit icon */
function CustomDesignIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      <path d="M15 5l4 4" />
    </svg>
  )
}

/** 2. Bordado con Detalle: Needle with thread */
function EmbroideryDetailIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Needle */}
      <path d="M15.5 2.5l-10 10L4 18l5.5-1.5 10-10a2.12 2.12 0 00-3-3z" />
      {/* Thread eye */}
      <circle cx="17" cy="4" r="1" fill="none" strokeWidth="1.5" />
      {/* Trailing thread */}
      <path d="M19 6c2 2 3 5 1.5 8s-5 5-8 5" strokeDasharray="3 3" opacity="0.6" />
    </svg>
  )
}

/** 3. Estampados Creativos: T-shirt outline */
function CreativePrintIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 2h8l4 5-3 2V21H7V9L4 7l4-5z" />
      <path d="M8 2c0 2 1.8 4 4 4s4-2 4-4" />
    </svg>
  )
}

/** 4. Atención Cercana: Heart outline */
function CloseAttentionIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  )
}

export default function DisenContactSection() {
  const reduced = useReducedMotion() ?? false

  const enter = (d: number) =>
    reduced
      ? {}
      : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 },
        transition: { duration: 0.65, delay: d, ease },
      }

  const advisoryUrl = getWhatsAppUrl(WHATSAPP_PHONE, ADVISORY_MSG)

  const cards = [
    {
      icon: <CustomDesignIcon />,
      title: 'Diseños personalizados',
      desc: 'Creamos piezas únicas a tu estilo.',
    },
    {
      icon: <EmbroideryDetailIcon />,
      title: 'Bordado con detalle',
      desc: 'Cada puntada refleja dedicación y calidad.',
    },
    {
      icon: <CreativePrintIcon />,
      title: 'Estampados creativos',
      desc: 'Damos vida a tus ideas con color.',
    },
    {
      icon: <CloseAttentionIcon />,
      title: 'Atención cercana',
      desc: 'Te acompañamos desde la idea hasta el resultado.',
    },
  ]

  return (
    <section id="contacto" aria-labelledby="disen-why-title" className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24">
      {/* ─── Background ─── */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src="/assets/products/Fondo%20ubicacion%20dise%C3%B1arte.png"
          alt=""
          width={1599}
          height={984}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0514]/55" />
        <div className="absolute left-0 right-0 top-0 h-16 bg-gradient-to-b from-[var(--color-bg)] to-transparent" />
        <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
      </div>

      <div className="page-x relative z-10 max-w-[1240px] mx-auto">
        {/* ═════════════════════════════════════════════════════
            PART 1: "Hablemos de tu idea"
        ══════════════════════════════════════════════════════ */}
        <div className="mb-10 sm:mb-14">
          <motion.span {...enter(0)} className="block text-[#D4AF37] font-display font-extrabold text-xs sm:text-sm tracking-[0.18em] uppercase mb-2">
            Estamos para crear contigo
          </motion.span>
          <motion.h2
            {...enter(0.06)}
            id="disen-why-title"
            className="font-display font-black text-3xl sm:text-4xl lg:text-[2.75rem] uppercase leading-[0.95] tracking-tight"
          >
            <span className="text-white">Hablemos de </span>
            <span className="text-[#D4AF37] italic">tu idea</span>
          </motion.h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-14">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              {...enter(0.1 + idx * 0.07)}
              className="rounded-2xl border border-[#D4AF37]/35 bg-[#120828]/75 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 hover:border-[#D4AF37]/65 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4AF37]/12 border border-[#D4AF37]/25">
                  {card.icon}
                </span>
                <h3 className="font-display font-extrabold text-sm uppercase tracking-wider text-white leading-tight">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-[#B8A0D4] leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ═════════════════════════════════════════════════════
            PART 2: Contact Banner "¿Tienes un proyecto en mente?"
        ══════════════════════════════════════════════════════ */}
        <motion.div
          {...enter(0.3)}
          className="rounded-[28px] border border-[#D4AF37]/45 bg-[#120828]/85 backdrop-blur-xl overflow-hidden shadow-[0_20px_55px_rgba(0,0,0,0.5),0_0_35px_rgba(212,175,55,0.12)] grid grid-cols-1 lg:grid-cols-[380px_1fr_auto] xl:grid-cols-[430px_1fr_auto] items-center transition-all duration-300 hover:border-[#D4AF37]/80 hover:shadow-[0_24px_60px_rgba(0,0,0,0.6),0_0_45px_rgba(212,175,55,0.22)]"
        >
          {/* Left: Store image with diagonal divider */}
          <div className="relative w-full h-[270px] sm:h-[340px] lg:h-full lg:min-h-[310px] overflow-hidden border-b-2 border-[#D4AF37]/40 lg:border-b-0 shrink-0">
            <img
              src="/assets/products/Imagen%20contacto%20dise%C3%B1arte%20actualizada.png"
              alt="Taller de bordado y estampado Diseñarte"
              width={1390}
              height={1132}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-[center_top] transition-transform duration-500 hover:scale-[1.02]"
            />
            {/* Diagonal SVG divider - ONLY visible on desktop (hidden on mobile) */}
            <svg
              className="hidden lg:block absolute top-0 bottom-0 right-[-1px] h-full w-[44px] pointer-events-none z-10"
              viewBox="0 0 50 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <filter id="goldGlow" x="-30%" y="-10%" width="160%" height="120%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <polygon points="50,0 50,100 0,100" fill="#120828" />
              <line
                x1="50"
                y1="0"
                x2="0"
                y2="100"
                stroke="#D4AF37"
                strokeWidth="3.5"
                vectorEffect="non-scaling-stroke"
                filter="url(#goldGlow)"
              />
            </svg>
          </div>

          {/* Center: Content & channels */}
          <div className="flex flex-col justify-center p-6 sm:p-7 lg:p-8">
            {/* Accent bar */}
            <div className="w-12 h-1 rounded-full bg-[#D4AF37] mb-3.5 opacity-80" />
            <h3 className="font-display font-black text-2xl sm:text-[1.75rem] lg:text-[1.95rem] uppercase leading-[0.95] tracking-tight mb-2.5">
              <span className="text-white">¿Tienes un proyecto </span>
              <span className="block text-[#D4AF37] mt-0.5">en mente?</span>
            </h3>
            <p className="text-sm sm:text-[0.9rem] text-[#B8A0D4] leading-relaxed mb-6 max-w-[42ch]">
              Cuéntanos qué quieres crear. En Diseñarte estamos listos para asesorarte y hacerlo realidad.
            </p>

            {/* 3 Channel badges */}
            <div className="grid grid-cols-3 gap-2.5 sm:gap-4">
              {/* WhatsApp */}
              <a
                href={advisoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center gap-1.5 sm:gap-2 rounded-xl bg-[#1C0E3A]/80 border border-[#D4AF37]/25 p-2.5 sm:p-4 transition-all hover:border-[#D4AF37]/55 hover:bg-[#28164E]"
              >
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.4)]">
                  <WhatsAppIcon className="h-4 w-4 sm:h-5 sm:w-5 fill-[#1A0A2E]" />
                </span>
                <span className="font-bold text-xs sm:text-sm text-white">WhatsApp</span>
                <span className="text-[0.65rem] sm:text-xs text-[#B8A0D4] leading-tight">Respuesta rápida</span>
              </a>

              {/* Llamadas */}
              <a
                href="tel:+573245516942"
                className="flex flex-col items-center text-center gap-1.5 sm:gap-2 rounded-xl bg-[#1C0E3A]/80 border border-[#D4AF37]/25 p-2.5 sm:p-4 transition-all hover:border-[#D4AF37]/55 hover:bg-[#28164E]"
              >
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.4)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1A0A2E" aria-hidden="true" className="sm:w-5 sm:h-5">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                <span className="font-bold text-xs sm:text-sm text-white">Llamadas</span>
                <span className="text-[0.65rem] sm:text-xs text-[#B8A0D4] leading-tight">324 551 6942</span>
              </a>

              {/* Visítanos */}
              <a
                href="#visitanos"
                className="flex flex-col items-center text-center gap-1.5 sm:gap-2 rounded-xl bg-[#1C0E3A]/80 border border-[#D4AF37]/25 p-2.5 sm:p-4 transition-all hover:border-[#D4AF37]/55 hover:bg-[#28164E]"
              >
                <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.4)]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1A0A2E" aria-hidden="true" className="sm:w-5 sm:h-5">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                </span>
                <span className="font-bold text-xs sm:text-sm text-white">Visítanos</span>
                <span className="text-[0.65rem] sm:text-xs text-[#B8A0D4] leading-tight">Conoce el taller</span>
              </a>
            </div>
          </div>

          {/* Right: CTA Button */}
          <div className="p-6 pt-0 lg:p-8 lg:pl-0 flex items-center justify-center shrink-0">
            <a
              href={advisoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-full bg-[#D4AF37] hover:bg-[#E0C04A] text-[#1A0A2E] px-7 py-3.5 text-sm sm:text-base font-bold shadow-[0_4px_24px_rgba(212,175,55,0.45)] transition-all duration-200 hover:scale-[1.03] active:scale-95 whitespace-nowrap"
            >
              <WhatsAppIcon className="h-5 w-5 fill-[#1A0A2E]" />
              <span>Hablemos por WhatsApp</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

