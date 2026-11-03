export type DisenCategory =
  | 'Ropa personalizada'
  | 'Bordados'
  | 'Artículos personalizados'
  | 'Publicidad y señalización'
  | 'Accesorios'
export const DISEN_CATEGORIES: ('Todos' | DisenCategory)[] = [
  'Todos',
  'Ropa personalizada',
  'Bordados',
  'Artículos personalizados',
  'Publicidad y señalización',
  'Accesorios',
]

export interface DisenProduct {
  id: string
  name: string
  /** Precio en COP. 0 = «Consultar precio». */
  price: number
  category: DisenCategory
  description: string
  /** Lista de los productos o servicios de la categoría (ya no es una tupla fija de 3). */
  features: string[]
  featured?: boolean
  inCarousel?: boolean
  alt: string
  image?: string
  has3d?: boolean
}

/**
 * Catálogo de Diseñarte: una ficha por categoría, con una sola imagen cada una.
 * La lista de productos de cada categoría va en `features`.
 */
export const DISEN_PRODUCTS: DisenProduct[] = [
  {
    id: 'ropa-personalizada',
    name: 'Ropa Personalizada',
    price: 0,
    category: 'Ropa personalizada',
    featured: true,
    inCarousel: true,
    image: '/assets/products/disenarte-ropa-personalizada.png?v=1',
    description: 'Camisetas, polos, buzos y chaquetas con tu marca, nombre o equipo. Estampados en DTF, sublimado y vinilo textil.',
    features: ['Camisetas deportivas y sublimadas', 'Polos corporativos y deportivos', 'Buzos y suéteres con capota', 'Chaquetas con cierre'],
    alt: 'Polos, camiseta deportiva, buzo con capota y chaqueta personalizados con textos de muestra',
  },
  {
    id: 'bordados',
    name: 'Bordados',
    price: 0,
    category: 'Bordados',
    inCarousel: true,
    image: '/assets/products/disenarte-bordados.png?v=1',
    description: 'Bordados con hilo de calidad, relieve y mucho detalle para instituciones, empresas y marcas.',
    features: ['Bordados institucionales: escudos de colegios e instituciones', 'Bordados empresariales: logos en uniformes y dotación', 'Gorras y polos corporativos bordados', 'Parches bordados premium'],
    alt: 'Gorra, polo corporativo, uniforme y parches con bordados de muestra',
  },
  {
    id: 'articulos-personalizados',
    name: 'Artículos Personalizados',
    price: 0,
    category: 'Artículos personalizados',
    inCarousel: true,
    image: '/assets/products/disenarte-articulos-personalizados.png?v=1',
    description: 'Detalles con tu marca o diseño para regalar, obsequiar a tus clientes o usar en tu empresa.',
    features: ['Mugs personalizados', 'Vasos térmicos', 'Termos metálicos', 'Llaveros', 'Agendas', 'Portadocumentos', 'Cajas de regalo personalizadas'],
    alt: 'Mug, vaso térmico, termo, llavero, agenda, portadocumentos y caja de regalo con textos de muestra',
  },
  {
    id: 'publicidad-senalizacion',
    name: 'Publicidad y Señalización',
    price: 0,
    category: 'Publicidad y señalización',
    inCarousel: true,
    image: '/assets/products/disenarte-publicidad-senalizacion.png?v=1',
    description: 'Publicidad y señalización a la medida para dar visibilidad a tu negocio, evento o empresa.',
    features: ['Pendones publicitarios', 'Avisos comerciales', 'Señalización empresarial', 'Stickers y etiquetas personalizadas'],
    alt: 'Pendón publicitario, aviso comercial, señal empresarial, stickers y etiquetas con textos de muestra',
  },
  {
    id: 'accesorios',
    name: 'Accesorios',
    price: 0,
    category: 'Accesorios',
    inCarousel: true,
    image: '/assets/products/disenarte-accesorios.png?v=1',
    description: 'Accesorios con tu logo o marca para empresas, emprendimientos, colegios y equipos deportivos.',
    features: ['Gorras bordadas', 'Lanyards', 'Mochilas', 'Tote bags', 'Llaveros personalizados'],
    alt: 'Gorras bordadas, lanyards, mochilas, tote bags y llaveros con textos de muestra',
  },
]

export const DISEN_CAROUSEL = DISEN_PRODUCTS.filter((p) => p.inCarousel)

/** Devuelve la imagen del producto si está disponible, o vacío. */
export const disenImgOf = (p: Pick<DisenProduct, 'id'> & { image?: string }) => p.image ?? ''
