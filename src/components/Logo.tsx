import { useBrand } from '../hooks/useBrand'

export function LogoMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <polygon points="1,3 14,3 20,25 26,3 39,3 25,37 15,37" fill="var(--color-accent)" />
      <polygon points="22,0 12,19 19,19 16,32 28,12 21,12" fill="var(--color-bg)" />
    </svg>
  )
}

export function DisenLogoMark({ className = 'h-10 w-10' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true" focusable="false">
      <path
        d="M20 8c-3.2 0-6 1.6-7.6 4.4-2 3.2-2.4 6.4-.4 9.2l8 13.6 8-13.6c1.6-2.8 1.2-6-.4-8.8C26 9.6 23.2 8 20 8z"
        fill="var(--color-accent)"
        opacity="0.9"
      />
      <circle cx="20" cy="18" r="4" fill="var(--color-bg)" />
      {/* Needle */}
      <line x1="28" y1="4" x2="20" y2="18" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="29" cy="3" r="2.5" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" />
    </svg>
  )
}

export function Logo() {
  const { brandId } = useBrand()

  if (brandId === 'disenarte') {
    return (
      <a href="#inicio" className="group flex items-center gap-3 rounded-lg py-1 transition-opacity hover:opacity-95" aria-label="Diseñarte, ir al inicio" translate="no">
        <img
          src="/assets/products/Logo%20diseñarte.png"
          alt="Logo Diseñarte"
          width={56}
          height={56}
          className="h-11 w-11 sm:h-13 sm:w-13 rounded-full object-contain drop-shadow-[0_4px_12px_rgba(232,97,140,0.35)] transition-transform duration-300 group-hover:scale-105"
        />
        <span className="flex flex-col font-display font-extrabold uppercase leading-[.86]">
          <span className="text-[1.375rem] text-accent sm:text-[2rem]">Diseñarte</span>
          <span className="text-[0.75rem] tracking-[0.08em] text-soft font-medium normal-case">Bordado & Estampado</span>
        </span>
      </a>
    )
  }

  return (
    <a href="#inicio" className="group flex items-center gap-3 rounded-lg py-1 transition-opacity hover:opacity-95" aria-label="Dota Industrial, ir al inicio" translate="no">
      <img
        src="/assets/products/Logo%20dota%20industrial.png"
        alt="Logo Dota Industrial"
        width={56}
        height={56}
        className="h-11 w-11 sm:h-13 sm:w-13 object-contain drop-shadow-[0_4px_12px_rgba(255,196,0,0.3)] transition-transform duration-300 group-hover:scale-105"
      />
      <span className="flex flex-col font-display font-extrabold uppercase leading-[.86]">
        <span className="text-[1.0625rem] tracking-[0.04em] text-ink">Dota</span>
        <span className="text-[1.375rem] text-accent sm:text-[2rem]">Industrial</span>
      </span>
    </a>
  )
}
