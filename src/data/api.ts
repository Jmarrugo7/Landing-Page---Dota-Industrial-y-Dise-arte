import { PRODUCTS, type Product } from './products'
import { DISEN_PRODUCTS, type DisenProduct } from './disenProducts'
import { DOTA_WHATSAPP_LINES, type WhatsAppLine } from './brands'
import { CATEGORIES as STATIC_CATEGORIES } from './products'
import { DISEN_CATEGORIES as STATIC_DISEN_CATEGORIES } from './disenProducts'

const API_BASE = '/api/public'

export interface PublicSections {
  inicio: boolean
  productos: boolean
  contacto: boolean
  visitanos: boolean
}

/**
 * Fetch categories from admin API with fallback to static data
 */
export async function getPublicCategories(brand: 'dota' | 'disenarte'): Promise<string[]> {
  try {
    const res = await fetch(`${API_BASE}/categories?brand=${brand}`, { signal: AbortSignal.timeout(2000) })
    if (res.ok) {
      const data: { id: number; name: string }[] = await res.json()
      if (Array.isArray(data) && data.length > 0) {
        return ['Todos', ...data.map((c) => c.name)]
      }
    }
  } catch {}
  return brand === 'dota'
    ? (STATIC_CATEGORIES as string[])
    : (STATIC_DISEN_CATEGORIES as string[])
}

/**
 * Fetch visible site sections from admin API with fallback
 */
export async function getPublicSections(): Promise<PublicSections> {
  try {
    const res = await fetch(`${API_BASE}/sections`, { signal: AbortSignal.timeout(2000) })
    if (res.ok) {
      const data = await res.json()
      return {
        inicio: data.inicio ?? true,
        productos: data.productos ?? true,
        contacto: data.contacto ?? true,
        visitanos: data.visitanos ?? true,
      }
    }
  } catch {}
  return { inicio: true, productos: true, contacto: true, visitanos: true }
}

/**
 * Fetch products for brand with fallback
 */
export async function getPublicProducts(brand: 'dota' | 'disenarte'): Promise<any[]> {
  try {
    const res = await fetch(`${API_BASE}/products?brand=${brand}`, { signal: AbortSignal.timeout(2000) })
    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data) && data.length > 0) return data
    }
  } catch {}
  return brand === 'dota' ? PRODUCTS : DISEN_PRODUCTS
}

/**
 * Fetch hero carousel products with fallback
 */
export async function getPublicHero(brand: 'dota' | 'disenarte'): Promise<any[]> {
  try {
    const res = await fetch(`${API_BASE}/hero?brand=${brand}`, { signal: AbortSignal.timeout(2000) })
    if (res.ok) {
      const data = await res.json()
      if (Array.isArray(data) && data.length > 0) return data
    }
  } catch {}
  return brand === 'dota' ? PRODUCTS.filter((p) => p.inCarousel) : DISEN_PRODUCTS.filter((p) => p.inCarousel)
}

/**
 * Fetch attention lines with fallback
 */
export async function getPublicAttentionLines(brand: 'dota' | 'disenarte'): Promise<WhatsAppLine[]> {
  try {
    const res = await fetch(`${API_BASE}/attention-lines?brand=${brand}`, { credentials: 'omit', signal: AbortSignal.timeout(2000) })
    if (res.ok) {
      const lines = await res.json()
      if (Array.isArray(lines) && lines.length > 0) return lines
    }
  } catch {}
  return DOTA_WHATSAPP_LINES
}

/**
 * Fetch default WhatsApp message with fallback
 */
export async function getPublicWhatsAppMessage(brand: 'dota' | 'disenarte'): Promise<string> {
  try {
    const res = await fetch(`${API_BASE}/whatsapp?brand=${brand}`, { signal: AbortSignal.timeout(2000) })
    if (res.ok) {
      const data = await res.json()
      if (data?.message) return data.message
    }
  } catch {}
  return brand === 'dota'
    ? '¡Hola! Me comunico desde la página web de Dota Industrial. Quisiera solicitar más información y asesoría sobre sus herramientas y equipos.'
    : '¡Hola! Me comunico desde la página web de Diseñarte. Quisiera consultar y cotizar un diseño personalizado de bordado o estampado.'
}

/**
 * Fetch primary location with fallback
 */
export async function getPublicLocation(): Promise<any> {
  try {
    const res = await fetch(`${API_BASE}/locations`, { signal: AbortSignal.timeout(2000) })
    if (res.ok) {
      const data = await res.json()
      return data.primary
    }
  } catch {}
  return null
}
