import { motion, useReducedMotion } from 'framer-motion'
import { getWhatsAppUrl } from '../data/brands'

const ease = [0.22, 0.8, 0.24, 1] as const

const WHATSAPP_PHONE = '573126572895'
const ADVISORY_MSG =
  '¡Hola Dota Industrial! Me gustaría solicitar asesoría especializada para mi proyecto.'

// ─── SVG Icons for "¿Por qué elegirnos?" cards ───

/** 1. Calidad garantizada: Filled shield with bold checkmark */
function QualityShieldIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 4L8 12v12c0 10.55 6.82 20.4 16 24 9.18-3.6 16-13.45 16-24V12L24 4z"
        fill="var(--color-accent)"
        opacity="0.15"
      />
      <path
        d="M24 4L8 12v12c0 10.55 6.82 20.4 16 24 9.18-3.6 16-13.45 16-24V12L24 4z"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M16 24l6 6 12-12"
        stroke="var(--color-accent)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** 2. Amplia variedad: 4 solid rounded squares in 2×2 grid */
function WideVarietyIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="18" height="18" rx="4" fill="var(--color-accent)" />
      <rect x="26" y="4" width="18" height="18" rx="4" fill="var(--color-accent)" opacity="0.7" />
      <rect x="4" y="26" width="18" height="18" rx="4" fill="var(--color-accent)" opacity="0.7" />
      <rect x="26" y="26" width="18" height="18" rx="4" fill="var(--color-accent)" opacity="0.45" />
    </svg>
  )
}

/** 3. Asesoría especializada: Person silhouette with speech/idea bubble */
function SpecializedAdvisorIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Person head */}
      <circle cx="20" cy="14" r="7" stroke="var(--color-accent)" strokeWidth="3" />
      {/* Body/shoulders */}
      <path
        d="M6 42c0-7.73 6.27-14 14-14s14 6.27 14 14"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
      {/* Speech/idea bubble */}
      <rect x="30" y="4" width="14" height="12" rx="3" stroke="var(--color-accent)" strokeWidth="2.5" />
      <path d="M34 18l-2 4 5-2" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinejoin="round" />
      {/* Dots inside bubble */}
      <circle cx="34" cy="10" r="1.3" fill="var(--color-accent)" />
      <circle cx="37" cy="10" r="1.3" fill="var(--color-accent)" />
      <circle cx="40" cy="10" r="1.3" fill="var(--color-accent)" />
    </svg>
  )
}

/** 4. Atención confiable: Two people / handshake trust symbol */
function TrustedCareIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 48 48" fill="none" aria-hidden="true">
      {/* Heart at top center */}
      <path
        d="M24 16c-1.5-3-5-5-8-4-4 1.5-5 6-2 10l10 10 10-10c3-4 2-8.5-2-10-3-1-6.5 1-8 4z"
        fill="var(--color-accent)"
        opacity="0.18"
      />
      <path
        d="M24 16c-1.5-3-5-5-8-4-4 1.5-5 6-2 10l10 10 10-10c3-4 2-8.5-2-10-3-1-6.5 1-8 4z"
        stroke="var(--color-accent)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Left hand reaching */}
      <path
        d="M4 34l8-4 4 4"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right hand reaching */}
      <path
        d="M44 34l-8-4-4 4"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Connection line below heart */}
      <path
        d="M16 38h16"
        stroke="var(--color-accent)"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  )
}

// ─── Contact Channel Badge Icons (Dark icons on golden circles) ───

/** WhatsApp – Clean official logo silhouette */
function WhatsAppBadgeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#0a0e16" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/** Phone – Clean solid telephone handset */
function PhoneCallBadgeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#0a0e16" aria-hidden="true">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  )
}

/** Location – Clean solid map pin */
function LocationPinBadgeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#0a0e16" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
    </svg>
  )
}

function ChatButtonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      <path d="M8 9h8M8 13h5" />
    </svg>
  )
}

