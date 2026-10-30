import { motion } from 'framer-motion'
import { useBrand } from '../hooks/useBrand'
import { getWhatsAppUrl } from '../data/brands'

const DOTA_MAPS_LINK =
  'https://www.google.com/maps/place/dotaindustrial+sas/@10.3737214,-75.5019221,19z/data=!4m6!3m5!1s0x8ef6270024242a49:0xd49732c234ce3134!8m2!3d10.3736781!4d-75.5013732!16s%2Fg%2F11xff3n18f?entry=ttu&g_ep=EgoyMDI2MTAyNy4wIKXMDSoASAFQAw%3D%3D'

const DISEN_MAPS_LINK =
  'https://www.google.com/maps/place/dise%C3%B1arte/@10.3763069,-75.5024551,17z/data=!3m1!4b1!4m6!3m5!1s0x8ef625ac347b35f7:0x8055577819b7deb9!8m2!3d10.3763069!4d-75.4998802!16s%2Fg%2F11zjpm3by2?entry=ttu&g_ep=EgoyMDI2MTAyNy4wIKXMDSoASAFQAw%3D%3D'

export default function Footer() {
  const { brandId, brand } = useBrand()
  const isDota = brandId === 'dota'
  const currentYear = new Date().getFullYear()

  const mapsLink = isDota ? DOTA_MAPS_LINK : DISEN_MAPS_LINK
  const phone = isDota ? '573126572895' : '573245516942'
  const phoneDisplay = isDota ? '312 657 2895' : '324 551 6942'

  const whatsappUrl = getWhatsAppUrl(
    brand.whatsappPhone,
    isDota
      ? '¡Hola Dota Industrial! Me comunico desde su sitio web y deseo solicitar una cotización de productos y dotación.'
      : '¡Hola Diseñarte! Me comunico desde su sitio web y deseo cotizar un pedido personalizado de bordados o estampados.'
  )

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/10 bg-surface/80 backdrop-blur-xl text-soft pt-16 pb-12 transition-colors duration-500">
      {/* Decorative top ambient glow line */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] opacity-75"
        style={{
          background: `linear-gradient(90deg, transparent 0%, var(--color-accent) 50%, transparent 100%)`,
        }}
        aria-hidden="true"
      />

      <div className="page-x max-w-[1280px] mx-auto">
        {/* Main 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Col 1: Brand Info & Description (4 cols on lg) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3.5">
              <img
                src={brand.logoUrl}
                alt={brand.name}
                width={50}
                height={50}
                className="h-12 w-12 object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
              />
              <div>
                <h3 className="font-display font-black uppercase text-ink tracking-wider leading-none text-xl">
                  {brand.name}
                </h3>
                <p className="text-xs text-accent font-medium mt-1">
                  {brand.slogan}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-soft/90 max-w-[42ch]">
              {isDota
                ? 'Expertos en dotación industrial, equipos de protección personal (EPP), materiales eléctricos y herramientas profesionales de alta durabilidad en Cartagena.'
                : 'Taller especializado en bordados computarizados de alta fidelidad, estampados personalizados y dotación corporativa con identidad única.'}
            </p>

            {/* Wholesale badge */}
            <div className="mt-2 inline-flex items-center gap-2 rounded-lg bg-surface-2/90 border border-white/5 px-3.5 py-2 text-xs text-ink w-fit">
              <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
              <span>{isDota ? 'Ventas al por mayor y dotación empresarial' : 'Pedidos corporativos y personalizados'}</span>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-xl bg-surface-2 border border-white/10 text-ink transition-all duration-300 hover:bg-accent hover:text-accent-ink hover:scale-105"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.031 2C6.5 2 2.012 6.488 2.012 12.019c0 1.954.563 3.774 1.536 5.318L2 22l4.825-1.517a9.96 9.96 0 005.206 1.536c5.531 0 10.019-4.488 10.019-10.019S17.562 2 12.031 2zm0 18.281a8.23 8.23 0 01-4.225-1.164l-.303-.18-2.862.9 1.13-2.775-.198-.315a8.242 8.242 0 01-1.272-4.472c0-4.57 3.72-8.289 8.29-8.289 4.57 0 8.289 3.719 8.289 8.289 0 4.57-3.719 8.289-8.289 8.289zm4.542-6.197c-.248-.124-1.47-.726-1.698-.809-.228-.083-.394-.124-.56.124-.166.248-.643.809-.788.975-.145.166-.29.187-.538.062a6.786 6.786 0 01-1.996-1.231 7.488 7.488 0 01-1.382-1.72c-.145-.248-.016-.382.108-.506.111-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.35-.767-1.848-.202-.486-.407-.42-.56-.428l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.871.851-.871 2.075s.892 2.406 1.016 2.572c.124.166 1.753 2.678 4.246 3.755.593.256 1.057.409 1.419.524.596.189 1.139.162 1.568.098.479-.072 1.47-.601 1.677-1.182.207-.581.207-1.079.145-1.182-.062-.104-.228-.166-.477-.29z" />
                </svg>
              </a>

              {/* Phone call */}
              <a
                href={`tel:+${phone}`}
                aria-label="Llamar por teléfono"
                className="grid h-10 w-10 place-items-center rounded-xl bg-surface-2 border border-white/10 text-ink transition-all duration-300 hover:bg-accent hover:text-accent-ink hover:scale-105"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
              </a>

              {/* Location pin */}
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver ubicación en Google Maps"
                className="grid h-10 w-10 place-items-center rounded-xl bg-surface-2 border border-white/10 text-ink transition-all duration-300 hover:bg-accent hover:text-accent-ink hover:scale-105"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2.5 cols on lg) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-display font-bold uppercase text-ink tracking-wider text-sm">
              Navegación
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm list-none p-0 m-0">
              <li>
                <a href="#inicio" className="transition-colors hover:text-accent">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#productos" className="transition-colors hover:text-accent">
                  Productos
                </a>
              </li>
              {isDota && (
                <li>
                  <a href="#contacto" className="transition-colors hover:text-accent">
                    Contacto & Asesoría
                  </a>
                </li>
              )}
              <li>
                <a href="#visitanos" className="transition-colors hover:text-accent">
                  Visítanos & Horarios
                </a>
              </li>
              <li>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent inline-flex items-center gap-1.5"
                >
                  <span>Cómo llegar</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Categories / Services (2.5 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-display font-bold uppercase text-ink tracking-wider text-sm">
              {isDota ? 'Líneas de Producto' : 'Servicios de Diseño'}
            </h4>
            <ul className="flex flex-col gap-2 text-sm list-none p-0 m-0">
              {isDota ? (
                <>
                  <li>
                    <a href="#productos" className="transition-colors hover:text-accent">
                      Equipos de Protección Personal (EPP)
                    </a>
                  </li>
                  <li>
                    <a href="#productos" className="transition-colors hover:text-accent">
                      Calzado y Botas de Seguridad
                    </a>
                  </li>
                  <li>
                    <a href="#productos" className="transition-colors hover:text-accent">
                      Herramientas Profesionales
                    </a>
                  </li>
                  <li>
                    <a href="#productos" className="transition-colors hover:text-accent">
                      Materiales Eléctricos e Iluminación
                    </a>
                  </li>
                  <li>
                    <a href="#productos" className="transition-colors hover:text-accent">
                      Ropa y Protección Industrial
                    </a>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <a href="#productos" className="transition-colors hover:text-accent">
                      Bordados Computarizados
                    </a>
                  </li>
                  <li>
                    <a href="#productos" className="transition-colors hover:text-accent">
                      Estampados Textiles Personalizados
                    </a>
                  </li>
                  <li>
                    <a href="#productos" className="transition-colors hover:text-accent">
                      Gorras, Camisas y Uniformes
                    </a>
                  </li>
                  <li>
                    <a href="#productos" className="transition-colors hover:text-accent">
                      Diseños Corporativos a Medida
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Col 4: Contact & Store Info (3 cols on lg) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-display font-bold uppercase text-ink tracking-wider text-sm">
              Atención y Contacto
            </h4>

            <div className="flex flex-col gap-3 text-sm">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <a
                  href={mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  20 de Julio, Cartagena de Indias, Bolívar
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-2.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                <a href={`tel:+${phone}`} className="transition-colors hover:text-accent">
                  {phoneDisplay}
                </a>
              </div>

              {/* WhatsApp direct */}
              <div className="flex items-center gap-2.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--color-accent)" className="shrink-0" aria-hidden="true">
                  <path d="M12.031 2C6.5 2 2.012 6.488 2.012 12.019c0 1.954.563 3.774 1.536 5.318L2 22l4.825-1.517a9.96 9.96 0 005.206 1.536c5.531 0 10.019-4.488 10.019-10.019S17.562 2 12.031 2zm0 18.281a8.23 8.23 0 01-4.225-1.164l-.303-.18-2.862.9 1.13-2.775-.198-.315a8.242 8.242 0 01-1.272-4.472c0-4.57 3.72-8.289 8.29-8.289 4.57 0 8.289 3.719 8.289 8.289 0 4.57-3.719 8.289-8.289 8.289z" />
                </svg>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent font-medium text-ink"
                >
                  Cotizar por WhatsApp
                </a>
              </div>

              {/* Hours summary */}
              <div className="flex items-start gap-2.5 mt-1 pt-2 border-t border-white/5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 3" />
                </svg>
                <div className="text-xs text-soft/80 leading-snug">
                  <div>Lun a Vie: 7:00 a. m. – 5:00 p. m.</div>
                  <div className="mt-0.5">Sábados: 7:00 a. m. – 3:00 p. m.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-soft/75">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {brand.name}. Todos los derechos reservados.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <span>Cartagena de Indias, Colombia</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-accent hover:underline transition-colors font-medium cursor-pointer"
            >
              <span>Volver arriba</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
