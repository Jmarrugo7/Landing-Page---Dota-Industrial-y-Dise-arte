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
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#e8618c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
      <path d="M15 5l4 4" />
    </svg>
  )
}

/** 2. Bordado con Detalle: Needle with thread */
function EmbroideryDetailIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#e8618c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#e8618c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 2h8l4 5-3 2V21H7V9L4 7l4-5z" />
      <path d="M8 2c0 2 1.8 4 4 4s4-2 4-4" />
    </svg>
  )
}

/** 4. Atención Cercana: Heart outline */
function CloseAttentionIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#e8618c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
        <div className="absolute inset-0 bg-[#0c0810]/55" />
        <div className="absolute left-0 right-0 top-0 h-16 bg-gradient-to-b from-[var(--color-bg)] to-transparent" />
        <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />
      </div>

      <div className="page-x relative z-10 max-w-[1240px] mx-auto">
        {/* ═════════════════════════════════════════════════════
            PART 1: "Hablemos de tu idea"
        ══════════════════════════════════════════════════════ */}
        <div className="mb-10 sm:mb-14">
          <motion.span {...enter(0)} className="block text-[#e8618c] font-display font-extrabold text-xs sm:text-sm tracking-[0.18em] uppercase mb-2">
            Estamos para crear contigo
          </motion.span>
          <motion.h2
            {...enter(0.06)}
            id="disen-why-title"
            className="font-display font-black text-3xl sm:text-4xl lg:text-[2.75rem] uppercase leading-[0.95] tracking-tight"
          >
            <span className="text-white">Hablemos de </span>
            <span className="text-[#e8618c] italic">tu idea</span>
          </motion.h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-14">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              {...enter(0.1 + idx * 0.07)}
              className="rounded-2xl border border-[#e8618c]/35 bg-[#120a1a]/75 backdrop-blur-md p-5 sm:p-6 transition-all duration-300 hover:border-[#e8618c]/65 hover:shadow-[0_0_30px_rgba(232,97,140,0.15)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8618c]/12 border border-[#e8618c]/25">
                  {card.icon}
                </span>
                <h3 className="font-display font-extrabold text-sm uppercase tracking-wider text-white leading-tight">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-[#c8bdd4] leading-relaxed">
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
          className="rounded-[28px] border border-[#e8618c]/40 bg-[#120a1a]/85 backdrop-blur-xl overflow-hidden shadow-[0_20px_55px_rgba(0,0,0,0.5),0_0_35px_rgba(232,97,140,0.1)] grid grid-cols-1 lg:grid-cols-12 items-stretch"
        >
          {/* Left: Store image with diagonal divider */}
          <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] lg:min-h-0 overflow-hidden">
            <img
              src="/assets/products/Imagen%20contacto%20dise%C3%B1arte.png"
              alt="Taller de bordado y estampado Diseñarte"
              width={700}
              height={450}
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Diagonal SVG divider */}
            <svg
              className="absolute top-0 right-0 h-full w-16 lg:w-20"
              viewBox="0 0 50 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <filter id="pinkGlow" x="-30%" y="-10%" width="160%" height="120%">
                  <feGaussianBlur stdDeviation="2" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>
              <polygon points="50,0 50,100 0,100" fill="#120a1a" fillOpacity="0.85" />
              <line
                x1="50"
                y1="0"
                x2="0"
                y2="100"
                stroke="#e8618c"
                strokeWidth="3"
                vectorEffect="non-scaling-stroke"
                filter="url(#pinkGlow)"
              />
            </svg>
          </div>

          {/* Right: Content & channels */}
          <div className="lg:col-span-7 flex flex-col justify-center p-6 sm:p-8 lg:p-10">
            {/* Accent bar */}
            <div className="w-12 h-1 rounded-full bg-[#e8618c] mb-4 opacity-80" />
            <h3 className="font-display font-black text-2xl sm:text-[1.75rem] lg:text-3xl uppercase leading-[0.95] tracking-tight mb-3">
              <span className="text-white">¿Tienes un proyecto </span>
              <span className="block text-[#e8618c] mt-0.5">en mente?</span>
            </h3>
            <p className="text-sm sm:text-[0.9rem] text-[#c8bdd4] leading-relaxed mb-6 max-w-[40ch]">
              Cuéntanos qué quieres crear. Estamos listos para ayudarte a hacerlo realidad.
            </p>

            {/* 3 Channel badges */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-7">
              {/* WhatsApp */}
              <a
                href={advisoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-center gap-2 rounded-xl bg-[#1a0f22]/80 border border-[#e8618c]/25 p-3 sm:p-4 transition-all hover:border-[#e8618c]/55 hover:bg-[#1e1228]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8618c] shadow-[0_0_12px_rgba(232,97,140,0.4)]">
                  <WhatsAppIcon className="h-5 w-5 fill-white" />
                </span>
                <span className="font-bold text-xs sm:text-sm text-white">WhatsApp</span>
                <span className="text-[0.65rem] sm:text-xs text-[#c8bdd4] leading-tight">Escríbenos y recibe respuesta rápida.</span>
              </a>

              {/* Llamadas */}
              <a
                href="tel:+573245516942"
                className="flex flex-col items-center text-center gap-2 rounded-xl bg-[#1a0f22]/80 border border-[#e8618c]/25 p-3 sm:p-4 transition-all hover:border-[#e8618c]/55 hover:bg-[#1e1228]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8618c] shadow-[0_0_12px_rgba(232,97,140,0.4)]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                <span className="font-bold text-xs sm:text-sm text-white">Llamadas</span>
                <span className="text-[0.65rem] sm:text-xs text-[#c8bdd4] leading-tight">Hablemos de tu proyecto.</span>
              </a>

              {/* Visítanos */}
              <a
                href="#visitanos"
                className="flex flex-col items-center text-center gap-2 rounded-xl bg-[#1a0f22]/80 border border-[#e8618c]/25 p-3 sm:p-4 transition-all hover:border-[#e8618c]/55 hover:bg-[#1e1228]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8618c] shadow-[0_0_12px_rgba(232,97,140,0.4)]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                </span>
                <span className="font-bold text-xs sm:text-sm text-white">Visítanos</span>
                <span className="text-[0.65rem] sm:text-xs text-[#c8bdd4] leading-tight">Ven a conocer nuestro trabajo.</span>
              </a>
            </div>

            {/* CTA */}
            <a
              href={advisoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start inline-flex items-center gap-2.5 rounded-full bg-[#e8618c] hover:bg-[#d84d7a] text-white px-6 py-3.5 text-sm font-bold shadow-[0_4px_24px_rgba(232,97,140,0.45)] transition-all duration-200 hover:scale-[1.03] active:scale-95"
            >
              <WhatsAppIcon className="h-5 w-5 fill-current" />
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

