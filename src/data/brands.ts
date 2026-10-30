export type BrandId = 'dota' | 'disenarte'

export interface BrandConfig {
  id: BrandId
  name: string
  subtitle?: string
  slogan: string
  heroTitle: [string, string]
  heroSubtitle: string
  heroTagline: [string, string]
  ctaLabel: string
  productsTitle: [string, string]
  productsSubtitle: string
  colors: {
    accent: string
    accentInk: string
    accentHover: string
    bg: string
    surface: string
    surface2: string
    surface3: string
    ink: string
    soft: string
  }
  heroBg: string
  logoUrl: string
  whatsappPhone: string
  whatsappMessage: string
}

export const BRANDS: Record<BrandId, BrandConfig> = {
  dota: {
    id: 'dota',
    name: 'Dota Industrial',
    slogan: 'Tu seguridad es nuestra',
    heroTitle: ['TU SEGURIDAD', 'ES NUESTRA'],
    heroSubtitle: 'Herramientas, materiales eléctricos y todo lo que necesitas para construir, reparar y mejorar tus proyectos de forma segura.',
    heroTagline: ['Protección y calidad', 'para tu trabajo'],
    ctaLabel: 'Ver productos',
    productsTitle: ['Todo lo que necesitas', 'en un solo lugar'],
    productsSubtitle: 'Explora nuestra selección de productos, diseñados para ofrecerte calidad, resistencia y el mejor rendimiento.',
    colors: {
      accent: '#ffc400',
      accentInk: '#111214',
      accentHover: '#ffd23d',
      bg: '#07080a',
      surface: '#0f1216',
      surface2: '#181c22',
      surface3: '#222730',
      ink: '#f4f5f7',
      soft: '#c3c8d0',
    },
    heroBg: '/assets/products/Fondo-Hero.png',
    logoUrl: '/assets/products/Logo%20dota%20industrial.png',
    whatsappPhone: '573004009316',
    whatsappMessage: '¡Hola! Me comunico desde la página web de Dota Industrial. Quisiera solicitar más información y asesoría sobre sus herramientas y equipos.',
  },
  disenarte: {
    id: 'disenarte',
    name: 'Diseñarte',
    subtitle: 'Bordado & Estampado',
    slogan: 'Hecho con amor, punto a punto',
    heroTitle: ['HECHO CON AMOR,', 'PUNTO A PUNTO'],
    heroSubtitle: 'Bordados personalizados, estampados únicos y diseños que cuentan tu historia. Cada puntada es una obra de arte.',
    heroTagline: ['Arte y creatividad', 'en cada detalle'],
    ctaLabel: 'Ver colección',
    productsTitle: ['Diseños únicos', 'hechos para ti'],
    productsSubtitle: 'Descubre nuestra colección de bordados y estampados artesanales, creados con pasión y dedicación en cada detalle.',
    colors: {
      accent: '#e8618c',
      accentInk: '#fff',
      accentHover: '#f07da3',
      bg: '#0c0810',
      surface: '#140f1a',
      surface2: '#1e1726',
      surface3: '#2a2132',
      ink: '#f6f2fa',
      soft: '#c8bdd4',
    },
    heroBg: '/assets/products/Fondo%20Hero%20Dise%C3%B1arte.png',
    logoUrl: '/assets/products/Logo%20diseñarte.png',
    whatsappPhone: '573023067887',
    whatsappMessage: '¡Hola! Me comunico desde la página web de Diseñarte. Quisiera consultar y cotizar un diseño personalizado de bordado o estampado.',
  },
}

export function getWhatsAppUrl(phone: string, message: string) {
  const cleanPhone = phone.replace(/[^0-9]/g, '')
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`
}
