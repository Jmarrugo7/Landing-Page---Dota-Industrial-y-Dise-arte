import { motion, useReducedMotion } from 'framer-motion'

const GOOGLE_MAPS_LINK =
  'https://www.google.com/maps/place/dotaindustrial+sas/@10.3737214,-75.5019221,19z/data=!4m6!3m5!1s0x8ef6270024242a49:0xd49732c234ce3134!8m2!3d10.3736781!4d-75.5013732!16s%2Fg%2F11xff3n18f?entry=ttu&g_ep=EgoyMDI2MTAyNy4wIKXMDSoASAFQAw%3D%3D'

const EMBED_MAP_SRC =
  'https://www.google.com/maps?q=10.3736781,-75.5013732&z=17&output=embed'

const ease = [0.22, 0.8, 0.24, 1] as const

function LocationPin() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
        fill="var(--color-accent)"
      />
      <circle cx="12" cy="9" r="2.5" fill="var(--color-accent-ink)" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="var(--color-accent)" strokeWidth="2" />
      <path d="M12 7v5l3 3" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
        stroke="var(--color-accent)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="visit-cta-arrow">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export default function VisitSection() {
  const reduced = useReducedMotion() ?? false

  const enter = (d: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.7, delay: d, ease },
        }

  return (
    <section id="visitanos" aria-labelledby="visit-titulo" className="visit-section">
      {/* ─── Background image ─── */}
      <div className="visit-bg" aria-hidden="true">
        <img
          src="/assets/products/Fondo%20ubicacion%20y%20horarios.png"
          alt=""
          width={1920}
          height={900}
          loading="lazy"
          decoding="async"
          className="visit-bg-img"
        />
        <div className="visit-bg-overlay" />
        <div className="visit-bg-gradient-top" />
        <div className="visit-bg-gradient-bottom" />
      </div>

      <div className="page-x visit-container">
        <motion.div {...enter(0)} className="visit-card">
          {/* ─── Left: Info ─── */}
          <div className="visit-info">
            <motion.span {...enter(0.05)} className="visit-label">
              Visítanos
            </motion.span>
            <motion.h2 {...enter(0.1)} id="visit-titulo" className="visit-title">
              Encuéntranos
            </motion.h2>

            {/* Address */}
            <motion.div {...enter(0.18)} className="visit-row">
              <span className="visit-icon"><LocationPin /></span>
              <div>
                <p className="visit-row-title">Dirección</p>
                <p className="visit-row-detail">20 de Julio, Cartagena de Indias, Bolívar</p>
              </div>
            </motion.div>

            <div className="visit-divider" />

            {/* Hours */}
            <motion.div {...enter(0.25)} className="visit-row">
              <span className="visit-icon"><ClockIcon /></span>
              <div>
                <p className="visit-row-title">Horario de atención</p>
                <div className="visit-hours">
                  <div className="visit-hours-row">
                    <span>Lunes a viernes</span>
                    <span>7:00 a. m. – 5:00 p. m.</span>
                  </div>
                  <div className="visit-hours-row">
                    <span>Sábados</span>
                    <span>7:00 a. m. – 3:00 p. m.</span>
                  </div>
                  <div className="visit-hours-row visit-hours-closed">
                    <span>Domingos</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="visit-divider" />

            {/* Phone */}
            <motion.div {...enter(0.32)} className="visit-row">
              <span className="visit-icon"><PhoneIcon /></span>
              <div>
                <p className="visit-row-title">Teléfono</p>
                <a href="tel:+573126572895" className="visit-row-detail visit-phone-link">312 657 2895</a>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div {...enter(0.4)}>
              <a
                href={GOOGLE_MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent visit-cta"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                </svg>
                <span>Cómo llegar</span>
                <ArrowRight />
              </a>
            </motion.div>
          </div>

          {/* ─── Right: Map ─── */}
          <motion.div {...enter(0.2)} className="visit-map-wrapper">
            <div className="visit-map-border">
              <iframe
                title="Ubicación de Dota Industrial en Google Maps"
                src={EMBED_MAP_SRC}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="visit-map-iframe"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