function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export default function ContactSection() {
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
      icon: <QualityShieldIcon />,
      title: 'Calidad garantizada',
      desc: 'Trabajamos con las mejores marcas y productos certificados para tu seguridad y confianza.',
    },
    {
      icon: <WideVarietyIcon />,
      title: 'Amplia variedad',
      desc: 'Todo lo que necesitas en herramientas y materiales eléctricos en un solo lugar.',
    },
    {
      icon: <SpecializedAdvisorIcon />,
      title: 'Asesoría especializada',
      desc: 'Nuestro equipo te orienta para que elijas la mejor solución para tu proyecto.',
    },
    {
      icon: <TrustedCareIcon />,
      title: 'Atención confiable',
      desc: 'Te acompañamos antes, durante y después de tu compra, siempre.',
    },
  ]

  return (
    <section id="contacto" aria-labelledby="why-title" className="why-contact-section">
      {/* ─── Background texture ─── */}
      <div className="why-contact-bg" aria-hidden="true">
        <img
          src="/assets/products/Fondo%20ubicacion%20y%20horarios.png"
          alt=""
          width={1920}
          height={900}
          loading="lazy"
          decoding="async"
          className="why-contact-bg-img"
        />
        <div className="why-contact-gradient-top" />
        <div className="why-contact-gradient-bottom" />
      </div>

      <div className="page-x why-contact-container">
        {/* ═════════════════════════════════════════════════════
            PART 1: ¿Por qué elegirnos?
        ══════════════════════════════════════════════════════ */}
        <div className="why-header">
          <motion.span {...enter(0)} className="why-overline">
            Tu proyecto, nuestra prioridad
          </motion.span>
          <motion.h2 {...enter(0.08)} id="why-title" className="why-heading">
            ¿Por qué elegirnos?
          </motion.h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="why-cards-grid">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              {...enter(0.12 + idx * 0.08)}
              className="why-card"
            >
              <div className="why-card-top">
                <span className="why-card-icon">{card.icon}</span>
                <h3 className="why-card-title">{card.title}</h3>
              </div>
              <p className="why-card-desc">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ═════════════════════════════════════════════════════
            PART 2: Banner "¿Necesitas ayuda con tu proyecto?"
        ══════════════════════════════════════════════════════ */}
        <motion.div {...enter(0.35)} className="contact-banner">
          {/* Left: Store Image with perfectly coupled diagonal cut & glowing golden border */}
          <div className="contact-banner-media">
            <img
              src="/assets/products/Imagen%20de%20contacto.png"
              alt="Instalaciones y tienda física de Dota Industrial"
              width={700}
              height={450}
              loading="lazy"
              decoding="async"
              className="contact-banner-img"
            />
            {/* Perfectly coupled diagonal SVG divider mask & glowing golden line */}
            <svg
              className="contact-banner-divider-svg"
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
              {/* Mask polygon matches the card dark background seamlessly */}
              <polygon points="50,0 50,100 0,100" fill="#0a0e16" />
              {/* Golden line drawn exactly on the cut edge with bright neon glow */}
              <line
                x1="50"
                y1="0"
                x2="0"
                y2="100"
                stroke="var(--color-accent)"
                strokeWidth="4"
                vectorEffect="non-scaling-stroke"
                filter="url(#goldGlow)"
              />
            </svg>
          </div>

          {/* Center: Copy & Contact channels */}
          <div className="contact-banner-content">
            <div className="contact-banner-header">
              <span className="contact-banner-accent-bar" aria-hidden="true" />
              <h3 className="contact-banner-title">
                ¿Necesitas ayuda <span className="block sm:inline">con tu proyecto?</span>
              </h3>
              <p className="contact-banner-subtitle">
                En Dota Industrial estamos listos para asesorarte y ayudarte a encontrar la mejor solución.
              </p>
            </div>

            {/* 3 Channels: High-Contrast Solid Gold Badges matching Reference */}
            <div className="contact-channels">
              {/* WhatsApp */}
              <a
                href={advisoryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item"
              >
                <div className="contact-channel-badge">
                  <WhatsAppBadgeIcon />
                </div>
                <div>
                  <div className="contact-channel-title">WhatsApp</div>
                  <div className="contact-channel-sub">Escríbenos y recibe respuesta rápida.</div>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+573126572895" className="contact-channel-item">
                <div className="contact-channel-badge">
                  <PhoneCallBadgeIcon />
                </div>
                <div>
                  <div className="contact-channel-title">Llámanos</div>
                  <div className="contact-channel-sub">Habla con uno de nuestros asesores.</div>
                </div>
              </a>

              {/* Visit link */}
              <a href="#visitanos" className="contact-channel-item">
                <div className="contact-channel-badge">
                  <LocationPinBadgeIcon />
                </div>
                <div>
                  <div className="contact-channel-title">Visítanos</div>
                  <div className="contact-channel-sub">Estamos en Cartagena, Colombia.</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Only 'Solicitar asesoría' CTA */}
          <div className="contact-banner-ctas">
            <a
              href={advisoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-accent contact-cta-primary"
            >
              <ChatButtonIcon />
              <span>Solicitar asesoría</span>
              <ArrowRightIcon />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
